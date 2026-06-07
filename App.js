const express = require('express');
const app = express();
const port = 3000;
// Importo routerPosts
const routerPosts = require('./routers/routerPosts');

app.use(express.json());
//register the static assest
app.use(express.static('public'))


// Create the first route (home)
app.get('/', (req, res) => {
  res.json({ message: 'Server del mio blog!'});
});

// rotte di CRUD
app.use('/posts', routerPosts);


//Start the server lsitener
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});