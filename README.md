## Star work with the app

In the project directory, you can run:

### `npm install`
At first we install npm dependencies 

In the project we use MySQL Database and the nex step we must
go to ormconfig.json ang add our personal `username` and `password`

```js
{ 
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "your MySQL username!!!",
  "password": "your MySQL password!!!",
  "database": "task",
  "synchronize": false,
  "logging": false,
  "subscribers": [
  ],
  "cli": {
 }
```

After that we run the script
### `npm run migration:run`
It will create our database and migration;

After that we check if our client server is running at `http://localhost:3000`
if not, we go into our `.env` and change the `FRONTEND_HOST` to the one we have


That is all and we start the app

### `npm run start`
