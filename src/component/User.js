import React from 'react'
import { useState } from 'react'
const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    return (
        <div className='user-card'>
            <h2>Count:{count}</h2>
            <h2>Count1:{count1}</h2>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:9890455839</h3>
        </div>
    )
}

export default User
