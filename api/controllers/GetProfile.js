'use strict';

module.exports = {
    GetProfile : GetProfile
}

function GetProfile(req, res) {
    const {MongoClient} = require('mongodb');

    const uri = 'mongodb+srv://xiongxin:19950905Xys@cluster0-rqx8v.mongodb.net/test?retryWrites=true&w=majority';

    const client = new MongoClient(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });
    
    client.connect((err, db) => {
        res.header('Content-Type', 'application/json');
        if(err) {
            res.json(err);
        }
        let dbo = db.db('pdd');
        dbo.collection('profile').findOne({}, {projection:{ _id: 0 }}, (err, result) => {
            if (err) {
                res.json(err);
            }
            res.json(result);
            client.close();
        });
    });
};