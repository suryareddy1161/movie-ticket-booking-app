import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { thunkGet } from '../../Redux/Thunk'
import MovieList from './MovieList'



const Second = () => {
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(  thunkGet())
      

    },[])
  return (
    <>
        <MovieList/>
    </>
  )
}

export default Second