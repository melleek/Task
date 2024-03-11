import React from 'react'

function Button({btn, p}) {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <button style={{ width: '40px', border: 'none', color: 'white',  height: '20px', borderRadius: '5px', background: '#5CC02A', padding: '3px' }}>{btn}</button>
            <p style={{color: '#1B9FFC', fontSize: '14px'}}>{p}</p>
        </div>
    )
}

export default Button