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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(SET_ALL_CAR_DATA([...allCarData, {
      id: allCarData.length + 1,
      name: formData.name,
      image: formData.image,
      urgent: formData.urgent,
      date: new Date(),
      count: 0
    }].reverse()))
    toast.success('İlan Başarıyla Kaydedilmiştir. Ana Sayfaya Yönlendiriliyorsunuz');
    setTimeout(() => {
      push('/');
    }, 5000);

    if (inputFile.current) {
      inputFile.current.value = '';
    }
    setFormData({
      id: allCarData.length + 2,
      name: '',
      image: '',
      urgent: false,
      date: '',
      count: 0
    });
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
      };

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
