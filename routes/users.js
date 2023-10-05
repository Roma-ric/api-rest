/* CRUD */
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const req = require("express/lib/request");
const res = require("express/lib/response");

// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");
// const req = require("express/lib/request");
// const res = require("express/lib/response");

//Create
router.post("/", (req, res) => {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });

    newUser.save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json({error: "Erreur de creation d'utilisateur"});
        });
});

//Read
router.get("/", (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json({error: "Erreur d'affichage d'utilisation"});
        })
})

//Update by id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    User.findByIdAndUpdate(id, { name, ameil, age }, { new: true })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json({ error: "Erreur de mise a jour d'utilisateur" });
        });
})

//Delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    User.findByIdAndRemove(id)
        .then((user) => {
            res.json({message: "La suppression de l'utilisateur a ete un succes."});
        })
        .catch((err) => {
            res.status(500).json({ error: "Erreur de suppression d'utilisateur" });
        });
});


module.exports = router;