import { useState } from "react"


export const useForm = (initilaValue) => {
    const[recruit,setRecruit]=useState(initilaValue);

    const onChangeRecruit =({target})=>{
        const {value} = target;
        setRecruit(value)
    };

  return{
    recruit,
    onChangeRecruit
  }
};
