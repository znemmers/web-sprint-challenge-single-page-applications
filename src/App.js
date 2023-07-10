import React, {useState, useEffect} from "react";
import Homepage from './Components/Homepage'
import PizzaForm from './Components/PizzaForm'
import schema from './validation/formSchema'
import * as yup from 'yup'
import {Routes, Route, Link } from 'react-router-dom'
import axios from "axios";




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

  const initialFormErrors = {
    name: '',
    size: '',
    topping1: '',
    topping2: '',
    topping3: '',
    topping4: '',
    topping5: '',
    special: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const updateForm = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
      console.log(res)
    })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
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
    
     <div>
      <Link to= '/'>Home</Link>
      <Link to= 'pizza'>Order</Link>
     
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="pizza" element={<PizzaForm submit={submitForm} update={updateForm} value={formValues} errors={formErrors}/>}  />
     </Routes>
      </div>
    
  );
};
export default App;
