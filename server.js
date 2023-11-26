const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// Connect to MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

client.connect(err => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    db = client.db('ecommerce');
    console.log('Connected to MongoDB');
});

app.use(express.json());

// API to get products
app.get('/api/products', (req, res) => {
    db.collection('products').find({}).toArray((err, result) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(result);
    });
});

// API to add a new product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    db.collection('products').insertOne(newProduct, (err, result) => {
        if (err) {
            console.error('Error adding product:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(201).send('Product added successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
