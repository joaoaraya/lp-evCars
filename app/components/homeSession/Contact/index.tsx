import './style.scss';

export default function Contact() {

    return (
        <div id='session-contact'>
            <div>
                <h1>Reserve Your EV Today!</h1>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='John' />

                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Doe' />

                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='name@mail.com' />

                    <label htmlFor="">Message</label>
                    <textarea name="textarea_name" placeholder='Message' />

                    <input type="submit" value='Book Now' />
                </form>
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}