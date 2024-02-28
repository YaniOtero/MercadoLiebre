let express = require ('express');
let app = express();
let path = require ('path');
let port = process.env.PORT || 3000;

app.listen(port,()=>console.log('Servidor corriendo en el puerto ${port}'));

app.use(express.static('public'));
app.get('/',(req,res) => {res.sendFile(path.join(__dirname,'/views/home.html'));});