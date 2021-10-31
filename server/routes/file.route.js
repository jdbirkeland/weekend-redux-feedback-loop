import { Router } from "express";
import { Pool } from "pg";

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async (req,res) => {
    const client = await Pool.connect();

try {
    const {feelings, support, understanding, comments} =
    req.body;
    await client.query('BEGIN');
    const feedbackInsertResults = await client.query(
        `INSERT INTO "feedback" ("feelings","support","understanding","comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id; `,
        [feelings, support, understanding, comments]
    );
    const feedbackId = feedbackInsertResults.rows[0].id;

    await client.query('COMMIT');
    res.sendStatus(201);
}   catch (error) {
    await client.query('ROLLBACK');
    console.log('Error POST /api/feedback', error);
    res.sendStatus(500);
}   finally {
    client.release();
}
});
    