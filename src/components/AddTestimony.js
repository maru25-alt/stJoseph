import React, { useState } from 'react' 
import { useForm } from "react-hook-form";


function AddTestimony() {
    const [name, setname] = useState("");
    const [message, setmessage] = useState();
    const { register, handleSubmit,errors } = useForm();

    const handleSubmitForm = () =>{
        console.log("submitted")
        alert("testimony successfully submited")
        setmessage("")
        setname("")
    }

    return (
        <div className="section addTestimony">
            <div className="row">
                <div className="section__heading text-center col-sm-12 col-md-6">
                    <h6>Leave your testiomy here</h6>
                    <h1>Testify</h1>
                    <hr className="centered"/>
                </div>
                <form  onSubmit={handleSubmit(handleSubmitForm )}   className="col-sm-12 col-md-6">
                    <input ref={register({ required: true })}  name="name" value={name} onChange={e => setname(e.target.value)} className="form-input" type="text" placeholder="Your Name"/>
                    {errors.name && <span className="text-warning"> This field  is required</span>}
                    <textarea ref={register({ required: true })}  name="message" value={message} onChange={e => setmessage(e.target.value)} className="form-input"  placeholder="Type here..." rows="10"></textarea>
                    {errors.message && <span className="text-warning"> This field  is required</span>}
                    <div>
                    <button type="submit" className="button info-button">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddTestimony
