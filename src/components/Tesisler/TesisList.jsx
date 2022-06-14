import React, { useEffect, useState } from 'react';
import { createdAPIEndpoint, ENDPOINTS } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import {useStateContext} from '../../contexts/ContextProvider'

function TesisList() {
    const { tesis, SetTesis } = useStateContext();

    useEffect(() => {
      createdAPIEndpoint(ENDPOINTS.SPORLAR).fetchAll()
        .then(res => {
          let TesisList = res.data.data.map(item => ({
            id: item.id,
            isim: item.isim,
            aciklama: item.aciklama,
            tesisSahibiFk:item.tesisSahibiFk,
            sehirFk: item.sehirFk,
            konum:item.konum,
            konumAdres:item.konumAdres
          }));
          SetTesis(TesisList)
  
        })
        .catch(err => console.log(err))
    }, [])
  
  return (
<table className="w-full whitespace-nowrap">
    <thead>
      <tr className="h-16 border border-gray-100 bg-gray-200 rounded">
        <td className='pl-5' >Tesis İsmi</td>
        <td className='pl-5' >Açıklama</td>
        <td className='pl-5' >Tesis Sahibi</td>
        <td className='pl-5' >Şehir</td>
        <td className='pl-5' >Konum</td>
        <td className='pl-5' >Konum Adresi</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {tesis && tesis.map((tesiss, index) => {
        return (<tr key={tesiss.id} className="h-16 border border-gray-100 rounded">
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.isim}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.aciklama}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.tesisSahibiFk}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.sehirFk}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.konum}</p>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5 ">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">{tesiss.konumAdres}</p>
              </div>
            </td>
            <td className="pl-4">
              <button className="text-sm leading-none text-yellow-900 py-3 px-5 bg-yellow-300 rounded hover:bg-gray-200 focus:outline-none mr-2">Düzenle</button>
              <button className="text-sm leading-none text-gray-100 py-3 px-5 bg-red-500 rounded hover:bg-gray-200 focus:outline-none" onClick={ () => createdAPIEndpoint(ENDPOINTS.TESISLER).delete(tesiss.id).then(res => {
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

export default TesisList