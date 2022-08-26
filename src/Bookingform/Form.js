//import React from 'react'
import './Form.css'
import React, { useState } from 'react';

function Form() {
    const [userinput, getbookingdetails] = useState(
        {
            destination: '',
            people: '',
            checkin_date: '',
            checkout_date: ''
        }
    )
    const Handlechange = (e) => {
        const temp = e.target.name
        getbookingdetails(
            {
                ...userinput,
                [temp]: e.target.value
            }

        )
    }
    const Handlesubmit = (e) => {
        e.preventDefault()
        const { destination, people, checkin_date, checkout_date } = userinput
        console.log(userinput)
        const store = {
            destination, people, checkin_date, checkout_date
        }
        console.log(store)
        localStorage.setItem('booking_details',JSON.stringify(store))

    }
    return (
        <React.Fragment>
            <div className='form_block'>
                <form onSubmit={Handlesubmit}>
                    <div>
                        <span>Search Destination</span>
                        <input type='text' placeholder='Enter Destination' name='destination' value={userinput.destination} onChange={Handlechange} />
                    </div>
                    <div>
                        <span>Number of people</span>
                        <input type='number' placeholder='No of people' name='people' value={userinput.people} onChange={Handlechange} />
                    </div>
                    <div>
                        <span>Checkin date</span>
                        <input type='date' placeholder='dd/mm/yy' name='checkin_date' value={userinput.checkin_date} onChange={Handlechange} />
                    </div>
                    <div>
                        <span>Checkout date</span>
                        <input type='date' placeholder='dd/mm/yy' name='checkout_date' value={userinput.checkout_date} onChange={Handlechange} />
                    </div>
                    <div>
                        <br></br>
                        <br></br>
                        <input type='submit' value='INQUIRE NOW' />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Form;