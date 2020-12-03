import React, { useState } from 'react';

const Button = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light');
        }
    }

    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === 'light' ? "light" : "dark"}
            </button>
        </div>
    )

}
export default Button;