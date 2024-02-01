import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewButton from './Button';
import { Box } from '@chakra-ui/react';

const Pagination = ({setCurrentPage}) => {
    const [totalPages, setTotalPages]=useState(null);
    
    useEffect(()=>{

        axios(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
          setTotalPages(Math.ceil(res.data.length/10))
        })
        .catch((er)=>console.log(er))
      },[])
    
    const handleButton=(text)=>{
        setCurrentPage(text)
    }
  return (
    <Box display="flex" flexDirection="row" gap="5px">
       {
        totalPages && new Array(totalPages).fill().map((el,i)=>{
        return  <NewButton onClcik={handleButton} key={i} text={i+1} width="20px"/>
        })
      }
    </Box>
  )
}

export default Pagination
