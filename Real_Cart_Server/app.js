require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const connect = require('./db/connect')


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({ message: "App started successfully!" })
  })

app.use('/items', require('./routes/items'));

const start =async () => {
    try {
        await connect(process.env.URL);
        console.log("Connected to database");
        app.listen(port , () => {
            console.log(`App is listening at port ${port}`)
        })
    } catch (error) {
        
    }
}

start();