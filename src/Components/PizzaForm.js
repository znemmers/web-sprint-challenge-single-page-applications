import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PizzaForm(props) {
const {
    submit,
    update
} = props



const onChange = evt => {
    const name = evt.target.name
    const special = evt.target.special
    const size = evt.target.size
    update(name, special, size)
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

        <label id= 'name-input'>Name:
            <input
                type= 'text'
                name="name"
                placeholder='Your name here'
                onChange={onchange}
            />
        </label>

        <div>
        <label id="size-dropdown">Size:
            <select 
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

        <div id='special-text'>Special Instructions:
            <textarea 
                name='special'
                placeholder='Any special requests?'
                onChange={onChange}
            />
        </div>
        
        <button id='order-button'>Submit</button>
    </form>
 )
}