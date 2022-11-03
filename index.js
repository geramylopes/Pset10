const express = require('express')

const app = express();

app.use(express.json())

const port = 3001;

let list = req.body;

//validate the length of the title and description
let listTitle = list.title
let listDescription = list.description

if (listTitle.length <= 15){
   res.send("Error: Invalid Title length")
}

if (listDescription.length <= 25){
    res.send("Error: Invalid Description length")
}


let todos=[]

app.listen(port,() => {
  console.log(`Server running `);
});

//get all todo
app.get('/todos', (req, res) => {
   res.status(200).json(todos);

});


//get single todo
app.get('/todos/:id', (req, res) => {
   let num = req.params.id;
   res.status(200).json(todos[num]);
});


//create a todo
app.post('/todos/add', (req, res) => {
   let add = req.body;
   todos.push(add)
   res.status(201).json(todos)
})

//Update a todo
app.put("/update/up",(req, res)=>{
   let num = req.params.id;
   let novo = req.body;
   todos.splice(Number(parm),1,novo);
   res.send("Successfully update");
   
});

//delete a todo
app.delete('/todos/del',(req,res)=>{
    let num = req.params.id;
    todos.splice(todos[num],1);
    res.send(`Successfully removed.`);

});
