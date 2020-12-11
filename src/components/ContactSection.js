import React, {useState} from 'react'
import {main} from '../data';
import { useForm } from "react-hook-form";
import {client} from '../utilies'

function ContactSection() {
    const {address, telephone, email, fax} = main;
    const [name, setname] = useState("");
    const [mail, setEmail] = useState("");
    const [tel, settelephone] = useState("")
    const [message, setmessage] = useState("")
    const { register, handleSubmit,errors } = useForm();

    const handleSubmitForm  = () => {

        (async function(){
            await client.connect();
            await client.greet({hostname: 'mx.domain.com'}); // runs EHLO command or HELO as a fallback
            await client.authPlain({username: 'john', password: 'secret'}); // authenticates a user
            await client.mail({from: mail}); // runs MAIL FROM command
            await client.rcpt({to: 'mapfumbarudo@gmail.com.com'}); // runs RCPT TO command (run this multiple times to add more recii)
            await client.data('mail source'); // runs DATA command and streams email source
            await client.quit(); // runs QUIT command
        })().catch(console.error)
        // client(
        //     {
        //         html: message,
        //         from: mail,
        //         to:     `mapfumbarudo@gmail.com`,
        //         cc: '',
        //         subject: "Contact message from website",
        //     },
        //     (err, res) => {
        //         alert(err || res)
        //         console.log(err || res);
        //     }
        // );
    }
    return (
        <div className="section contact__section">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="section__heading">
                        <h6>Get in Touch with us</h6>
                        <h1>Contacts</h1>
                        <hr/>
                    </div>
                    <div className="contact__content">
                        <div className="contact__item">
                            <h6 className="title">Phone</h6>
                            <p>{telephone}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Fax</h6>
                            <p>{fax}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Email</h6>
                            <p>{email}</p>
                        </div>
                        <div className="contact__item">
                            <h6 className="title">Address</h6>
                            <p>{address.name} <br/> {address.street} <br/> {address.city}, {address.zip}</p>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h6  className="title ">Send A Message</h6>
                    <form onSubmit={handleSubmit(handleSubmitForm )} className="contact__form">
                         <input ref={register({ required: true })} name="name" onChange={e => setname(e.target.value)} value={name} placeholder="Your Name" className="form-input" type="text"/>
                         {errors.name && <span className="error"> This field  is required</span>}
                         <input ref={register({ required: true })} name="email" onChange={e => setEmail(e.target.value)} value={mail} placeholder="Your Email" className="form-input" type="email"/>
                         {errors.email && <span className="error"> This field  is required</span>}
                         <input ref={register({ required: true })} name="telephone" onChange={e => settelephone(e.target.value)} value={tel} type="tel" placeholder="Your Telephone" className="form-input"/>
                         {errors.telephone && <span className="error"> This field  is required</span>}
                         <textarea ref={register({ required: true })} name="message" onChange={e => setmessage(e.target.value)} value={message} placeholder="Message" className="form-input" rows="10"></textarea>
                         {errors.message && <span className="error"> This field  is required</span>}
                         <div>
                         <button className="button info-button" type="submit">Send Message</button>
                         </div>
                         
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
