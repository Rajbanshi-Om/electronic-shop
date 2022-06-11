import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';
import LayoutComponent from './Components/Layout';
import { useEffect } from 'react';
import { allValue } from './Redux/Features/HomePage/HomePageSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getData() {
     await  axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
      .then((result) => {
        dispatch(allValue(result?.data?.data?.product))
      })
       .catch((err) => {
        console.log("error" ,err)
      })
    }
    getData()
    return () => {
      dispatch(allValue())
    }
  }, [])
  
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path='/' element={<HomePage/>  }></Route>
        <Route path='/checkout' element={<CheckoutPage/>  }></Route>
      </Route>
   </Routes>
  );
}

export default App;
