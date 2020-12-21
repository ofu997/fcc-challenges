import React, {useState} from 'react'
import FormPrototype from '../FormPrototype'

const TitleCase = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(''); 

  const handleChange = event => {
    setInput(event.target.value);
  }

  const titleCase = event => {
    // make an array 
    const arrayOfStrings = input.toLowerCase().split(' ')

    // make an array of Title case words
    for (let i = 0; i<arrayOfStrings.length; i++) {
      let placeholder = arrayOfStrings[i]

      let capitalInitial = placeholder.charAt(0).toUpperCase()
      placeholder = placeholder.slice(1, placeholder.length).toLowerCase();
      arrayOfStrings[i] = capitalInitial.concat(placeholder)
    }
    let titleCasedInput = arrayOfStrings.join(' ')
    setResult(titleCasedInput)
    event.preventDefault()
  }

  return (
    <FormPrototype
      onChange={handleChange}
      handleSubmit={titleCase}
      value={input}
      result={result}
      placeholder='Convert text to title case'  
    />
  )
}

export default TitleCase
