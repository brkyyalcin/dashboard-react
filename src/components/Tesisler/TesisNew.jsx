import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react';
import { createdAPIEndpoint, ENDPOINTS } from '../../api/';
import { ToastContainer, toast } from 'react-toastify';
import { useStateContext } from '../../contexts/ContextProvider'

function TesisNew() {
    const { setSports, SetOpen } = useStateContext();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            isim: '',
            aciklama: '',
            tesisSahibiFk: '',
            sehirFk: 0,
            konum: '',
            konumAdres: ''
        },
        onSubmit: values => {
            console.log(values);
            createdAPIEndpoint(ENDPOINTS.TESISLER).create(values).then(res => {
                toast.success("Başarılı", "Spor Başarılı Bir Şekilde Kayıt Edildi.");
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
                            <h3 className="flex text-2xl text-center font-semibold jus">Tesis Ekle
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
                                        Tesis Adı
                                    </label>
                                    <input
                                        type="text"
                                        name="isim"
                                        value={values.isim} onChange={handleChange} onBlur={handleBlur}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                                    />
                                </div>
                                <div className="col-span-12 sm:col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Açıklama
                                    </label>
                                    <input
                                        type="text"
                                        name="aciklama"
                                        value={values.aciklama} onChange={handleChange} onBlur={handleBlur}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                                    />
                                </div>
                                <div className="col-span-12 sm:col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Tesis Sahibi
                                    </label>
                                    <input
                                        type="text"
                                        name="tesisSahibiFk"
                                        value={values.tesisSahibiFk} onChange={handleChange} onBlur={handleBlur}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                                    />
                                </div>
                                <div className="col-span-12 sm:col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Şehir
                                    </label>
                                    <select name="sehirFk"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                                        value={Number(values.sehirFk)} onChange={handleChange} onBlur={handleBlur}>
                                        <option value="0">------</option>
                                        <option value="1">Adana</option>
                                        <option value="2">Adıyaman</option>
                                        <option value="3">Afyonkarahisar</option>
                                        <option value="4">Ağrı</option>
                                        <option value="5">Amasya</option>
                                        <option value="6">Ankara</option>
                                        <option value="7">Antalya</option>
                                        <option value="8">Artvin</option>
                                        <option value="9">Aydın</option>
                                        <option value="10">Balıkesir</option>
                                        <option value="11">Bilecik</option>
                                        <option value="12">Bingöl</option>
                                        <option value="13">Bitlis</option>
                                        <option value="14">Bolu</option>
                                        <option value="15">Burdur</option>
                                        <option value="16">Bursa</option>
                                        <option value="17">Çanakkale</option>
                                        <option value="18">Çankırı</option>
                                        <option value="19">Çorum</option>
                                        <option value="20">Denizli</option>
                                        <option value="21">Diyarbakır</option>
                                        <option value="22">Edirne</option>
                                        <option value="23">Elazığ</option>
                                        <option value="24">Erzincan</option>
                                        <option value="25">Erzurum</option>
                                        <option value="26">Eskişehir</option>
                                        <option value="27">Gaziantep</option>
                                        <option value="28">Giresun</option>
                                        <option value="29">Gümüşhane</option>
                                        <option value="30">Hakkâri</option>
                                        <option value="31">Hatay</option>
                                        <option value="32">Isparta</option>
                                        <option value="33">Mersin</option>
                                        <option value="34">İstanbul</option>
                                        <option value="35">İzmir</option>
                                        <option value="36">Kars</option>
                                        <option value="37">Kastamonu</option>
                                        <option value="38">Kayseri</option>
                                        <option value="39">Kırklareli</option>
                                        <option value="40">Kırşehir</option>
                                        <option value="41">Kocaeli</option>
                                        <option value="42">Konya</option>
                                        <option value="43">Kütahya</option>
                                        <option value="44">Malatya</option>
                                        <option value="45">Manisa</option>
                                        <option value="46">Kahramanmaraş</option>
                                        <option value="47">Mardin</option>
                                        <option value="48">Muğla</option>
                                        <option value="49">Muş</option>
                                        <option value="50">Nevşehir</option>
                                        <option value="51">Niğde</option>
                                        <option value="52">Ordu</option>
                                        <option value="53">Rize</option>
                                        <option value="54">Sakarya</option>
                                        <option value="55">Samsun</option>
                                        <option value="56">Siirt</option>
                                        <option value="57">Sinop</option>
                                        <option value="58">Sivas</option>
                                        <option value="59">Tekirdağ</option>
                                        <option value="60">Tokat</option>
                                        <option value="61">Trabzon</option>
                                        <option value="62">Tunceli</option>
                                        <option value="63">Şanlıurfa</option>
                                        <option value="64">Uşak</option>
                                        <option value="65">Van</option>
                                        <option value="66">Yozgat</option>
                                        <option value="67">Zonguldak</option>
                                        <option value="68">Aksaray</option>
                                        <option value="69">Bayburt</option>
                                        <option value="70">Karaman</option>
                                        <option value="71">Kırıkkale</option>
                                        <option value="72">Batman</option>
                                        <option value="73">Şırnak</option>
                                        <option value="74">Bartın</option>
                                        <option value="75">Ardahan</option>
                                        <option value="76">Iğdır</option>
                                        <option value="77">Yalova</option>
                                        <option value="78">Karabük</option>
                                        <option value="79">Kilis</option>
                                        <option value="80">Osmaniye</option>
                                        <option value="81">Düzce</option>
                                    </select>
                                </div>
                                <div className="col-span-12 sm:col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Konum
                                    </label>
                                    <input
                                        type="text"
                                        name="konum"
                                        value={values.konum} onChange={handleChange} onBlur={handleBlur}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                                    />
                                </div>
                                <div className="col-span-12 sm:col-span-12">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Konum Adres
                                    </label>
                                    <input
                                        type="text"
                                        name="konumAdres"
                                        value={values.konumAdres} onChange={handleChange} onBlur={handleBlur}
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

export default TesisNew