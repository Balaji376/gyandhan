
const express =require('express');
const { create, update, deletebyid, getDataF, getDatabyid } = require('../controller/todo.controller');

const TodoRouter= express.Router()


TodoRouter.post('/create',create)

TodoRouter.patch('/update/:id', update)

TodoRouter.delete('/delete/:id', deletebyid)

TodoRouter.get('/showall', getDataF)

TodoRouter.get('/show/:id', getDatabyid)

module.exports=TodoRouter;

