import React from 'react'
import addCar from '@/styles/addCar.module.scss'
const page = () => {
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
        <form>
          <div className={addCar['form-container']}>
            <div>
              <label htmlFor="name">İlan Başlığı</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="name">İlan Kapak Görseli</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="name">Acil mi?</label>
              <input type="checkbox" />
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
