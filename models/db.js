//Connexion a la base de donnee 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connecter a MongoDB");
})
.catch((err) => {
    console.log("Erreur de connexion a MongoDB: ", err.message)
});

