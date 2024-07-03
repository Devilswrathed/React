// function Button() {

//     const handleClick = () => console.log("Ouch!");
  
//     const handleClick2 = (name) => console.log(`${name} stop clicking me`);
  
//     return (
//       <button onClick={() => handleClick2('Callum')}>Click Me</button>
//     );
//   }

//   export default Button
  

// function Button(){

//     let count = 0;

//     const handleClick = (name) => {

//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`)
//         }
        
//         else{
//             console.log(`${name} stop clicking me!`)
//         }
        
//     };

//     return(<button onClick={() => handleClick("Callum")}>Click Me</button>);
// }

// export default Button

function Button() {

    const handleClick = (e) => e.target.textContent = "Ouch!";

    return(<button onClick={(e) => handleClick(e)}>Click Me</button>)

}

export default Button