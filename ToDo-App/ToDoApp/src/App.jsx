import React, {useState , useEffect} from 'react';
import classes from './styles.module.css';
import ToDoItem from './components/todo-item';
import TodoDetails from './components/todo-item/todo-details';
import { Skeleton } from '@mui/material';

function App() {
  const [loading , setLoading] = useState(false);
  const [todoList , setTodoList] = useState([]);
  const [errorMsg , setErrorMsg] = useState(null);
  const [todoDetails , setTodoDetails] = useState(null);
  const [openDialog , setOpenDialog] = useState(false);

  async function fetchListOfToDos(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log(result);

      if(result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }

    }catch(e){
      console.log(e);
      setErrorMsg('some error occured!')
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentToDoID){
    console.log(getCurrentToDoID);

    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentToDoID}`);
      const details = await apiResponse.json();
      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
      console.log(result);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfToDos()
  },[]) //fetching list of data on page load

  if(loading) return <Skeleton variant = "rectangulat" width = {650} height = {650}/>

  return(
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple To-Do App Using Material UI</h1>
      <div className = {classes.todoListWrapper}>{
        todoList && todoList.length > 0 ? todoList.map((todoItem) => <ToDoItem 
        key = {todoItem.id}
        todo = {todoItem}
        fetchDetailsOfCurrentTodo = {fetchDetailsOfCurrentTodo}/>) : null
        }
      </div>
      <TodoDetails setOpenDialog = {setOpenDialog} openDialog={openDialog}
      todoDetails={todoDetails}
      setTodoDetails={setTodoDetails}></TodoDetails>
    </div>
  )
}

export default App;
// This is a simple React component that renders a header for a To-Do application using Material UI.