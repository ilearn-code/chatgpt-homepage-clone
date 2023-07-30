import React, { Component } from 'react'
import './Main.css'
import { AiOutlineSend , AiFillWarning } from "react-icons/ai";
import { BsSun} from "react-icons/bs";
import { GiElectric} from "react-icons/gi";
export class Main extends Component {
  render() {
    return (
      <main>


        <div id='Banner-top'>


<div id='Premium'>

</div>


<div id='Header'>
<header>
  <h1>
  ChatGPT
  </h1>


</header>
<article>
  
<div id='features'>
<div className='item-features'>
<BsSun style={{ fontSize: '1.5em' }}/>
<h3>
  Examples
</h3>
</div>
<div className='item-features'>
<GiElectric style={{ fontSize: '1.5em' }}/>
<h3>
  Capabilities
</h3>
</div>
<div className='item-features'>
<AiFillWarning style={{ fontSize: '1.5em' }}/>
<h3>
  Limitations
</h3>
</div>
</div>

<div className='Searches'>
  <div className='Searches-container'>

  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  <div className='item-Searches'>
  Got any creative ideas for a 10 year old’s birthday?
  </div>
  <div className='item-Searches'>
  How do I make an HTTP request in Javascript? 
  </div>
  <div className='item-Searches'>
  How do I make an HTTP request in Javascript? 
  </div>
  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  <span className='item-Searches'>
  How do I make an HTTP request in Javascript?
  </span>
  </div>

</div>
</article>

</div>


        </div>

        <div id='Search-Input'>
          <div id='form-container'>
<form>
<input type='text'/>
<button type='submit'><AiOutlineSend style={{ fontSize: '24px' }}/></button>
</form>
      </div>    
        
        </div>
      </main>
    )
  }
}

export default Main