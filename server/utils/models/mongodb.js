const mongoose = require('mongoose');
require('dotenv').config();

const myURI = '';
const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

// const testSchema = new mongoose.Schema({ test: { type: 'String' } });
// const testModel = mongoose.model('Test', testSchema);
// new testModel({ test: '1' }).save()
