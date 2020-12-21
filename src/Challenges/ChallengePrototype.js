import React, {useState} from 'react'
import FormPrototype from '../FormPrototype'

const ChallengePrototype = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(''); 

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleInput = event => {
    event.preventDefault()
  }

  return (
    <FormPrototype
      value={input}
      onChange={handleChange}
      handleSubmit={handleInput}
      result={result}
      placeholder=''    
    />
  )
}

export default ChallengePrototype