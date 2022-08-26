import React from 'react';
import Silder from './Silder';
import img_1 from '../img/1.png'
import img_2 from '../img/2.png'
import img_3 from '../img/3.png'
import img_4 from '../img/4.png'
import img_5 from '../img/5.png'
import img_6 from '../img/hero-banner.jpg'

function Parentsilder() {
    const allimg = [
        {
            id: 1,
            img: img_1
        },
        {
            id: 2,
            img: img_2
        },
        {
            id: 3,
            img: img_3
        },
        {
            id: 4,
            img: img_4
        },
        {
            id: 5,
            img: img_5
        },
        {
            id: 6,
            img: img_6
        }

    ]


    return (
        <>
            <Silder allimg={allimg} />
        </>
    )
}

export default Parentsilder;