import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Task from './model/Task.js';

const app = express();
const port = process.env.BACKEND_PORT;

app.use(bodyParser.json(), cors());

app.get('/task', async (req, res) => {
    res.send(await Task.listarTodasTask());    
});

app.get('/task/:id', async (req, res) => {
    res.send(await Task.listarUmaTask(req.params.id));
})

app.delete('/task/:id', async (req,res) => {
    res.send(await Task.deletarTask(req.params.id));
});

app.post('/task', async (req,res) => {
    let {description} = {...req.body};
    res.send(await Task.criarTask(description));
});

app.put('/task/:id', async (req,res) => {
    let {id, description, isDone} = { id: req.params.id, ...req.body};
    res.send(await Task.alterarTask(id, {description, isDone}))
});

app.listen(port, () => {
    console.log(`O backend está ouvindo a porta ${port}`);
});
