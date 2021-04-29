const router = require('express').Router();
const db = require('../models');

router.put('/api/workouts/:id', async (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body }})
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err);
        })
});

router.post('/api/workouts', async (req, res) => {
    db.Workout.create(req).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});


module.exports = router;