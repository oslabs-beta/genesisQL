const mongoose = require('mongoose');

const myURI = 'mongodb+srv://fake:pass@cluster0-8hzwr.mongodb.net/test';

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

// const testSchema = new mongoose.Schema({ test: { type: 'String' } });
// const testModel = mongoose.model('Test', testSchema);
// new testModel({ test: '1' }).save()