import React from 'react'
import {RefreshIcon} from '@heroicons/react/outline'
import MessageBox from './MessageBox'
import { Messag } from '../typings.d'
import MessageComponent from '../components/Message'
import Message from '../components/Message'

interface Props {
  messags: Messag []
} 

function Feed({ messags }: Props) {
  return (
    <div className='col-span-7 border-x lg:col-span-5'>
        <div className='flex items-center justify-between'>
            <h1 className="p-5 pb-0 text-xl font-bold">Accueil</h1>
         <RefreshIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer text-green-300 transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
        </div>
        <div>
          <MessageBox />
        </div>
        <div>
          {messags.map((messag) => 
          <MessageComponent key={messag._id} messag={messag} />
          )}
        </div>
    </div>
  )
}

export default Feed