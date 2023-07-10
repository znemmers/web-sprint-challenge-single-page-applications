import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

export default function PizzaForm(props) {
const {
    submit,
    update,
    value,
    errors
} = props

const onChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    update(name, value)
}

const handleSubmit = evt => {
    evt.preventDefault()
    submit()
  } 

return( 
    <form id= 'pizza-form' onSubmit={handleSubmit}>
       

        <div>
            <h1>BloomEats</h1>
        </div>

        <div>
            <h2>Order Up!</h2>
        </div>
        
        <label >Name:
            <input
                id= 'name-input'
                type= 'text'
                name="name"
                value={value.name}
                placeholder='Your name here'
                onChange={onChange}
            />
        </label>
        <p>{errors.name}</p>
        <div>
        <label >Size:
            <select 
            id="size-dropdown"
            name='size'
            onChange={onChange}
            >
                <option value=''>Select a size!</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                
            </select>
        </label>
        </div>

       <div>Toppings:
        <br />
        <label>Pepperoni
            <input 
                type='checkbox'
                name= 'topping1'
                onChange={onChange}
            />
        </label>
        <br />
        <label>Sausage
            <input 
                type='checkbox'
                name='topping2'
                onChange={onChange}
            />
        </label>
        <br />
        <label>Green Olives
            <input 
                type='checkbox'
                name="topping3"
                onChange={onChange}
            />
        </label>
        <br />
        <label>Pineapple
            <input 
                type='checkbox'
                name='topping4'
                onChange={onChange}
            />
        </label>
        <br />
        <label>Onion
            <input 
                type='checkbox'
                name='topping5'
                onChange={onChange}
            />
        </label>
        </div>

        <div >Special Instructions:
            <textarea 
                id='special-text'
                name='special'
                value={value.special}
                placeholder='Any special requests?'
                onChange={onChange}
            />
        </div>
        
        <button id='order-button'>Submit</button>
    </form>
 )
}