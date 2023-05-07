import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        setStatus(data.message);
    };

    return (
        <form className='flex flex-col gap-3 w-full max-w-[600px]' onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row gap-3'>
                <input placeholder='Name' type='text' className='p-3 rounded-md bg-[#F0F0F0] outline-none placeholder:text-[#757575]' onChange={(e) => setName(e.target.value)}/>
                <input placeholder='Email' type='email' required className='p-3 rounded-md bg-[#F0F0F0] outline-none placeholder:text-[#757575] w-full' onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <textarea rows="5" placeholder='Message' className='p-3 rounded-md bg-[#F0F0F0] outline-none placeholder:text-[#757575]' onChange={(e) => setMessage(e.target.value)}/>
              <button className='w-full bg-[var(--highlight)] text-white rounded-md p-2' type='submit'>Sumbit</button>
          </form>
    )
}