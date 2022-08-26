import React from 'react';
import './Gallary.css'
import gallary_1 from '../img/gallery-1.jpg';
import gallary_2 from '../img/gallery-2.jpg'
import gallary_3 from '../img/gallery-3.jpg'
import gallary_4 from '../img/gallery-4.jpg'
import gallary_5 from '../img/gallery-5.jpg'
function Gallary() {
    return (
        <>
            <section>
                <h1>
                    PHOTO'S FROM TRAVELLERS
                </h1>
                <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur, tenetur reprehenderit odio fuga repudiandae neque dolor distinctio
                </h4>
            </section>
            <div className='parent_gallary'>
                <div className='left_gallary_photos'>
                    <img src={gallary_1} alt='' />
                    <img src={gallary_2} alt='' />

                </div>
                <div className='left_gallary_photos center_block'>
                    <img src={gallary_3} alt='' />
                </div>
                <div className='left_gallary_photos'>
                    <img src={gallary_4} alt='' />
                    <img src={gallary_5} alt='' />
                </div>
            </div>

        </>
    )
}

export default Gallary;