const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')

const app = express()
app.use(cors())
app.use(express.json())

const port = 80;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/',(req,res)=>{
  res.sendStatus(200)
})

app.post('/logs', (req, res) => {
    try {
        const newjsonData = JSON.stringify(req.body,'',2);
        const data = fs.readFileSync('data.json');
        const jsonData = JSON.parse(data);
        console.log(jsonData)
        jsonData.data.push(newjsonData);
        fs.writeFileSync('data.json', JSON.stringify(jsonData));
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

})