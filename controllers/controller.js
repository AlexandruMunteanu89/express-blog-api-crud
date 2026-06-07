//  Importo dati del post
const posts = require("../data/posts");

// elenco funzioni relative alle rotte della risorsa post

const index = (req, res) => {
    res.json({ message: 'index route'});
    console.log("rotta index");
    
}
module.exports = {index};