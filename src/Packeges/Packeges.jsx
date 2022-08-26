import React from 'react'
import './Packeges.css'
import clock from '../img/clork.png';
import location from '../img/location.jpg'
function Packeges(props) {
    const details = props.details
    console.log(details)
    return (


        <div className='Parent_packeges'>
            <div className='first_packege_block'>
                <img src={details.img} alt='' id='package_img' />
            </div>
            <div className='first_packege_block middle'>
                <h2>
                    {details.Title}
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur, tenetur reprehenderit odio fuga repudiandae neque dolor distinctio
                </p>
                <div className='days'>
                    <span id='clork'>
                        <img src={clock} alt='' width={30} height={20} />
                        {details.day}</span>
                    <span >
                        <img src={location} alt='' width={30} height={20} />
                        {details.location}</span>
                </div>
            </div>
            <div className='last_packege_block'>
                <div>
                    <span>({details.reviews})</span>
                    <i className="fa fa-star" style={{ fontSize: '18px' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '18px' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '18px' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '18px' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '18px' }}></i>
                </div>
                <div>
                    {details.price}/person
                </div>
                <button type='button' className='button'>Book Now</button>
            </div>
        </div>

    )
}

export default Packeges;