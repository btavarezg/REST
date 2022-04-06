const express = require('express');
const bodyParser = require('body-parser');
const port=9000;
var app = express();

var todos = [{"id":1,"title":'buy the milk'},{"id":2,"title":'rent a car'},{"id":3,"title":'feed the cat'}];

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (request,response) => {
    response.status(200).json(todos)
});

app.post('/',(request,response) => {
    var newTodo = JSON.parse(request,body);
    newTodo.id = todos.length +1;
    todos.push(newTodo);
    response.status(201).json(newTodo);
});
app.put('/:id', (request,response) => {
    var id = TODO 
    if (todos[id-1]){
        todos[id - 1] = request.body;
        response.status(204).send();
    }else{
        response.status(404, 'The task is not found'),send();
    }
});
app.delete('/:id',(request,response) =>{
    var id = parseInt(request.params.id);
    if(todos.filter(todo => todo.id == id).length !== 0){
        todos = todos.filter(todo => todo.id !== id);
        response.status(200).send();
    }else{
        response.status(404).send();
    }
});
app.listen(port);





