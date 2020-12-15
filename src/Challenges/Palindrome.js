import {useState} from 'react'

const Palindrome = () => {
  const [string, setString] = useState('');
  const [visible, setVisible] = useState('none');
  const [result, setResult] = useState('No'); 

  const checkIfPalindrome = event => {
    let lowerCaseString = string.toLowerCase()
    
    let lowerCaseNoSpacesString=lowerCaseString
      .replace(' ','')
      .replace(',','')
      .replace('.','')
      .replace('/','')
      .replace('_','')
      .replace('-','')
      .replace('/','')
      .replace('(','')
      .replace(')','')
      .replace('/','')

    //The reverse() method reverses an ARRAY in place. 
    const reversedString=lowerCaseNoSpacesString.split('').reverse().join('')
    console.log(`reversed: ${reversedString}`)
    console.log(`lower Case no space string: ${lowerCaseNoSpacesString}`)
    if (reversedString===lowerCaseNoSpacesString) {
      setResult('Yes')
    } 
    else { //we need an else to change the result after a Yes condition. This component has already been mounted, so it would read from current state
      setResult('No')
    }
    
    setVisible('block');
    event.preventDefault();
  }

  const handleChange = event => {
    setString(event.target.value);
  }

  return (
    <>
      <form onSubmit = {checkIfPalindrome}>
         <input 
          placeholder = 'Test if a word is a palindrome' 
          value={string}
          onChange={handleChange}
        />
        <button type='submit'>submit</button>
      </form>
      <p style={{ display: `${visible}` }}>{result}</p>
    </>
  )
}

export default Palindrome
// Note: star, Rats works but A man, a plan, a canal, Panama doesn't work