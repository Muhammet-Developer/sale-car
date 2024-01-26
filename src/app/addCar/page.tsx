'use client'
import React, { useRef, useState } from 'react'
import addCar from '@/styles/addCar.module.scss'
import { useAppDispatch } from '../store'
import { ADD_CAR, SET_ALL_CAR_DATA, addCarSelector } from '../store/addCar'
import { useSelector } from 'react-redux'
const page = () => {
  const date = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}.${month}.${day} ${hour}:${minute}`
  }
  const dispatch = useAppDispatch();
  const { allCarData } = useSelector(addCarSelector);
  console.log(allCarData.length)
  const [formData, setFormData] = useState<addCarDataType>({
    id:  0,
    name: '',
    image: '',
    urgent: false,
    date: '',
  })
  const inputFile = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(SET_ALL_CAR_DATA([...allCarData, {
      id:allCarData.length + 1,
      name: formData.name,
      image: formData.image,
      urgent: formData.urgent,
      date: date(),
    }]))

    if (inputFile.current) {
      inputFile.current.value = '';
    }
    setFormData({
      id:  allCarData.length + 2,
      name: '',
      image: '',
      urgent: false,
      date: date(),
    });
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (e.target.files && file) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) })
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
