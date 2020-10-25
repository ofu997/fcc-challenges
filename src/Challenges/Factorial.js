import {useState} from 'react';

const Factorial = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState('none');
  const [result, setResult] = useState(null); 

  const factorialize = event => {
    if ({value} === '0') {
    setResult('1');
    console.log(result);
    }

    let factorialResult = 1;
    for (let multiplier=1; multiplier<= value; multiplier+=1) {
      factorialResult*=multiplier;
      setResult(factorialResult); 
    }


    setVisible('block');
    event.target.placeholder = 'Enter a string to be reversed' 
    event.preventDefault();
  };

  const handleChange = event => {
    setValue(Number(event.target.value));
    console.log(value);
  }

  return (
    <>
      <form onSubmit = {factorialize}>
         <input 
          placeholder = 'Enter a number to factorialize' 
          // value={string}
          onChange={handleChange}
        />
        <button type='submit'>factorialize</button>
      </form>
      <p style={{ display: `${visible}` }}>{result}</p>
    </>
  )
}

export default Factorial;