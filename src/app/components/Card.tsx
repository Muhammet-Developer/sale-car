'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import card from '@/styles/card.module.scss'
import { useWindowSize } from 'usehooks-ts';
import { useSelector } from 'react-redux';
import { SET_ALL_CAR_DATA, addCarSelector } from '../store/addCar';
import { useAppDispatch } from '../store';
const Card = ({ item }: { item: addCarDataType }) => {
  const { id, name, date, image, urgent, count } = item;
  const { width } = useWindowSize();
  const [showButton, setShowButton] = useState(false);
  const { allCarData } = useSelector(addCarSelector);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    if (item) {
      const updatedArray = allCarData?.filter((elem) => elem.id !== id);
      dispatch(SET_ALL_CAR_DATA(updatedArray))
    }
  }
  return (
    <div className={card['card-container']} onMouseOver={() => { width > 1024 && setShowButton(true); }} onMouseLeave={() => { width > 1024 && setShowButton(false); }}>
      <img src={!image ? image : '/noImage.png'} width={350} height={250} alt={name} />
      <div className={card['favorite-heart']}>
        <Image src='/favorite-heart.svg' width={20} height={25} alt='defaultCar' />
      </div>
      {showButton ?
        <div className={card.delete}>
          <Image src='/delete.svg' width={20} height={25} alt='defaultCar' onClick={() => handleDelete(id)} />
        </div>
        : ''}

      {urgent ?
        <div className={card.urgent} >
          <Image src='/fire.svg' width={15} height={15} alt='defaultCar' />
          <span>Acil</span>
        </div>
        : ''}

      <div className={card['car-information']}>
        <p>{name}</p>
        <div>
          <Image src='favorite.svg' width={15} height={15} alt='favorite' />
          Toplam Favori Sayısı:<span> 6</span>
        </div>
        <div>
          <Image src='calendar.svg' width={15} height={15} alt='favorite' />
          Son Güncellenme: <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
