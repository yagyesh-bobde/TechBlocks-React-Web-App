import React from 'react'
import { pages } from '../../assets/data/pages'


import '../css/Services.css'
import CardItem from '../Services/CardItem'
import ContactUs from '../Services/ContactUs'

const Services = () => {

  return (
    <div className='bg-white services_parent'>
      <div className="row services_cards" style={{ margin: '0 0' , padding: '2.5% 5%'}}>
        {pages.map(page => {
          return (
            <div className="col-md-4 col-sm-12 d-flex align-items-stretch" >
          <CardItem page={page} />
        </div>
          )
        })}
      </div>
      <div className="row" style={{ padding: '5%'}}>
        <ContactUs />
      </div>
    </div>
  )
}

export default Services;