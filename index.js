import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './routes/index';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/build')));
/*app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});*/

app.use('/', router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});