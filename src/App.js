import React, {useState, useEffect} from "react";
import Pizza from './Components/pizza'
import Homepage from './Components/Homepage'
import PizzaForm from './Components/PizzaForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
    special: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
  
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      special: formValues.special.trim()
    }
    
    if (!newPizza.name || !newPizza.size) return
    
  }

  return (
    <BrowserRouter>
     <div>
      <Link to= '/'>Home</Link>
      <Link to= 'pizza'>Order</Link>
     
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="pizza" element={<Pizza/>} />
     </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
