const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://xiongxin:19950905Xys@cluster0-rqx8v.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });

console.log('Client created')
exports.client = client;