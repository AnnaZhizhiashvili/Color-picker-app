import { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState("#000000");
    const onColorChange = (event) => {
        setColor(event.target.value)
    }
    return (
        <div className="color-picker-wrapper">
            <h1>Color Picker:</h1>
            <div className="color-container" style={{background: color}}>
                <p className="selected-color">The color you selected is: {color}</p>
            </div>

            <label className="">Select a color: </label>
            <input type="color" value={color} onChange={onColorChange}></input>
        </div>
    )
}