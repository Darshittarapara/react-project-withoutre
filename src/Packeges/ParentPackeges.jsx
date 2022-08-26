import React from 'react'
import Packeges from './Packeges';
import Packeges_1 from '../img/packege-1.jpg';
import Packeges_2 from '../img/packege-2.jpg';
import Packeges_3 from '../img/packege-3.jpg';
function ParentPackeges() {
    const Packegesdetails = [
        {
            img: Packeges_1,
            Title: "Experience the great Holiday on beach",
            price: '$750',
            location: 'malaysia',
            day: '7D/6N',
            reviews: '30 reviews'
        },
        {
            img: Packeges_2,
            Title: "summer holiday to the oxolotan river",
            price: '$880',
            location: 'Goa',
            day: '7D/6N',
            reviews: '24 reviews'
        }
        , {
            img: Packeges_3,
            Title: "SANTORINI ISLAND WEEKEND VACATION",
            price: '$650',
            location: 'malaysia',
            day: '7D/6N',
            reviews: '20 reviews'
        }
    ]
    return (
        <>
            <section>
                <h1>
                    CHECKOUT OUR PACKEGES
                </h1>
                <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur, tenetur reprehenderit odio fuga repudiandae neque dolor distinctio
                </h4>
            </section>
            <Packeges details={Packegesdetails[0]} />
            <Packeges details={Packegesdetails[1]} />
            <Packeges details={Packegesdetails[2]} />
        </>

    )
}

export default ParentPackeges;