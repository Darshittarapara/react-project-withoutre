import React from 'react';
import './Contact.css'
function Contact() {
    return (
        <React.Fragment>
            <div className='parent_contact'>
                <div className='child_parent_contact'>
                    <div className='contact_contain'>
                        <span>CALL TO ACTION</span>
                        <h1>
                            READY FOR UNFORGATABLE TRAVEL.REMEMBER US!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur, tenetur reprehenderit odio fuga repudiandae neque dolor distinctio
                        </p>
                    </div>
                    <div className='contact_btn'>
                        <button type='button' className='button'>Contact us</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;