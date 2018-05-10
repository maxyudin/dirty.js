# chmod +x dirty.sh
node fetch.js $1
node process.js $1
open $1.html