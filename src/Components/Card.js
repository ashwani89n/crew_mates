import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'




const Card = (props) =>  {
  const cardLink = `/explore/${props.id}`;
  return (
    <>
      <div className="Card">
       <Link to={cardLink} className="cardLink">
          <div className="fistLine" ><div className='inlineTextLbl'>{props.fullName} ({props.empId})</div></div>     
          <div className='inlineTextTxt'>{props.dept}</div>
          <div className='inlineTextTxt'>{props.role}</div>
          <div className='inlineTextTxt'></div>
          <div className='inlineTextTxt'>{props.email}</div>
          </Link>
          <div ><Link to={'edit/'+ props.id}><button className="buttonClass" >Edit</button></Link></div>
      </div>
      </>  );
};

export default Card;