import React,{useState,useContext} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Input, InputGroup,
    InputGroupText, InputGroupAddon,FormGroup,Button,Form
} from 'reactstrap';
// import{
//     FormGroup,
//     InputGroupAddon,
//     Input,
//     Button,
//     Form,
//     InputGroup,
//     } from "reactstrap";

import { v4 } from "uuid";
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"

const TodoForm = ()=>{
    const [todostring,setTodoString]=useState("");
    const {dispatch}=useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todostring === ""){
            return alert("Please Enter a todo")
        }
        const todo = {
            todostring,
            id:v4()
        }
        dispatch({
            type:ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }
    return(
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <input 
                            type="text"
                            name = "todo"
                            id="todo"
                            placeholder="Your Next Todo"
                            value = {todostring}
                            onChange={e => setTodoString(e.target.value)}
                        />
                        <InputGroup addonType="prepend">
                            <Button color="warning">
                                add
                            </Button>
                        </InputGroup>
                    </InputGroup>
                    
                </FormGroup>
        </Form>
    )
}
export default TodoForm;