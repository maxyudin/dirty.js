const fs = require('fs')
const https = require('https')

const username = process.argv[2] // ['node', 'dirty-fetch.js', %username%]

const getURL = (username, type, number) => `https://d3.ru/api/users/${username}/${type}/?page=${number}`

const getJSON = (url) => {
    console.log(url)
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (response.statusCode != 200) reject(new Error(response))
            const body = []
            response.on('data', (chunk) => body.push(chunk))
            response.on('end', () => resolve(JSON.parse(body.join(''))))
        })
        request.on('error', (error) => reject(error))
    })
}

const getPages = async function(username, type) {
    let json = await getJSON(getURL(username, type, 1))
    let page_count = json.page_count
    let pages = json[type]
    for (let i = 2; i <= page_count; i++) {
        const url = getURL(username, type, i)
        json = await getJSON(url)
        pages = pages.concat(json[type])
    }
    return pages
}

Promise.all([getPages(username, 'posts'), getPages(username, 'comments')])
    .then((result) => {
        console.log(result[0].length)
        console.log(result[1].length)
        fs.writeFile(
            `${username}-posts.json`,
            JSON.stringify(result[0], null, 2),
            () => console.log('Posts are saved.'))
        fs.writeFile(
            `${username}-comments.json`,
            JSON.stringify(result[1], null, 2),
            () => console.log('Comments are saved.'))
    })