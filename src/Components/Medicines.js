import React from 'react'
import medicineData from '../medicine.json'
import Medicine from './Medicine'
export default function Medicines() {
  document.title = 'Health Sense - Medicines';
  console.log(medicineData.medicine)
  return (
    <div className='container'>
      <h3 style={{ textAlign: 'center', margin: '5vh' }}>Medicines</h3>
      <div className="row my-3">
        {medicineData.medicine.map((element, index) => {
          return <div className="col-md-4" key={index}>
            <Medicine name = {element.name} desc = {element.usage} price = {element.price} image = {element.image}/>
          </div>
        })}
      </div>
    </div>
  )
}
