import React from 'react'

// class FormPrototype extends React.Component {
//   render() {
//     return (
//       <>
//         <form onSubmit = {this.props.handleSubmit}>
//           <input 
//             value={this.props.string}
//             onChange={this.props.onChange}
//             placeholder={this.props.placeholder}
//           />     
//           <button type='submit'>submit</button>
//         </form>
//         {/* logging this.props.result works. logging this.state.result does not work */}
//         <p>{this.props.result}</p>
//       </>
//     )
//   }
// }

const FormPrototype = props => {
  return( 
    <>
    <form onSubmit = {props.handleSubmit}>
    <input 
      value={props.input}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />     
    <button type='submit'>submit</button>
    </form>
    <p>{props.result}</p>
  </>
  )
}

export default FormPrototype
