import React, { useState, useRef } from "react";
import LineSeparator from "components/body/separators/LineSeparator";
import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
import ReCAPTCHA from "react-google-recaptcha";

const FORM_ENDPOINT = "";

const Template1 = ({data}) => {

    const {heading,subheading} = data
    const [submitted, setSubmitted] = useState(false);

    const ReCAPTCHA_REF = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const recValue = ReCAPTCHA_REF.current.getValue()

        if(!recValue){
            alert('No ReCAPTCHA')
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.name.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
                recaptcha: recValue
            }),
        }

        fetch('/send-email', requestOptions).then(
            async (response) => {
                const res = await response.json()
                setSubmitted(true);
            }
        )

    };


    return (
        <div className={'contact-form '}>
            <div className={'title-case-secondary text-center primary-black '}>
                { heading || 'Contact Us'}
            </div>
            <LineSeparator padding={'10px'}/>
            <div className={'promo-heading-text text-center primary-black'}>
                { subheading || 'Please use this form to send us your questions, suggestions,\n' +
                    'likes or dislikes. We’re always happy to hear from you!'}

            </div>
            <LineSeparator padding={'30px'}/>
            <form

                action={FORM_ENDPOINT}

                onSubmit={handleSubmit}

                method="POST"

                className={'pr-contact-form'}

            >

                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-md-6 py-2'}>
                            <label className={'promo-heading-text'}>Full Name</label>
                            <LineSeparator padding={'5px'}/>
                            <input

                                type="text"

                                placeholder="Full Name"

                                name="name"

                                className=""

                                required

                            />
                        </div>
                        <div className={'col-md-6 py-2'}>
                            <label className={'promo-heading-text'}>Email</label>
                            <LineSeparator padding={'5px'}/>
                            <input

                                type="email"

                                placeholder="Email"

                                name="email"

                                className=""

                                required

                            />
                        </div>
                        <LineSeparator padding={'14px'}/>
                        <div className={'col-md-12 py-2'}>
                            <div>
                                <label className={'promo-heading-text'}>Subject</label>
                                <LineSeparator padding={'5px'}/>
                                <textarea

                                    type="text"

                                    placeholder="Subject"

                                    name="subject"

                                    className="promo-heading-text"

                                    required

                                />
                            </div>
                        </div>
                        <LineSeparator padding={'14px'}/>
                        <div className={'col-md-12 py-2'}>
                            <div>
                                <label className={'promo-heading-text'}>Message</label>
                                <LineSeparator padding={'5px'}/>
                                <textarea

                                    placeholder="Your message"

                                    name="message"

                                    className="promo-heading-text"

                                    required

                                />

                            </div>
                        </div>
                    </div>
                </div>
                <LineSeparator padding={'20px'}/>

                <div className={'d-flex'}>

                    <ReCAPTCHA
                        ref={ReCAPTCHA_REF}
                        sitekey={'6Ld-5UIkAAAAAF6lKADpcETDLxD-r4ArDMpMEKK5'}
                    />

                </div>

                <LineSeparator padding={'20px'}/>
                <div className={'d-flex'}>

                    <button

                        className="button-fill primary-dark f-r"

                        type="submit"

                    >

                        Send a message

                    </button>

                </div>
                <LineSeparator padding={'30px'}/>

                {
                    submitted && <>

                        <div className="text-2xl">Thank you!</div>

                        <div className="text-md">We will be in touch soon.</div>

                    </>
                }

            </form>

            <style jsx>
                {`
                  .contact-form{
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 70px;
                      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
                      background: #FFFFFF;
                  }
                  label{
                     width: 100%;
                  }
                  input,textarea{
                     width: 100%;
                     border: 0;
                     border-bottom: 1px solid #D5D5D5;
                     background: transparent;
                     
                  }
                  input{
                    padding: 0;
                    padding-bottom: 12px;
                  }
                  
                  textarea{
                    margin: 0;
                    padding: 0;
                    resize: none;
                  }

                   @media only screen and (max-width: ${mediaBreakPoints.lg}) {
                         .contact-form{
                              padding: 30px;
                          }
                   }
                `}
            </style>
        </div>


    );

};


export default Template1;