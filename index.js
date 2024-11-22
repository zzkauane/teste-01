const express = require ('express')
const app = express();
const port = 3000;

//Middleware para parsear JSON
app.use(express.json());

//Array para amarzenar os usuarios
let usuarios = [];
app.get('/usuarios', (req, res) => {
    res.send(usuarios);

})
app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body
    if (!nome ||!email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });

    }

    const novoUsuario = { id: usuarios.length + 1, nome, email};
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);

});

app.listen(port,() => {
    console.log(`Servidor Rodando em http://localhost: ${port}`);

});