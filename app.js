const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./router/main')

app.use(express.static('public'))

app.use('/', mainRouter);
app.use('/about', mainRouter);

app.listen(port, console.log(`Se levantó con exito el servidor en http://localhost:${port}`));


