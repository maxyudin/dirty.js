const fs = require('fs')
const pug = require('pug')

const username = process.argv[2] // ['node', 'dirty-process.js', %username%]

const posts_raw = require(`./${username}-posts.json`)
const comments_raw = require(`./${username}-comments.json`)

const epochToDate = (epoch) => {
    const date = new Date(0)
    date.setUTCSeconds(epoch)
    return date
}

const reshape = (i) => {
    return {
        created: epochToDate(i.created),
        rating: i.rating,
    }
}

const posts = posts_raw.filter((i) => !i.is_hidden).map(reshape)
const comments = comments_raw.filter((i) => !i.is_hidden).map(reshape)
const activities = posts.concat(comments)
activities.sort((a, b) => a.created > b.created ? 1 : a.created < b.created ? -1 : 0)

const html = pug.renderFile('index.pug', { activities: JSON.stringify(activities), username: username})

fs.writeFile(
    `users\\${username}-activities.json`,
    JSON.stringify(activities, null, 2),
    () => console.log('Activities are saved.')
)

fs.writeFile(
    `users\\${username}.html`,
    html,
    () => console.log('HTML is saved.')
)