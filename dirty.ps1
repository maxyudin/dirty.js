# .\dirty.ps1 jovan
param([string]$username = '')
node .\fetch.js $username
node .\process.js $username
