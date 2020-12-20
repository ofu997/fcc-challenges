import React, {useState} from 'react'
import FormPrototype from '../FormPrototype'

const Palindrome = () => {
  const [string, setString] = useState('');
  const [result, setResult] = useState(''); 

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
    
    event.preventDefault();
  }

  const handleChange = event => {
    setString(event.target.value);
  }

  return (
    <>
      <FormPrototype 
        value={string}
        onChange={handleChange}
        handleSubmit={checkIfPalindrome}
        result={result}
        placeholder='Check if a word or phrase is a palindrome'
      />
    </>
  )
}

// class Palindrome extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       string:'',
//       result:'',
//     }
//   }

//   checkIfPalindrome = event => {
//     let lowerCaseString = this.state.string.toLowerCase()
    
//     let lowerCaseNoSpacesString=lowerCaseString
//       .replace(' ','')
//       .replace(',','')
//       .replace('.','')
//       .replace('/','')
//       .replace('_','')
//       .replace('-','')
//       .replace('/','')
//       .replace('(','')
//       .replace(')','')
//       .replace('/','')

//     //The reverse() method reverses an ARRAY in place. 
//     const reversedString=lowerCaseNoSpacesString.split('').reverse().join('')
//     console.log(`reversed: ${reversedString}`)
//     console.log(`lower Case no space string: ${lowerCaseNoSpacesString}`)
//     if (reversedString===lowerCaseNoSpacesString) {
//       this.setState({ result: 'Yes' })
//       console.log(this.state.result)
//     } 
//     else { //we need an else to change the result after a Yes condition. This component has already been mounted, so it would read from current state
//       this.setState({ result: 'No'})
//       console.log(this.state.result)
//     }
    
//     // setVisible('block');
//     event.preventDefault();
//   }

//   handleChange = event => {
//     this.setState({ string: event.target.value});
//   }

//   render() {
//     return (
//       <>
//         {/* <form onSubmit = {this.checkIfPalindrome}>
//            <input 
//             placeholder = 'Test if a word is a palindrome' 
//             value={this.state.string}
//             onChange={this.handleChange}
//           />
//           <button type='submit'>submit</button>
//         </form>
//         <p>{this.state.result}</p>  */}
//         <FormPrototype 
//           value={this.state.string}
//           onChange={this.handleChange}
//           handleSubmit={this.checkIfPalindrome}
//           result={this.state.result}
//         /> 
//       </>
//     )
//   }
// }

export default Palindrome
// Note: star, Rats works but A man, a plan, a canal, Panama doesn't work