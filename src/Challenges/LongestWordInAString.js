import React, {useState} from 'react'
import FormPrototype from '../FormPrototype'

const LongestWordInAString = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(''); 

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleInput = event => {
    const arrayOfWords = input.split(' ')
    let longestLength=1;
    arrayOfWords.map(function(word){
      let length=word.length;
      if (length>longestLength) {
        longestLength=length;
        setResult(`${word} is the longest with ${longestLength} characters`)
      }
  })
    event.preventDefault()
  }

  return (
    <FormPrototype
      value={input}
      onChange={handleChange}
      handleSubmit={handleInput}
      result={result}
      placeholder='find the longest word in a sentence'        
    />
  )
}

export default LongestWordInAString
