const express = require('express');
const app = express();
const cors = require('cors');
const hbs = require('express-handlebars');


app.use(cors());
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs());



app.listen(3030, () => {
  console.log('Server has been started...')
})