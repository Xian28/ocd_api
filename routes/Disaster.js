require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../db');

// get all disaster
router.get('/',async(req,res) => {
    try{
        // query to get details of disasters
        const queryGetAllDisaster = {
            text: `SELECT * FROM disasters
                    ORDER BY disaster_id ASC
                `,
        }

        const getALlDisaster = await db.query(queryGetAllDisaster)
        .then(async result => {
            res.send({
                result: 'true',
                disasters: result.rows
            })
        })
        .catch(err => {
            res.send({
                message: 'Something went wrong. Please try again later. Error Code: 002',
                error: err.message
            })
        })
    }
    catch(err){
        res.send({
            message: 'Something went wrong. Please try again later. Error Code: 001',
            error: err.message
        });
    }
})

// add disaster
router.post('/add',async(req,res) => {
    try{
        // query to add disaster
        const queryAddDisaster = {
            text: `INSERT INTO disasters(
                    province,city,barangay,family
                ) 
                values(
                    $1,$2,$3,$4
                ) 
                RETURNING *
            `,
            values: [
                req.body.province,
                req.body.city,
                req.body.barangay,
                req.body.family
            ]
        }

        const addDisaster = await db.query(queryAddDisaster)
        .then(async result => {
            res.send({
                result: 'true',
                details: result.rows,
            })
        })
        .catch(err => res.send({
            result: 'false',
            message: 'Something went wrong. Please try again later. Error Code: 004',
            error: err.message
        }))
    }
    catch(err){
        res.send({
            message: 'Something went wrong. Please try again later. Error Code: 003',
            error: err.message
        });
    }
})

module.exports = router;