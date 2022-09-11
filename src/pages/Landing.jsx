import React from "react";
import Header from '../components/Header';
import cta1 from '../assets/images/cta-logo-one.svg';
import cta2 from '../assets/images/cta-logo-two.png';
import {useNavigate} from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#040714] h-[100vh]">
      <Header />
      <div className="h-[90vh] bg-[url('src/assets/images/login-background.jpg')] bg-cover bg-no-repeat grid place-items-center">
        <div className="w-[40%]">
            <div className="w-[90%] mx-auto"><img src={cta1}/></div>
            <div className="bg-[#0063e5] text-white text-center py-[10px] uppercase font-bold my-[10px] cursor-pointer" onClick={()=> navigate('/home')}>get all there</div>
            <p className="text-white text-xs text-center mb-[15px]">Get Premier Access to Raye and the Last Dragon for an additional fee with a Disney + subscription.<br />As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
            <div className="w-[80%] mx-auto"><img src={cta2}/></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
