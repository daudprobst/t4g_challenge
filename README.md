# Live Version

There is a [live version of this app](https://fathomless-everglades-14095.herokuapp.com/) deployed on Heroku.\
**Important**: Since this is a free deploy on Heroku, the Heroku server only starts the app once you click on the link. That means that there will be some delay (~30s) before the app loads for the first time. This is unrelated to the performance of the app itself.


# Available Scripts

In the project directory, you can run:

### `npm run install_all`
Installs all dependencies for client and server.

### `npm run offline`

Runs the app locally. Starts both client and server. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
For development you can separately start server and client with the following commands.

### `npm run client`

Will start only the client.\
If you only run the client without the server, the data will not get fetched properly.

### `npm run build:client`

Builds a production version of the client for deployment.

### `npm run server`

Will start only the server.


# Create React App

The frontend for this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
