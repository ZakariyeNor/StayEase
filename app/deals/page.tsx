'use client';
import React, { useState } from 'react'


type Props = {
    value?: string

}

const DealsPage: React.FC<Props> = ({ value }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submited data', name, age);
    }
    
  return (
    <>
    <div className='flex flex-col items-center justify-between'>
        <form onSubmit={handleSubmit} className='p-10 bg-zinc-600 rounded-lg w-[40%] ml-5 mt-4 space-y-2 '>
            <input
                type='name'
                placeholder='Enter your email'
                className='rounded p-2 block'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='number'
                placeholder='Enter your number'
                className='rounded p-2'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button
                type='submit'
                className='bg-accent p-3 rounded-md text-accentText font-bold block'
                
            >
                Submit
            </button>

        </form>

    </div>
    </>
  )
}

export default DealsPage