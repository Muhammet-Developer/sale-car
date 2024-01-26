'use client'
import home from '@/styles/home.module.scss'
import Image from 'next/image';
import { useState } from 'react';
import Card from './components/Card';
export default function Home() {
  const [filterOpen, setFilterOpen] = useState(false)
  return (
    <div className={home['container']}>
      <div className={home['center-div']}>
        <div >
          <p>
            <span>
              ANA SAYFA
            </span>  VİTRİNİ
          </p>
          <div className={home.setting}>
            <Image onClick={() => { setFilterOpen(!filterOpen) }} src='setting.svg' style={{ cursor: 'pointer' }} width={30} height={30} alt='setting-saleCar' />
            {filterOpen ?
              <div className={home.filter}>
                {/* bir filtere tıklandığında  filterOpen kapat*/}
                <div>Sırala(Son Eklenen)</div>
                <div>Sırala(Favori Sayısı)</div>
              </div>
              : ''}
          </div>
        </div>
        <div className={home['line']}></div>
        <br />
        <div >
            <Card />
        </div>
      </div>
    </div>
  );
}
