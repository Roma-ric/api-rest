//Mettre en place le Serveur
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 5000;

// //Importer les users routes
// const userRoutes = require("./routes/users");

// //Importer la connexion a MongoDB
// require("./models/db");

// //Middleware
// app.use(express.json);
// app.use("/api/users", userRoutes);

//Demarrer le serveur
app.listen(port, ()=>{
    console.log('Server is running on http://localhost:5000')
});

//Route vers les informations
app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: "Romaric AKODJENOU",
            birthday: "07/09/2003"
        },
        {
            id: 2,
            name: "Ella AKODJENOU",
            birthday: "02/02/2001"
        }
    ];
    res.json(users);
});

app.get('/api/admin', (req, res) => {
    const admin = [
        {
            // id: 1,
            // name: "Romaric AKODJENOU",
            // birthday: "07/09/2003"
        },
        {
            // id: 2,
            // name: "Ella AKODJENOU",
            // birthday: "02/02/2001"
        }
    ];
    res.json(admin);
});
