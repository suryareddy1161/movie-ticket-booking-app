
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Second from './Component/second/Second';
import BookSeat from './Component/BookSeat/BookSeat';
import LastPage from './Component/PayFinal/LastPage';
import Form from './Component/First/Form';


const App=()=> {
  return (
   <>
   <Router>
     <Routes>
       <Route path='/' element={ <Form/>}></Route>
       <Route path='/product' element={<Second/>}></Route>
       <Route path='/bookseat' element={<BookSeat/>}></Route>
       <Route path='/lastpage' element={<LastPage/>}></Route>
     </Routes>
   </Router>
   </>
  )
}

export default App;
