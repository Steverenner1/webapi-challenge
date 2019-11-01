//imports

const express = require("express");
const router = express.Router();
router.use(express.json());

const db = require("../data/helpers/actionModel");

router.get("/", (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not retrieve data" });
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.get(id)
        .then(act => {
            res.status(200).json(act);
        })
        .catch(err => {
            res.status(500).json ({ error: "Could not retrieve data" });
        });
});

router.post("/", (req, res) => {
    const action = req.body;
    db.insert(action)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add data" });
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    db.remove(id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not remove data" });
        });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const change = req.body;
    db.update(id, change)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not update data" });
        });
});




module.exports = router;