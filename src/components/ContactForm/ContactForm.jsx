import React, {useState} from 'react'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import SubjectInput from './SubjectInput'
import MessageInput from './MessageInput'
import SendMessage from './SendMessage'
import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    function validateForm(){
        if(!name || !name.trim()){
            alert("Name fields are required")
            return false; 
            
        }
        else if(!email || !email.trim()){
            alert("email fields are required")
             return false;
        }
        else if(!subject || !subject.trim()){
            alert("subject fields are required")
             return false;
        }
        else if(!message || !message.trim()){
            alert("message fields are required")
             return false;
        }
        else{
            return true
        }
       
    }
    

    function handleContactForm(event) {
        event.preventDefault()
        if(!validateForm()){return;}
        console.log('name', name,'Email',email, "subject", subject, "Message", message )
        alert('Form Submit')
        const payload ={name, email, subject, message}
        console.log(payload)
        localStorage.setItem('contactForm', JSON.stringify(payload))
        setName('')
        setEmail(' ')
        setSubject(' ')
        setMessage(' ')


    }
    return (
        <div className='contactContainer'>
            <form className='formContainer' onSubmit={handleContactForm} >
                <NameInput inputType='text' onchange={setName} value={name} />
                <EmailInput inputType='email' onchange={setEmail} value={email} />
                <SubjectInput inputType='text' onchange={setSubject}  value={subject} />
                <MessageInput onchange={setMessage} value={message}/>
                <SendMessage inputType='submit' />

            </form>
        </div>
    )
}

export default ContactForm