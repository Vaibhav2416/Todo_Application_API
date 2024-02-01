import { HStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

const TodoCard = ({id, title, completed, statusFunction}) => {

 
  return (
    <HStack spacing="100px" borderWidth='1px' padding="20px" justifyContent="space-between">
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Button onClick={()=>statusFunction(id)}>{completed ? "Done" : "Incomplete"}</Button>
    </HStack>
  )
}

export default TodoCard
