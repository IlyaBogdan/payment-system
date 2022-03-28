const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const conn = "mongodb://localhost:27017";
const client = new MongoClient(conn);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set('json spaces', 40);

app.post("/save", (req, res) => {
    const now = new Date();
    let data = req.body;
    data.date = now.toISOString();
    client.db('payment-system').collection('payment-history').insertOne(data);
    client.db('payment-system').collection('payment-history').find().sort("_id", -1).limit(1).toArray(function(err, item){
        if (err) res.send("failed");
        else {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({"RequestId": item[0]._id, "Amount": item[0].amount}));
        }
    });
})

async function start() {
    await client.connect();
    app.listen(4000, () => {
        console.log("Server is running. Database - MongoDB");
    });
}

start();