const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World com Node.js! Muito bom aprender coisas novas!!');
}
)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


