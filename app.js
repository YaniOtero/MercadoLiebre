let express = require ('express');
let app = express();
let path = require ('path');

app.listen(3000,()=>console.log('Servidor corriendo'));

app.use(express.static('public'));
app.get('/',(req,res) => {res.sendFile(path.join(__dirname,'/views/home.html'));});