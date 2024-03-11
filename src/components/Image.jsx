import React from 'react'

function Image({btn, p}) {
    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
            <img src={btn} alt="" />
            <p style={{ color: '#1B9FFC', fontSize: '14px' }}>{p}</p>
        </div>
    )
}

export default Image