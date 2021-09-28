const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json())


app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM children", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});


app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    db.query("SELECT * FROM children WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});


app.post('/api/create', (req, res) => {

    const name = req.body.name;
    const active = req.body.active;


    db.query("INSERT INTO children (name) VALUES (?)", [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM children WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})