import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('send-mail', (req, res) => {
  res.send({ status: 'Ok' });
});

app.listen(9000, () => console.log('App running on port 9000!'));
