import React from 'react';
import './brand.css';
import { slack, atlassian, google, shopify, dropbox } from './import';


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={google} alt="" />
      </div> <div>
        <img src={shopify} alt="" />
      </div> <div>
        <img src={dropbox} alt="" />
      </div>
    </div>
  )
}

export default Brand