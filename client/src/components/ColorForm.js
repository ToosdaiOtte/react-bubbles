import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ColorForm = ({history}) => {
    const defaultState = {
        color: '',
        code: {
            hex: ''
        },
    }
    // console.log(history);

    const [color, setColor] = useState(defaultState);
    // console.log(color);
    
    const addNewColor = id =>{
        axiosWithAuth()
          .post('/colors', id)
          .then(res => {
                setColor({color: res.data});
            }
            // return console.log(res.data)
            )
          .catch(error => console.log(error));
        }

    const handleSubmit = e => {
        e.preventDefault();
        addNewColor(color);
        history.push('/protected');   
    };

    const handleChanges = (e) => {
        if(e.target.name === 'color'){
        setColor({
            ...color,
            [e.target.name]: e.target.value
        });
        }else if(e.target.name === 'code'){
            setColor({
                ...color,
                [e.target.name]: {
                    hex: e.target.value
                }
            })
        }   
    }

    return (
        <div>
            <div className='color-form'>
                <h2>Add Color</h2>
                <form onSubmit={handleSubmit}>
                    Color Name: 
                    <input
                        type='text'
                        name='color'
                        placeholder='Color Name'
                        value={color.color}
                        onChange={handleChanges}
                    />
                    Hex Code: 
                    <input
                        type='text'
                        name='code'
                        placeholder='Hex Code'
                        value={color.code.hex}
                        onChange={handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
};

export default ColorForm;