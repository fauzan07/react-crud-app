import React, {useContext} from 'react';
import {NavLink , withRouter } from "react-router-dom";
import $ from "jquery";
import fire from '../../config/Fire';
import { AuthContext } from '../../context/Auth';
import './Sidebar.css';
import Usericon from './userimg.png';

const Sidebar=()=> {
  const { currentUser } = useContext(AuthContext);
  const tooglesidebar=()=>
  {
    $('#sidebar').toggleClass('active');
  }

  return (
  
      <>
        {currentUser ? (
		    <nav id="sidebar">
				<div className="custom-menu">
					<button type="button" id="sidebarCollapse" onClick={tooglesidebar} className="btn btn-primary d-md-none d-sm-block"></button>
        </div>
	  		<div className="img bg-wrap text-center py-4">
	  			<div className="user-logo">
          <div className="text-center Usericon mb-3">
            <img src={Usericon} width="140" alt="icon"/>
          </div>
            <h1 className="text-center">{currentUser.email}</h1>
	  			</div>
	  		</div>
       
        <ul className="list-unstyled components mb-5">
          <li>
            <NavLink exact to="/" className="bg-dark"><span className="fa fa-home mr-3"></span>Home</NavLink>
          </li>
          <li>
          <NavLink to="./Post" className="bg-dark"><span className="fa fa-pencil mr-3"></span>Posts</NavLink>
          </li>
          <li>
           <a className="bg-dark" onClick={()=>fire.auth().signOut()}><span className="fa fa-sign-out mr-3"></span> Sign Out</a>
          </li>
        </ul>
      </nav>
      ) : (
      <div></div>
       
      )}
      </>
  );
  
}


export default withRouter(Sidebar);
