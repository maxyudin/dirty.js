param([string]$username = '')
node .\dirty-fetch.js $username
node .\dirty-process.js $username
