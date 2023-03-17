import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import img from "../images/portfolio-headshot.jpg"
import {FiMail, FiGithub, FiUser} from "react-icons/fi"
import Alert from "../layout/assets/Alert";

const EMAILJS_SERVICE = process.env.REACT_APP_SERVICE_ID
const EMAILJS_TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
const EMAILJS_KEY = process.env.REACT_APP_PUBLIC_KEY

const About = () => {
    const form = useRef();

    const [isAlerting, setIsAlerting] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [alertDisplay, setAlertDisplay] = useState(false);


    const handleMessage = (e) => {
        const msg = e.target.value
        if (msg.trim().length >= 5) {
            setBtnDisabled(false);
            setAlertDisplay(false)
        } else if (msg.trim() !== ""){
            setBtnDisabled(true);
            setAlertDisplay(true)
        }
    }


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${EMAILJS_SERVICE}`, `${EMAILJS_TEMPLATE}`, form.current, `${EMAILJS_KEY}`)
            .then((result) => {
                console.log(result.text);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                setIsAlerting(true);
                setBtnDisabled(true);
                setTimeout(function () {
                    setIsAlerting(false)
                }, 2000)
            }, (error) => {
                console.log(error.text);

            });
    };

    return (

        <div className="flex justify-center items-center bg-black">
            <form id="email-form" onSubmit={sendEmail} ref={form}/>
            <div className="container mx-auto my-4 px-4 lg:px-20 bg-black">
                <div className="bg-base-100/90 mt-10 w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold text-5xl whitespace-normal">Send Me A Message</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                            id="name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Name" name="from_name" form="email-form"/>
                        <input
                            id="email" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email" form="email-form" name="email_id"/>
                    </div>
                    <div className="my-4">
                        <textarea id="message" name="message" form="email-form" placeholder="Message*"
    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" onChange={handleMessage}/>
                        {alertDisplay &&
                        <div className="text-rose-500">Message must be at least 5 characters</div>}
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/2 xl:w-1/4">
                        <button disabled={btnDisabled} className="uppercase text-sm font-bold tracking-wide btn bg-primary text-white p-3 rounded-lg w-full
                      focus:outline-none focus:shadow-outline" type="submit" form="email-form">
                            Send Message
                        </button>

                    </div>

                    {isAlerting &&
                        <Alert/>
                    }

                </div>



                <div
                    className="w-full flex justify-center lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-br from-neutral to-black rounded-2xl">
                    <div className="flex flex-col text-white">
                        <div>
                            <div className="avatar">
                                <div className="w-26 mask mask-circle">
                                    <img src={img}  alt="headshot"/>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl my-4 font-bold text-center">Web Developer</h1>

                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            {/*<div className="flex flex-col">*/}
                            {/*    <i className="pt-2 pr-2"/>*/}
                            {/*</div>*/}
                            <div className="flex flex-col items-center">
                                <div className="text-2xl text-center">Contact</div>
                            </div>
                        </div>

                        <div className="flex w-2/3 lg:w-1/2">
                            {/*<div className="flex flex-col">*/}
                            {/*    <i className="pt-2 pr-2"/>*/}
                            {/*</div>*/}
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center pb-2">
                                    <FiMail/>
                                    <a className="ml-2 underline underline-offset-2" href="mailto:oscar.a.castro818@gmail.com">oscar.a.castro818@gmail.com</a>
                                </div>
                                <div className="flex flex-row items-center pb-2">
                                    <FiGithub/>
                                    <a className="ml-2 underline underline-offset-2" href="https://oscar-ct.github.io">https://oscar-ct.github.io</a>
                                </div>
                                <div className="flex flex-row items-center pb-2">
                                    <FiUser/>
                                    <a className="ml-2 underline underline-offset-2" href="https://github.com/oscar-ct">https://github.com/oscar-ct</a>
                                </div>

                            </div>
                        </div>

                        {/*<div className="flex my-4 w-2/3 lg:w-1/2">*/}
                        {/*    <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">*/}
                        {/*        <i className="text-blue-900"/>*/}
                        {/*    </a>*/}
                        {/*    <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">*/}
                        {/*        <i className="text-blue-900"/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;