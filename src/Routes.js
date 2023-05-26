import React from 'react'
import { Route } from "react-router-dom";
import App from './App';
import Packages from './components/Packages_page/Packages';


const Routes = () => {
  return (
    <div>

    <Route path="/" element={<App />} />
     <Route path="/Packages" element={<Packages />} />


    </div>
  )
}

export default Routes

