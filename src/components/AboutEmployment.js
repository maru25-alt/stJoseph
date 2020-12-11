import React from 'react'
import img from '../assets/request-info.jpg'
import img2 from '../assets/refer-a-friend.jpg'


function AboutEmployment() {
    return (
        <div id="employment" className="section employment">
           <div className="row">
               <div className="col-sm-12 col-md-2">
                   <div className=" image__container mb-5">
                        <img src={img} alt="info"/>
                   </div>
                   <div className=" image__container mt-5">
                        <img src={img2} alt="info"/>
                   </div>
                  
               </div>
               <div className="col-sm-12 col-md-10">
                   <div className="section__heading text-center">
                       <h6>Apply for a position at ST. JOSEPH MANOR​</h6>
                       <h1>Employment Vacancies</h1>
                       <hr className="centered"/>
                       <div className="row mt-4 employment__text">
                           <div className="col-sm-12 col-md-6">
                               <p>To the Applicant: We appreciate your interest in our firm and assure you that we are interested in your qualifications. A clear understanding of you background and work history will aid us in seeking to place you in a position, which, in our judgment, best meets, your qualifications.</p>
                               <p>We are an equal opportunity employer and will not unlawfully discriminate on the basis of race, color, sex, religion, national origin, age, martial or veteran status, presence of medical conditions or handicap, weight or any other protected status.</p>

                           </div>
                           <div className="col-sm-12 col-md-6">
                               <p>Under the Michigan law only, disabled employees and applicants may request and accommodation of their disability by notifying the firm in writing of the need for accommodation within 182 days of the date the disabled individual knows of should know that an accommodation is needed. This requirement does not apply to an individual's right under the Americans with Disabilities Act. Failure to properly notify the firm may prelude any claim that the employer failed to accommodate the disabled individual.</p>
                               <p>Employers must make accommodations to disabled applicants and employees where the accommodation does not impose an undue hardship on the employer.</p>
                           </div>
                       </div>
                       <h6> THIS APPLICATION WILL BE KEPT CURRENT FOR THREE MONTHS.
YOU NEED TO COMPLETE ANOTHER ONE TO BE RECONSIDERED AFTER THIS DATE.</h6>
                       <h6>
                       TO APPLY FOR OUR FIRM PLEASE CLICK THE LINK BELOW AND PRINT THE APPLICATION. UPON PRINTING IT PLEASE BRING IT IN TO OUR FACILITY ALONG WITH YOUR RESUME IN ORDER TO BE CONSIDERED FOR EMPLOYMENT.
                       </h6>
                       <p>
                       If you are interested in obtaining a position as a Certified Home Health Aide, Occupational Therapist, Social Worker, Physical Therapist etc. please click the link below:
                       </p>
                       <div>
                       {/* <a href="../assets/application-for-employment.doc" download="proposed_file_name">Download</a> */}
                           <a href="../assets/application-for-employment.doc" download="application-for-employment.doc" className="button info-Btn">Download Application form</a>
                           <a href="mailto:info@stjosephmanor.com" className="button success-Btn">Send Complete Application</a>
                       </div>
                   </div>
               </div>
           </div>

        </div>
    )
}

export default AboutEmployment
