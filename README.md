# dirty

Код к вот [этой](https://beta.observablehq.com/@romaklimenko/social-activity-visualization) статье.

## На UNIX

В первый раз:

```
npm i
chmod +x dirty.sh
```

```
./dirty.sh jovan
```

## На Windows (Powershell)

В первый раз:

```
npm i
```

```
.\dirty.ps1 jovan
```

***

После этих команд в корневой директории должны появиться

* `jovan-posts.json` – все посты пользователя
* `jovan-comments.json` – все комментарии пользователя
* `jovan-activities.json` – даты и рейтинги активностей
* `jovan.html` – веб-страница с графиками