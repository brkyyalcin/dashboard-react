import React, { useEffect, useState } from 'react';
import { createdAPIEndpoint, ENDPOINTS } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import {useStateContext} from '../../contexts/ContextProvider'

function SporList() {

  const { setSports, Sports } = useStateContext();

  useEffect(() => {
    createdAPIEndpoint(ENDPOINTS.SPORLAR).fetchAll()
      .then(res => {
        let sporList = res.data.data.map(item => ({
          id: item.id,
          isim: item.isim,
          icon: item.icon,
        }));
        setSports(sporList)

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <table className="w-full whitespace-nowrap">
    <thead>
      <tr className="h-16 border border-gray-100 bg-gray-200 rounded">
        <td className='pl-5' >icon</td>
        <td className='pl-5' >Spor Adı</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {Sports && Sports.map((sport, index) => {
        return (<tr key={sport.id} className="h-16 border border-gray-100 rounded">
            <td className>
              <div className="flex items-center pl-5">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{sport.icon}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{sport.isim}</p>
              </div>
            </td>
            <td className="pl-4">
              <button className="text-sm leading-none text-yellow-900 py-3 px-5 bg-yellow-300 rounded hover:bg-gray-200 focus:outline-none mr-2">Düzenle</button>
              <button className="text-sm leading-none text-gray-100 py-3 px-5 bg-red-500 rounded hover:bg-gray-200 focus:outline-none" onClick={ () => createdAPIEndpoint(ENDPOINTS.SPORLAR).delete(sport.id).then(res => {
                                            toast.success('Başarılı!', 'Yemek başarıyla silindi.')
                                        }).catch(err => {
                                          console.log(err)
                                          toast.error('Başarısız!', 'Yemek silinemedi.')
                                      })}>Sil</button>
            </td>
          </tr>)
      })}
    </tbody>
  </table>
  )
}

export default SporList