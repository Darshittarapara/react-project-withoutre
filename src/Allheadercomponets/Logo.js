import React from 'react'
import './Header.css'
import { Fragment } from 'react';
import logo from '../img/logo.svg'
import { useState } from 'react';
import closebtn from '../img/close.png'
function Logoblock(props) {

    const [searchinput, setsearchinput] = useState('')

    const [searchbtn, setsearchbtn] = useState('https://www.pnglib.com/wp-content/uploads/2020/08/simple-grey-search-icon_5f34a64f04780-1536x1497.png')

    const searchfun = () => {
        if (searchinput !== '') {
            setsearchbtn('https://www.pnglib.com/wp-content/uploads/2020/08/simple-grey-search-icon_5f34a64f04780-1536x1497.png')
            setsearchinput('')
        }
        else {
            setsearchinput(
                <input type='text' name='usersearch' placeholder='search' />
            )
            setsearchbtn(closebtn)
        }
    }
    //window.scro



    return (
        <Fragment>

            <div className='header_top_block'>
                <div className='header_top_left_block' style={{ display: "flex" }}>
                    <img src='https://web.static.nowtv.com/images/NOWTV_2017/Broadband/2019/Calls-icon.svg' alt='' width={60} height={50} />
                    <div>
                        <span>For Futher inquiry</span>
                        <span>+12 87877937</span>
                    </div>
                </div>
                <div className='header_top_center_block'>

                    <img src={logo} alt='' />
                </div>
                <div className='header_top_right_block' >
                    {searchinput}
                    <img src={searchbtn} alt='' width={30} height={30} onClick={searchfun} id='img' />
                </div>
            </div>


            <div id='border'></div>
        </Fragment>
    )

}

export default Logoblock;