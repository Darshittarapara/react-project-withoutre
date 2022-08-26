import React from 'react';
import whatsapp from '../img/WhatsApp.png'
import Facebook from '../img/Facebook.png'
import Twitter from '../img/Twitter.png'
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
function Navbar() {
    const [color, setheadercolor] = useState('')

    useEffect(() => {
        window.addEventListener('mouseover', Changeheadercolor)
    })
    const style = {
        margin: '5px 8px'
    }
    const Changeheadercolor = () => {
        const minscroll = 80
        if (window.innerHeight > minscroll) {
            console.log(window.innerHeight)
            setheadercolor('')
        }
        else {
            setheadercolor('black')
            console.log('the effect is change')
        }
        console.log(minscroll)
    }
    return (


        <Fragment>
            <div className='header_block' style={{ background: color }}>
                <div className='header_center_block'>
                    <div className='header_center_left_block' style={{ display: "flex" }}>
                        <div className="soical-icon">
                            <a href="/" style={style}>
                                <img src={Facebook} alt="" /></a>
                            <a href="/" style={style}>
                                <img src={Twitter} alt="" />
                            </a>

                            <a href="/" style={style}>
                                <img src={whatsapp} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='header_center_center_block'>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Destination</li>
                            <li>Packages</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div className='header_center_right_block' >

                        <button type='button' id='btn' className='button'>Book Now</button>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Navbar;