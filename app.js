const express = require('express')
const app = express()
const mongoose=require('mongoose')
const customerRoute=require('./routes/customer');
const adminRoute=require('./routes/admin');

app.use(express.json());
app.use(customerRoute)
app.use(adminRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect('mongodb://localhost:27017/techerudite_practical',{
  useNewUrlParser: true,
   useUnifiedTopology: true
},()=>{
  console.log('db connected')
})
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})