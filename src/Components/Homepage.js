import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Homepage(){
    const navigate= useNavigate()
    const routeToPizza = () => {
        navigate('pizza')
    }
    return(
        <div> 
            <h1>BloomEats</h1> 
                <nav>
                    <button id = 'order-pizza' onClick={routeToPizza}> 
                        Order Now! 
                    </button> 
                </nav>
        </div>
    )
}

