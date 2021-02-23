const express = require('express');
const db = require('./model/dataBase')
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/index')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))
  
app.use('/', routes);

db.mongoose.connect(db.url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to database...');
}).catch(err => {
  console.log('unable to connect to database', err);
  process.exit();
});

const {
  PORT
} = process.env;

app.listen(PORT || 4000, function(){
    console.log('app is listening on port 4000');
})