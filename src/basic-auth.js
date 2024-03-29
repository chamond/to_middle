const express = require('express');
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const { btoa } = require('buffer');
const path = require('path');

const app = express();
const port = 3000;
app.use(cors());
app.use(basicAuth({
  challenge: true,
  users: {
    'dmitry': '11112222' // определяем пользователей на сервере
  }
}))
app.get('/', (req, res) => {
  // res.status(401);
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(port, () => {
  console.log('server is set up on ' + port);
})

fetch('http://localhost:3000', {
  headers: {
    Authorization: 'Basic ' + btoa('dmitry:9999') // реквизиты в base64
  }
}).then(response => {
  console.log(response.status); // 401 - неавторизован
});

fetch('http://localhost:3000', {
  headers: {
    Authorization: 'Basic ' + btoa('dmitry:11112222')
  }
}).then(response => {
  console.log(response.status); // 200 - успешно
});
