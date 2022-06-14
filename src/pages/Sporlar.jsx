import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import {useStateContext} from '../contexts/ContextProvider'
import SporList from '../components/Sporlar/SporList';
import SporNew from '../components/Sporlar/SporNew';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const Sporlar = () => {
  const { isOpen, SetOpen } = useStateContext();

  return (

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {isOpen ? (
        <>
        <SporNew />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Header category="Admin" title="Sporlar" />
      <div>

        <button className="text-sm leading-none text-gray-100 py-3 px-5 bg-blue-500 rounded hover:bg-gray-200 focus:outline-none mr-2" onClick={() => SetOpen(true)}>Spor Ekle</button>
        
        <div className="w-full">

          <div className="mt-7 overflow-x-auto">
            <SporList />
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
      </div>
    </div>
  )
}

export default Sporlar