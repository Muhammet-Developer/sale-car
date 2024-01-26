import Image from 'next/image'
import React from 'react'
import card from '@/styles/card.module.scss'
const Card = () => {
  return (
    <div className={card['card-container']}>
      <Image src='/defaultCar.jpg' width={350} height={250} alt='defaultCar' />
      <div className={card['favorite-heart']}>
        <Image src='/favorite-heart.svg' width={20} height={25} alt='defaultCar' />
      </div>
      <div className={card.delete}>
        <Image src='/delete.svg' width={20} height={25} alt='defaultCar' />
      </div>

      <div className={card.urgent}>
        <Image src='/fire.svg' width={15} height={15} alt='defaultCar' />
        <span>Acil</span>
      </div>

      <div>
        <p>Peguate 3008 Model</p>
        <div>
          <Image src='favorite.svg' width={15} height={15} alt='favorite' />
          Toplam Favori Sayısı:<span> 6</span>
        </div>
        <div>
          <Image src='calendar.svg' width={15} height={15} alt='favorite' />
          Son Güncellenme: <span>2023.08.23 13:34</span>
        </div>
      </div>
    </div>
  )
}

export default Card
