import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import HomeContent from './HomeContent';
import SaleBoard from './NavPages/SaleBoard';
import NewBornBoard from './NavPages/NewBornBoard';
import SaleDeals from './NavPages/SaleDeals';
import NewBornList from './NavPages/NewBornList';
import ClothingBoard from './NavPages/ClothingBoard';
import ClothingList from './NavPages/ClothingList';
import ThottilBoard from './NavPages/ThottilBoard';
import ThottilList from './NavPages/ThottilList';
import NewbornEssential from './NavPages/NewbornEssential';
import NewbornHospital from './NavPages/NewbornHospital';
import About from './FooterPages/About';
import PrivacyPolicy from './FooterPages/PrivacyPolicy';
import ReturnPolicy from './FooterPages/ReturnPolicy';
import UsageTerms from './FooterPages/UsageTerms';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <>
      <Router>
        <Routes>          
          <Route path='/' element={<Home/>}>
            <Route index element={<HomeContent/>}/>  
            <Route path='/sale' element={<SaleBoard/>}>
              <Route index element={<SaleDeals/>}/>
            </Route> 
            <Route path='/newborn' element={<NewBornBoard/>}>
              <Route index element={<NewBornList/>}/>
              <Route path='/newborn/newbornEssential' element={<NewbornEssential/>}/>
              <Route path='/newborn/newbornHospital' element={<NewbornHospital/>}/>
            </Route> 
            <Route path='/clothing' element={<ClothingBoard/>}>
              <Route index element={<ClothingList/>}/>
            </Route>
            <Route path='/thottil' element={<ThottilBoard/>}>
              <Route index element={<ThottilList/>}/>
            </Route>  
            <Route path='about' element={<About/>}/>    
            <Route path='privacyPolicy' element={<PrivacyPolicy/>}/>    
            <Route path='returnPolicy' element={<ReturnPolicy/>}/>    
            <Route path='usageTerms' element={<UsageTerms/>}/>       
            <Route path='login' element={<RegisterForm/>}/>
          </Route>          
        </Routes>      
      </Router>      
    </>    
  );
}

export default App;
