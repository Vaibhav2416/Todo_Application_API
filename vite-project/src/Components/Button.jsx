import React from 'react'
import {Button} from '@chakra-ui/react'

const NewButton = ({text, width, onClcik}) => {
  return (
    <Button w={width} onClick={()=>onClcik(text)}>
        {text}
    </Button>
  )
}

export default NewButton
