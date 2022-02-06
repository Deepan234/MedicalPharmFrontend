import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectMessage(props) {

  let navigate = useNavigate();

  if (props.redirect){
      if(props.message === "login"){
      navigate('/');
      }else{
          navigate('/login');
      }
  return (<div></div>);
  }
  else{
      return(
          <div></div>
      )
  }
}
