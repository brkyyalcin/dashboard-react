import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react';
import { createdAPIEndpoint, ENDPOINTS } from '../../api/';
import { ToastContainer, toast } from 'react-toastify';
import {useStateContext} from '../../contexts/ContextProvider'

function SporNew() {
    const { setSports, SetOpen  } = useStateContext();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
          isim: '',
        },
        onSubmit: values => {
          console.log(values);
          createdAPIEndpoint(ENDPOINTS.SPORLAR).create(values).then(res => {
            toast.success("Başarılı","Spor Başarılı Bir Şekilde Kayıt Edildi.");
            SetOpen(false);


          })
            .catch(err => {
              console.log(err)
            });
        },
    
      })
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="flex text-2xl text-center font-semibold jus">Sporcu Ekle
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => SetOpen(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-12 sm:col-span-12">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Sporcu Adı
                </label>

                <input
                  type="text"
                  name="isim"
                  value={values.isim} onChange={handleChange} onBlur={handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                />
              </div>
            </div>


          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => SetOpen(false)}
            >
              Kapat
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit" >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

export default SporNew