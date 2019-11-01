// imports

const express = require("express");
const router = express.Router();
router.use(express.json());

const db = require("../data/helpers/projectModel");


router.get("/", (req, res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not retrieve data" });
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.get(id)
        .then(proj => {
            res.status(200).json(proj);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not retrieve data" });
        });
});

router.post("/", (req, res) => {
    const proj = req.body;
    db.insert(proj)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add data" });
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    db.remove(id)
        .then(projects => {
            res.status(200).json(projects);
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

router.get("/:id/actions", (req, res) => {
    const { id } = req.params;
    db.getProjectActions(id)
        .then(proj => {
            res.status(200).json(proj);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not retrieve data" });
        });
});


module.exports = router;