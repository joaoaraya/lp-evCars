import './style.scss';

export default function Contact() {

    return (
        <div id='session-contact'>
            <div id='contact-outside-box'>
                <div id='contact-inside-box'>
                    <div id='contact-form'>
                        <h1>Reserve Your EV Today!</h1>

                        <form action='/' method='post'>
                            <div id='form-first-name'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text' id='firstName' placeholder='John' />
                            </div>

                            <div id='form-last-name'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input type='text' id='lastName' placeholder='Doe' />
                            </div>

                            <div id='form-mail'>
                                <label htmlFor='mail'>Mail</label>
                                <input type='text' id='mail' placeholder='name@mail.com' />
                            </div>

                            <div id='form-message'>
                                <label htmlFor='message'>Message</label>
                                <textarea name="textarea_name" id='message' placeholder='Message' />
                            </div>

                            <div id='button-send'>
                                <input type='submit' value='Book Now' />
                            </div>
                        </form>
                    </div>

                    <div id='contact-banner'>
                        <img src='/assets/img-contact-car.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}