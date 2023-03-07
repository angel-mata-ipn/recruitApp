import React from 'react'
import { Accordion } from './Accordion'
import { Card } from './Card'
import './styles/recruit.css'

export const Recruit = ({img,resumen,caracteriaticas,recruit}) => {
  return (
    <div className='row'>
        <div className='col-md-12 col-lg-5  d-flex justify-content-center'>
            <Card img={img} name={recruit} />
        </div>
        <div className='col-md-12 col-lg-7'>
            <Accordion/>
        </div>
    </div>
  )
}
