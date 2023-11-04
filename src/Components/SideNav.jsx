import React from 'react';
import { Link } from "react-router-dom";

const SideNav = () => (
  <div className="sidenav">
    <div >
        <button className='tabs'><Link to="/" className='linkInBlack'>🏡 Home</Link></button>
        <button className='tabs'><Link to="/new" className='linkInBlack'>🤝 Join Team</Link></button>
        <button className='tabs'><Link to="/explore" className='linkInBlack'>🔍 Explore Team</Link></button>
    </div>
  </div>
);

export default SideNav;