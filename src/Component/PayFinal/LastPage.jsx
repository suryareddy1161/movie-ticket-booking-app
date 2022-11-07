import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { paidSeat } from '../../Redux/movieSlice'
import Timer from '../Timer/Timer'


const LastPage = () => {
    const select = useSelector(state => state.movieSlicer.booked)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let sum = 0
    let totalPrice = ()=>{
        
        for(let i = 0 ; i < select.length ; i++){
            sum = sum + select[i].price
        }
    }

    totalPrice()

    const payHandler = ()=>{
        dispatch(paidSeat())
        navigate('/product')
        alert(`u have successfully booked ${select.length} seats.`)
    }
  return (
      <div className='container'>
          <Timer/>

          
              <span>number of seats : {select.length}</span>
              
          
              <span>total price: {sum}</span>
              <div className="container">
                <button className="btn btn-success" onClick={payHandler}>pay</button>

              </div>


          



          
      </div>
  )
}

export default LastPage;