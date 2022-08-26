//import React from 'react'
import './Destination.css'
import React, { useState } from 'react';

//import place_1 from '../img/'
function Destination() {
    const [firstblockstyle, setfirstdisplaypropertis] = useState('flex');
    const [secondblockstyle, setseconddisplaypropertis] = useState('none');

    const changedestinationpage = (e) => {
        console.log(e.target.innerHTML)
        if (secondblockstyle !== 'flex') {
            setseconddisplaypropertis('flex')
            e.target.innerHTML = 'Prew'
            setfirstdisplaypropertis('none')
        }
        else {
            setseconddisplaypropertis('none')
            e.target.innerHTML = 'Next'
            setfirstdisplaypropertis('flex')
        }
    }
    return (
        <>
            <div className='Destination'>
                <section>
                    <h1>
                        POPULAR DESTINATION
                    </h1>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur, tenetur reprehenderit odio fuga repudiandae neque dolor distinctio
                    </h4>
                </section>

                <div className='destination_place'>
                    <div className='destination_first_block' style={{ display: firstblockstyle }}>
                        <div className='place-1 common_destination_block'>
                            <div className='destination_contain'>
                                <span>italy</span>
                                <h4>SAN MIGUEL</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px' }}></i>
                                </div>
                            </div>
                        </div>

                        <div className='place-2 common_destination_block'>
                            <div className='destination_contain'>
                                <span>DUBAI</span>
                                <h4>BURJ KHALIFA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px', color: 'orange' }}></i>
                                </div>
                            </div>
                        </div>


                        <div className='place-3 common_destination_block'>
                            <div className='destination_contain'>
                                <span>JAPAN</span>
                                <h4>KYOTO TEMPLE</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px' }}></i>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='second_destination_page' style={{ display: secondblockstyle }}>
                        <div className='place-4 common_destination_block'>
                            <div className='destination_contain'>
                                <span>Paris</span>
                                <h4>Eiffel Tower</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px' }}></i>
                                </div>
                            </div>
                        </div>



                        <div className='place-5 common_destination_block'>
                            <div className='destination_contain'>
                                <span>New York</span>
                                <h4>STATUE OF LIBERTY</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px' }}></i>
                                </div>
                            </div>
                        </div>




                        <div className='place-6 common_destination_block'>
                            <div className='destination_contain'>
                                <span>Saputara</span>
                                <h4>THE GIRA FALLS</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div className='rating'>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '21px' }}></i>
                                    <i className="fa fa-star" style={{ fontSize: '21px' }}></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='destination_btn'>
                    <button type='button' className='button' onClick={changedestinationpage}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Destination;