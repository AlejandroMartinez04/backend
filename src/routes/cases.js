const express = require ('express');
const router = express.Router();
const casesSchema = require("../models/cases");

// create cases
router.post('/cases', (req, res) => {
    const cases = casesSchema(req.body);
    cases
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});