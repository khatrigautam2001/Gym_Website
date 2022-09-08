import React from 'react'
import { useState } from 'react'
import './Bmi.css'

const Bmi = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    let calculateBmi = (e) => {
        e.preventDefault();

        if(weight===0 || height===0){
            alert("Invalid Input")
        }
        else{
            let bmi = (weight/ (height/100) ** 2);
            setBmi(bmi.toFixed(2));

            if(bmi<18.5){
                setMessage("You are underweight!!")
            }
            else if(bmi>=18.5 && bmi<=24.9){
                setMessage("You are Healthy!!")
            }
            else if(bmi>=25 && bmi<=29.9){
                setMessage("You are overweight!!")
            }
            else{
                setMessage("You are Obese!!")
            }
        }

    }

    let imgsrc;
    if(bmi<1){
        imgsrc=null;
    }
    else if(bmi<18.5){
        imgsrc=require('../../assets/underweight.png');
    }
    else if(bmi>=18.5 && bmi<=24.9){
        imgsrc=require('../../assets/healthy.png');
    }
    else if(bmi>=25 && bmi<=29.9){
        imgsrc=require('../../assets/overweight.png');
    }
    else{
        imgsrc=require('../../assets/overweight.png');
    }


    let reload = () => {
        window.location.reload()
    }

  return (
    <div className="app" id='bmi_id'>
        <div className="blur hero-blur"></div>
        <div className="blur bmi-blur"></div>
        <div className="container">
            <div className="bmi-head">
                <span className='stroke-text'>Know</span>
                <span>Your</span>
                <span className='stroke-text'>BMI</span>
            </div>
            
            <div className='bmi-center'>
                <form onSubmit={calculateBmi} className='bmi-form'>
                    <div>
                        <label>Weight (Kg)  &emsp;</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div>
                        <label>Height (cm)  &emsp;</label>
                        <input value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className='fBtn'>
                        <button className="btn" type='submit'>Submit</button>
                        <button className="btn btn-outline" onClick={reload}>Reload</button>
                    </div>
                </form>

                <div className="bmi-r">
                    <div className="center">
                        <h3>Your BMI is : {bmi}</h3>
                        <p>{message}</p>
                    </div>

                    <div className='img-container'>
                        <img src={imgsrc} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Bmi
