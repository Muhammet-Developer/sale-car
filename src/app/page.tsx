'use client'
import home from '@/styles/home.module.scss'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import { SET_ALL_CAR_DATA, addCarSelector } from './store/addCar';
import { useAppDispatch } from './store';
import CardSkeleton from './components/CardSkeleton';
export default function Home() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { allCarData } = useSelector(addCarSelector);
  const dispatch = useAppDispatch()

  const fetchCarData = async () => {
    try {
      setIsLoading(true);
      const data = await allCarData;
      dispatch(SET_ALL_CAR_DATA(data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  const filtered = async (count?: boolean) => {
    if (count) {
      try {
        setIsLoading(true);
        const countUpdateData = [...allCarData].sort((a, b) => {
          if (b.count === a.count) {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          }
          return b.count - a.count
        });
        dispatch(SET_ALL_CAR_DATA(countUpdateData))
        setFilterOpen(false)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const lastUpdateData = [...allCarData].sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        })
        dispatch(SET_ALL_CAR_DATA(lastUpdateData))
        setFilterOpen(false)

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className={home['container']}>
      <div className={home['center-div']}>
        <div>
          <p>
            <span>
              ANA SAYFA
            </span>  VİTRİNİ
          </p>
          <div className={home.setting}>
            <Image onClick={() => { setFilterOpen(!filterOpen) }} src='setting.svg' style={{ cursor: 'pointer' }} width={30} height={30} alt='setting-saleCar' />
            {filterOpen ?
              <div className={home.filter}>
                <div onClick={() => filtered()}>Sırala(Son Eklenen)</div>
                <div onClick={() => filtered(true)}>Sırala(Favori Sayısı)</div>
              </div>
              : ''}
          </div>
        </div>
        <div className={home['line']}></div>
        <br />

        <div className={home['card-container']}>
          {allCarData.length ? (
            allCarData.map((item) => (
              isLoading ? <CardSkeleton /> : <Card item={item} />
            ))
          ) : (
            <p>İlan Bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}
