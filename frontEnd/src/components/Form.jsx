import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
import { Card } from './Card'
import { Recruit } from './Recruit'
import './styles/form.css'

export const Form = () => {
    const [urlRecruit,setUrlRecruit]= useState("rick")
    const {recruit,onChangeRecruit}= useForm("");
    const {data,isLoading,hasError} =useFetch(`https://9d74-2806-2a0-a26-8530-d96d-3688-6b09-2715.ngrok.io/scraper/veronica-mata-ramirez-b7807b124`);


    const onGetRcruit =()=>{
        setUrlRecruit(recruit)
    }
    
  return (
    <>
        <form className='d-flex form_recruit'>
        <input 
        className='form-control'
        type="text" 
        name='recruit'
        value={recruit}
        onChange={onChangeRecruit}
        />
        <input 
        type="submit" 
        className='btn btn-primary'
        value='obtener'
        onClick={(e)=>{
            e.preventDefault()
            onGetRcruit()
        }}/>
    </form>
    <div className='d-flex justify-content-center'>
        {
            (isLoading===false)&&<Recruit img={data['name']} recruit={data["occupation"]}/>
        }
    </div>
    </>

  )
}
