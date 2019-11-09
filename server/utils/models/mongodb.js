
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://fake:pass@cluster0-8hzwr.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.collection("devices").insertOne({ id: 1 }, (err, res) => {
//     if (err) console.log('ERROR', err)
//     console.log('THIS IS THE KONGODB RES', res)
//   });
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

const myURI = 'mongodb+srv://fake:pass@cluster0-8hzwr.mongodb.net/test';

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

const testSchema = new mongoose.Schema({ test: { type: 'String' } });

const testModel = mongoose.model('Test', testSchema);

// new testModel({ test: '1' }).save()