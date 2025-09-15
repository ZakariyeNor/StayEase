'use client';
import React from 'react'

type Action = { type: 'increment' | 'decrement' | 'reset' }
type State = { count: number }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
};


const DestinationsPage: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
    <div className='flex flex-col items-center justify-between'>

        <div className="p-10 bg-zinc-600 rounded-lg w-[40%] ml-5 mt-4 space-y-2">
           <button onClick={() => dispatch({ type: 'increment' })} className="rounded p-2 w-[10%] text-center text-white">+</button>
            <p className='text-white'>Count: {state.count}</p>

           <button onClick={() => dispatch({ type: 'decrement' })} className="rounded p-2 w-[10%] text-center text-white">-</button>

           <button onClick={() => dispatch({ type: 'reset' })} className="rounded p-2 w-[10%] text-center text-white">Reset</button>
        </div>

    </div>
    </>
  )
}

export default DestinationsPage
