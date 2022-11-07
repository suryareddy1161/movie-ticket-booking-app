import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSeat,remove } from '../../Redux/movieSlice'
import "../lostyle.css"



const Seats = ({ ele,i}) => {
    const dispatch = useDispatch();
    const select = useSelector(state => state.movieSlicer.paid);

    const [state, setstate] = useState(false)
    const clickHandler = (x) =>{
        
        if(state === false){
            setstate(true)
            console.log(x)
            dispatch(addSeat(x))
            
            
        }else{
            setstate(false);
            console.log(x)
            dispatch(remove(x))          
        }

    }


    const x = function(){
      if(select.includes(ele)){
        return <button className="btn btn-success">b</button>
        
      }else{
        return select.includes(ele) || state ? <button className='btn btn-warning' onClick={()=>clickHandler(ele)}>{ele.class}</button> : <button className='btn btn-secondary' onClick={()=>clickHandler(ele)}>{ele.class}</button> 
      }

    }

    const buttonAsPerRequirement = x()




    
  return (
      <>
        <span className="seat">  {
          buttonAsPerRequirement
        }
        </span>
      </>
    
  )
}

export default Seats;