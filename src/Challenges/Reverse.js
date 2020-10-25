import {useState} from 'react';

const Reverse = () => {
  const [string, setString] = useState('');
  const [visible, setVisible] = useState('none');

  const reverseTheString = event => {
    // const submittedString = event.target.value; for some reason we can't set the string here, but we can on handleChange 
    const reversedString=string.split('').reverse().join('');
    console.log(event.target.value);
    setString(reversedString);
    setVisible('block');
    event.target.placeholder = 'Enter a string to be reversed' 
    event.preventDefault();
  };

  const handleChange = event => {
    setString(event.target.value);
    console.log(string);
  }
  return (
    <>
      <form onSubmit = {reverseTheString}>
         <input 
          placeholder = 'Enter a string to be reversed' 
          // value={string}
          onChange={handleChange}
        />
        <button type='submit'>Reverse</button>
      </form>
      <p style={{ display: `${visible}` }}>{string}</p>
    </>
  )
}

export default Reverse;