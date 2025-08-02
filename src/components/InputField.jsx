import React from 'react'

const inputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Добавить</button>
        </label>
    )
}

export default inputField