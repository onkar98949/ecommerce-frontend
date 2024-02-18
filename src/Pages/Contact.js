import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const notify = (notification) =>{
        toast.success(notification,{
            style:{
                fontWeight:"500",
                fontFamily:"Roboto",
            }
        })
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        notify("Message Sent")
    }

    return (
        <div>
            <div><Toaster/></div>
            <div className='contactdiv overflow-y-scroll'>
                <div className='contact-maindiv my-5 mx-auto'>
                    
                    <div className='contact-div1 my-3'>
                        <div className='textdiv'>
                        <h3 className="contact-heading mb-4">Let's talk about everything!</h3>
                        <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
                        <div>
                        <img src="https://i.pinimg.com/736x/05/4d/80/054d80fd31df802126f46a375ebb7c4a.jpg" alt="Image" /></div>
                        </div>
                    </div>

                    <div className='contact-div2 my-3'>
                        <form onSubmit={handleSubmit} className='contact-form'>
                            <div>
                               <input type="text" name="name" autoComplete='off' id="name" placeholder="Your name"/>
                            </div>
                            <div>
                                <input type="text" name="email" autoComplete='off' id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <input type="text"name="subject" id="subject" autoComplete='off' placeholder="Subject"/>
                            </div>
                            <div>
                               <textarea name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                            </div>
                            <div>
                                <button type='submit' className='send-message-btn px-4 py-2'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact