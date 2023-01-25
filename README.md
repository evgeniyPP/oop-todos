## TODO List (OOP)

The backend is powered by [JSON Server](https://github.com/typicode/json-server):

```
npm install -g json-server

json-server --watch db.json
```

If you use VSCode + [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to run the app, do not forget to update ignore settings to include JSON files:

```
"liveServer.settings.ignoreFiles": [
  ".vscode/**",
  "**/*.scss",
  "**/*.sass",
  "**/*.ts",
  "**/*.json"
],
```
