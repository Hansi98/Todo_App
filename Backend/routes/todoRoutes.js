const express = require ('express');
const router = express.Router();
const Todo = require('../models/Todos');


//add a todo
router.post('/create', (req, res) => {

    const todo = new Todos({
        todo: req.body.todo,
    })
    todo.save().then(tdo => {
        console.log("Todo Added")
        try {
            res.status(200).send({
                message: 'Todo added successfully !',
                data: tdo
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }

    })
})


//Get all todos
router.get('/getAllTodos', (req, res) => {
    const tdo = Todos.find().then(tdos => {
        res.send(tdos);
    })
    console.log(tdo)
})


//update todo by id
router.put('/updateTodo/:id', (req, res) => {
    var id = req.params.id;
    Todos.findOne({ _id: id }).then(tdo => {
        if (Todo) {
            console.log("found todo")
                tdo.todo = req.body.todo

            tdo.save()
            res.status(200).send({
                message: 'Todo updated successfully !',
                messageCode: '1000',
                data: tdo
            })
        }
    })
})


//Delete a todo
router.delete('/deleteTodo/:id', (req, res) => {

    Todos.findById(req.params.id).then(tdo => {
        if (tdo) {
            tdo.remove();
            res.send(
                {
                    message: tdo.todo + ' todo was deleted successfully',
                    data: tdo
                }
            )
        }
        else {
            res.send({
                message: "No such todo found!"
            })
        }

    }).catch(err => {
        res.send(err)
    })
})

//Get todo details by todo name
router.get('/getbyTodoName/:Name', (req, res) => {
    Todos.findOne({
        todo: req.params.todoName
    }).then(tdo => {


        try {
            res.status(200).send({
                message: 'Todo retrived successfully ok !',
                data: tdo
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }
    })
})
module.exports = router;