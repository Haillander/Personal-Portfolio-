import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Contact from '../../assets/images/contact.jpeg';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
            setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

return (
    <section className="contact">
        <div className="center">
            <h1 className="page-header">Let's connect</h1>
        </div>
        <div className="center">
        <img
					src={Contact}
					alt="contact-photo"
					className="photo"
				/>
        </div>
        <div className="center">
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
                <button className="btn btn-primary" data-testid="button" type="submit">Submit</button>
        </form>
        </div>
    </section>
    );
}

export default ContactForm;