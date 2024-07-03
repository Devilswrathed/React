import React, {useState} from 'react';


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number'/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Delivery Instructions'/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>

            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>

        </select>

        <p>Payment: {payment}</p>

        <label>
            <input type='radio' 
            value='Pick Up' 
            checked={shipping === "Pick Up"} 
            onChange={handleShippingChange}/>
            Pick Up
        </label>

        <label>
            <input type='radio' 
                value='Delivery' 
                checked={shipping === "Delivery"} 
                onChange={handleShippingChange}/>
                Delivery
        </label>

        <p>Shipping: {shipping}</p>

    </div>
    )
}







// function MyComponent(){

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => {

//         setName("Callum");

//     }

//     const incrementAge = () => {
//         setAge(age + 1);
//     }

//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);
//     }

//     return(
    
//     <div>
//             <p>
//                 Name: {name} <br></br>
//                 <button onClick={updateName}>Set Name</button>
//             </p>

//             <p>
//                 Age: {age} <br></br>
//                 <button onClick={incrementAge}>Increment Age</button>
//             </p>

//             <p>
//                 Is Employed: {isEmployed ? "Yes" : "No"} <br></br>
//                 <button onClick={toggleEmployedStatus}>Toggle Status</button>
//             </p>
//     </div>

//     )

// }

export default MyComponent