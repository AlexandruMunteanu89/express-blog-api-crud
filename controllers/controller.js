//  Importo dati del post
const posts = require("../data/posts");

// elenco funzioni relative alle rotte della risorsa post

const index = (req, res) => {
    const tags = req.query.tags;

    if (tags) {
        //
        const filteredPosts = posts.filter(post => post.tags.includes(tags));
        return res.json(filteredPosts);
    }
    res.json(posts);
}


const show = (req, res) => {
    console.log(req.params);
    const postId = parseInt(req.params.id);
    console.log(postId);

    // cerchiamo il post tramite id
    const singlePost = posts.find(post => post.id === postId);
    //imposto lo status 404
    if (!singlePost) {
        return res.status(404).json({ error: true, message: '404 Post not found' });
    }


    res.json(singlePost);
    
}


// Store una nuova Post
const store = (req, res) => {
    console.log(req.body);
    res.json({ message: 'Store a new post'});
}

//Modifica integrale post
const update = (req, res) => {
    res.json({ message: 'Modifica integrale post'})
}

//Modifica parziale del post
const modify = (req, res) => {
    res.json({ message: 'Modifica parziale del post'})
}

const destroy = (req, res) => {
    console.log(req.params);
    const postId = parseInt(req.params.id);
    console.log(postId);
    // cerchiamo il post tramite id
    const thisPost = posts.find(post => post.id === postId);

    //imposto lo status 404
    if (!thisPost) {
        return res.status(404).json({ error: true, message: '404 Post not found'});
    }

    //restituisco un JSON con il post trovato
    const index = posts.indexOf(thisPost);

    //Rimuoviamo il post
    posts.splice(index, 1);

    //Returniamo lo status corretto
    res.sendStatus(204);



    res.json(thisPost);
    
    
}

module.exports = {index, show, store, update, modify, destroy};