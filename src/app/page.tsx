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

  // The part where all vehicles are fetched
  const fetchCarData = async () => {
    // The reason for this is that I did the fetch operation as if we had an api. Because in order to build the isLoading structure and show the skeleton
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

  // recently added and favorite count sorting function
  const sorting = async (count?: boolean) => {
    // sorting by number of favourites
    if (count) {
      try {
        setIsLoading(true);
        const countUpdateData = [...allCarData].sort((a, b) => {
          // If count values are the same, bring the newest one forward according to dates
          if (b.count === a.count) {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          }
          // If the count values are not the same, sorting from the largest value to the smallest
          return b.count - a.count
        });
        // set countUpdateData to SET_ALL_CAR_DATA
        dispatch(SET_ALL_CAR_DATA(countUpdateData))
        setFilterOpen(false)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    // ranking according to last added
    else {
      try {
        setIsLoading(true);
        // If count values are the same, bring the newest one forward according to dates
        const lastUpdateData = [...allCarData].sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        })
        // set lastUpdateData to SET_ALL_CAR_DATA
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
                <div onClick={() => sorting()}>Sırala(Son Eklenen)</div>
                <div onClick={() => sorting(true)}>Sırala(Favori Sayısı)</div>
              </div>
              : ''}
          </div>
        </div>
        <div className={home['line']}></div>
        <br />

        <div className={home['card-container']}>
          {/* The section with all the tools and the data printed on the screen.  */}
          {allCarData.length ? (
            allCarData.map((item) => (
              isLoading ? <CardSkeleton /> : <Card item={item} />
            ))
          ) : (
            <div className={home['no-found']}>
              <p>İlan Bulunamadı.</p>
              <div>
                <button>İlan ekle</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
