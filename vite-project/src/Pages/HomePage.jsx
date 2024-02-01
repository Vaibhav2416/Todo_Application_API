import React, { useEffect, useState } from 'react'
import axios from "axios"
import TodoCard from '../Components/TodoCard';
import Title from '../Components/Title';
import NewButton  from '../Components/Button';
import Pagination from '../Components/Pagination';
import { Box } from '@chakra-ui/react';
const HomePage = () => {
    const [todo, setTodos]=useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    
    const fetchTodos=(page)=>{
        axios(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=5`)
        // _page=5&_limit=2
        .then((res)=>setTodos(res.data))
        .catch((er)=>console.log(er))
    }

    useEffect(()=>{
      fetchTodos(currentPage);
    },[currentPage])
      
    const handleStatus=(id)=>{
     const newTodo=todo.map((el)=>{
        if(el.id == id){
          {el.completed=!el.completed}
        }
        return el;
      })
      setTodos(newTodo);
    }
    
  return (
    <Box display="flex" padding="30px" flexDirection="column" width="90%" alignItems="center" justifyContent="space-between" gap="100px"  border="1px solid black" margin="auto">
      <Title />
      <Box display="flex" flexDirection="column" gap="5px">
        {
          todo && todo.map((el)=> <TodoCard  key={el.id} {...el} statusFunction={handleStatus}/>)
        }
      </Box>
      <Pagination setCurrentPage={setCurrentPage}/>
    </Box>
  )
}

export default HomePage
