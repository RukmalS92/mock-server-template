const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mockserver', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongo connection established'))
    .catch((error) => console.log(error.message))