const express = require('express')

const port = process.env.PORT 

const app = express()

require('./connection')

const indexRouter = require('./routes/index.route');
const authRouter = require('./routes/auth.route');
const realTimeRouter = require('./routes/realtime.route');

app.use(express.json());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/realtime', realTimeRouter);

app.listen(port, () => console.log(`GATEWAY listening @ PORT : ${port}`))