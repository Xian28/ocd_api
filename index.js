require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// importing routes
const disaster = require('./routes/Disaster');

// middleware
app.use(cors({
    // origin: 'http://192.168.0.185:8080'
    origin: '*'
}));


// routes
try{
    //req.body
    app.use(express.json());
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true}))
    app.use(express.static('public'))
    
    // disaster router
    app.use('/disaster', disaster);


    // non existing api
    app.get('*', (req, res) => {
        res.status(404).send(
            'Sorry, the page you are looking for does not exist.'
        );
    });

    const port = process.env.PORT || 8080
    app.listen(port, () => {
        console.log(`Server has started on port ${port}...`);
    })
    
}
catch(err){
    console.log(err)
}