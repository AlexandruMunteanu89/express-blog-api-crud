const express = require('express');
const app = express();
const port = 3000;

//register the static assest
app.use(express.static('public'))


// Define your routes here
app.get('/', (req, res) => {
  res.send('Server del mio blog!');
});


//Start the server lsitener
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.get('/bacheca', (req, res) => {
const prodocs = [
    {
        titolo: "Ciambellone",
        contenuto: "Farina", 
        immagine: "images/ciambellone.jpeg",
        tags: ["Farina", "Zucchero", "Uova", "Burro", "Latte"],
    },
    {
        titolo: "Cracker",
        contenuto: "Farina", 
        immagine: "images/cracker_barbabietola.jpeg",
        tags: ["Farina", "Barbabietola", "Sale", "Semi di sesamo", "Rosmarino"],
    },
    {
        titolo: "Pane",
        contenuto: "Farina", 
        immagine: "images/pane_fritto_dolce.jpeg",
        tags: ["Farina", "Zucchero", "Uova", "Cioccolato", "Latte"],
    },
    {
        titolo: "Pasta",
        contenuto: "Farina", 
        immagine: "images/pasta_barbabietola.jpeg",
        tags: ["Farina", "Barbabietola", "Sale", "Uova"],
    },
    {
        titolo: "Torta",
        contenuto: "Farina", 
        immagine: "images/torta_paesana.jpeg",
        tags: ["Farina", "Zucchero", "Uova", "Cacao", "Latte", "Uvetta"],
    },
];
})
// Get prodocs
app.get('/prodocs', (req, res) => {
res.json(prodocs)
})