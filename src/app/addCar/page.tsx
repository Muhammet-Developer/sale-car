'use client'
import React, { useRef, useState } from 'react'
import addCar from '@/styles/addCar.module.scss'
import { useAppDispatch } from '../store'
import { SET_ALL_CAR_DATA, addCarSelector } from '../store/addCar'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter, } from 'next/navigation';

const page = () => {

  const dispatch = useAppDispatch();
  const { allCarData } = useSelector(addCarSelector);
  const { push } = useRouter();

  const [formData, setFormData] = useState<addCarDataType>({
    id: 0,
    name: '',
    image: '',
    urgent: false,
    date: '',
    count: 0
  })
  const inputFile = useRef<HTMLInputElement>(null);

  // The function to which the data is sent
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // The information received from the user waiting for the formData data in SET_ALL_CAR_DATA is sent to SET_ALL_CAR_DATA. When sending, the last data sent is set to be displayed first.
    try {
      dispatch(SET_ALL_CAR_DATA([...allCarData, {
        id: allCarData.length + 1,
        name: formData.name,
        image: formData.image,
        urgent: formData.urgent,
        // convert date value to string
        date: new Date().toISOString(),
        count: 0
      }].reverse()))
      toast.success('İlan Başarıyla Kaydedilmiştir. Ana Sayfaya Yönlendiriliyorsunuz');
      setTimeout(() => {
        push('/');
      }, 5000);
      // Form input file reset
      if (inputFile.current) {
        inputFile.current.value = '';
      }
      // Form reset
      setFormData({
        id: allCarData.length + 2,
        name: '',
        image: '',
        urgent: false,
        date: '',
        count: 0
      });
    } catch (error) {
      toast.error('Bir Şeyler Ters Gitti')
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Contains the image that the user selects from the computer
    const file = e.target.files?.[0];
    // if the file exists 
    if (file) {
      // is used to read data from a file.
      const reader = new FileReader();

      // Runs when the FileReader object completes the operation. I assign the result value to the image part inside the FormData
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
      };

      // The readAsDataURL method reads the file by converting it to a Base64 data URL. This allows us to use the image within the <img> tag later.
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={addCar['container']}>
      <div className={addCar['center-div']}>
        <div >
          <p>
            <span>
              YENİ İLAN
            </span>  EKLE
          </p>
        </div>
        <div className={addCar['line']}></div>
        <form onSubmit={handleSubmit}>
          <div className={addCar['form-container']}>
            <div>
              <label htmlFor="name">İlan Başlığı *</label>
              <input required type="text" id='name' value={formData.name} onChange={(e: any) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="image">İlan Kapak Görseli</label>
              <input type="file" ref={inputFile} accept="image/*" id='image' onChange={handleImageChange} />
            </div>
            <div>
              <label htmlFor="name">Acil mi?</label>
              <input type="checkbox" checked={formData.urgent} onChange={(e: any) => setFormData({ ...formData, urgent: e.target.checked })} />
            </div>
            <div>
              <button>Kaydet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
