import React, { useState } from 'react';

import '../App.css';
import Logoblock from '../Allheadercomponets/Logo'
import Navbar from '../Allheadercomponets/Navrbar';
let count = 0
function Silder(props) {
    const element = props.allimg
    const [currnetimg, setcurrentimg] = useState(element[5].img)
    const silderfunction = (input) => {
        count += input
        if (count < -1) {
            count = element.length
        }
        if (count > element.length) {
            count = 0
        }
        const silder = element.filter((ele, index) => {
            return ele.id === count
        })
        console.log(silder)
        setcurrentimg(
            silder[0].img
        )
    }
    const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url(${currnetimg})`,
        transition: 'all 0.90s ease-in-out'
    }
    return (
        <>
            <div className='silder_block' style={style}>
                <div className='top_block'>
                    <Logoblock />
                </div>
                <div className='middle-block'>
                    <Navbar />
                </div>
                <div className='center_block'>
                    <h1>JOURNEY TO <br></br>
                        EXPLORE WORLD
                    </h1>
                    <p>
                        Aspernatur, nisi amet reiciendis, velit laboriosam libero, obcaecati voluptatibus labore eos corrupti non earum magnam quod molestias facilis quam.
                    </p>
                    <div>
                        <button type='button' className='button'>Learn More</button>
                        <button type='button' className='button' id='book_btn'>Book Now</button>
                    </div>

                </div>
                <div className='silder_btn'>
                    <span id="btn1" className='btn prew' onClick={() => {
                        silderfunction(-1)
                    }}>&#10094;</span>
                    <span id="btn2" className='btn Next' onClick={() => {
                        silderfunction(1)
                    }}>&#10095;</span>

                </div>
            </div>
        </>
    )


}

export default Silder;