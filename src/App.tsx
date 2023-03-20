import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AdmPrd from './Components/page/Adm/AdmPrd';
import Info_pri from './Components/page/info/Info_pri';
import Info_user from './Components/page/info/Info_user';
import Join_step1 from './Components/page/Join_step1';
import Join_step2 from './Components/page/Join_step2';
import Join_step3 from './Components/page/Join_step3';
import Login from './Components/page/Login';
import Logout from './Components/page/Logout';
import Main from './Components/page/Main';
import ProductList from './Components/page/ProductList';
import BestList from './Components/page/BestList';
import ProductItem from './Components/page/ProductItem';
import NewList from './Components/page/NewList';
import AdmMem from './Components/page/Adm/AdmMem';
import IdSearch_step1 from './Components/page/IdSearch_step1';
import PWSearch_step1 from './Components/page/PwSearch_step1';
import AdmBann from './Components/page/Adm/AdmBann';
import Cart from './Components/page/Cart';
import CartCredit from './Components/page/CartCredit';
import CartSuccess from './Components/page/CartSuccess';

export const siteName:string= "logo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Main/><Footer/></>}/>
        <Route path='/cart' element={<><Header/><Cart/><Footer/></>}/>
        <Route path='/cart/credit' element={<><Header/><CartCredit/><Footer/></>}/>
        <Route path='/cart/success' element={<><Header/><CartSuccess/><Footer/></>}/>

        <Route path='/product/best' element={<><Header/><BestList/><Footer/></>}/>
        <Route path='/product/new' element={<><Header/><NewList/><Footer/></>}/>
        <Route path='/product/cate1' element={<><Header/><ProductList cate={"아우터"}/><Footer/></>}/>
        <Route path='/product/cate2' element={<><Header/><ProductList cate={"상의"}/><Footer/></>}/>
        <Route path='/product/cate3' element={<><Header/><ProductList cate={"원피스"}/><Footer/></>}/>
        <Route path='/product/cate4' element={<><Header/><ProductList cate={"스커트"}/><Footer/></>}/>
        <Route path='/product/cate5' element={<><Header/><ProductList cate={"팬츠"}/><Footer/></>}/>
        <Route path='/product/cate6' element={<><Header/><ProductList cate={"가방"}/><Footer/></>}/>
        <Route path='/product/cate7' element={<><Header/><ProductList cate={"신발"}/><Footer/></>}/>
        <Route path='/product/cate8' element={<><Header/><ProductList cate={"악세사리"}/><Footer/></>}/>
        <Route path='/product/view/:no' element={<><Header/><ProductItem/><Footer/></>}/>

        <Route path='/join/1' element={<><Header/><Join_step1/><Footer/></>}/>
        <Route path='/join/2' element={<><Header/><Join_step2/><Footer/></>}/>
        <Route path='/join/3' element={<><Header/><Join_step3/><Footer/></>}/>
        <Route path='/login' element={<><Header/><Login/><Footer/></>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/idSearch' element={<><Header/><IdSearch_step1/><Footer/></>}/>
        <Route path='/pwSearch' element={<><Header/><PWSearch_step1/><Footer/></>}/>

        <Route path='/admin' element={<><AdminHeader/><AdminFooter/></>}/>
        <Route path='/admin/product' element={<><AdminHeader/><AdmPrd/><AdminFooter/></>}/>
        <Route path='/admin/member' element={<><AdminHeader/><AdmMem/><AdminFooter/></>}/>
        <Route path='/admin/banner' element={<><AdminHeader/><AdmBann/><AdminFooter/></>}/>

        <Route path='/info/user' element={<Info_user/>}/>
        <Route path='/info/pri' element={<Info_pri/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
