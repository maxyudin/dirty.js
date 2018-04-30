# dirty

Код к вот [этой](https://beta.observablehq.com/@romaklimenko/social-activity-visualization) статье.

На UNIX:
```USER="jovan" ; node dirty-fetch.js $USER ; node dirty-process.js $USER```

На Windows (Powershell)
```.\dirty.ps1 jovan```

После этой команды в корневой директории должны появиться `jovan-posts.json`, `jovan-comments.json`, `jovan-activities.json` и `jovan.html`.

В первый раз нужно сделать `npm i`, конечно же.
