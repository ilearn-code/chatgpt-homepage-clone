import React from 'react';
import './NavLink.css';
import { BsLayoutSidebar ,BsThreeDots } from "react-icons/bs";

import { AiOutlinePlus , AiOutlineUser } from "react-icons/ai";
const ChatMessage = () => {
  return (
    <>
    <nav>
     
        <div id='newChat-container'> 
        <a id='newChat-link'> <div id='newChat-div'>  <AiOutlinePlus/> New Chat    </div> </a> <a id='sideBarIcon'> <BsLayoutSidebar /> </a> 

        </div>
       
   
    <div id='history'>
    
    
    
    
    </div>






   <div id='profile'>


    <div className='profile-item item2'>
      
    <div id='userProlile-item'>
    <AiOutlineUser/>
<span >Upgrade to Plus?</span>

</div>

<span id='new'>New</span>
      </div>
    
    <div className='profile-item item2'>

    <div id='userProlile-item'>

      <img src='https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtfi1eLJ_3mUPeVINAHSttHSksroZifd4CGVsmUZ7Ouw%3Ds96-c&w=32&q=75'></img>
      <span>Satyam Yadav</span>

    </div>


    <BsThreeDots/>

    </div>
   </div>

    </nav>
    
    
    </>
  );
};

export default ChatMessage;
