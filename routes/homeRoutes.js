//Home Routes
  
const router = require('express').Router();
const path = require('path');
const db = require('../models');

router.get('/workouts', async (req, res) =>{
    try {
        console.log('BRO');
    } catch (err) {
        res.status(400).json(err);
    }
});