import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHeader from './Components/AdminHeader';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AdmPrd from './Components/page/AdmPrd';
import Info_pri from './Components/page/info/Info_pri';
import Info_user from './Components/page/info/Info_user';
import Join_step1 from './Components/page/Join_step1';
import Join_step2 from './Components/page/Join_step2';
import Join_step3 from './Components/page/Join_step3';
import Login from './Components/page/Login';
import Logout from './Components/page/Logout';
import Main from './Components/page/Main';

export const siteName:string= "logo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Main/><Footer/></>}/>
        <Route path='/join/1' element={<><Header/><Join_step1/><Footer/></>}/>
        <Route path='/join/2' element={<><Header/><Join_step2/><Footer/></>}/>
        <Route path='/join/3' element={<><Header/><Join_step3/><Footer/></>}/>
        <Route path='/login' element={<><Header/><Login/><Footer/></>}/>
        <Route path='/logout' element={<Logout/>}/>

        <Route path='/admin' element={<AdminHeader/>}/>
        <Route path='/admin/product' element={<><AdminHeader/><AdmPrd/></>}/>

        <Route path='/info/user' element={<Info_user/>}/>
        <Route path='/info/pri' element={<Info_pri/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
