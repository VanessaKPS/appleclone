import React, {useState} from 'react';
import directoryItems from './DirectoryNav';
import './styles.css';
import {FiPlus} from 'react-icons/fi';

const Directory = () => {
  const [shop, services, account, store, business, education, health, values, about] = directoryItems;
  
  const [isShopClicked, setIsShopClicked] = useState(false);
  const [isServicesClicked, setIsServicesClicked] = useState(false);
  const [isAccountClicked, setIsAccountClicked] = useState(false);
  const [isStoreClicked, setIsStoreClicked] = useState(false);
  const [isBusinessClicked, setIsBusinessClicked] = useState(false);
  const [isEducationClicked, setIsEducationClicked] = useState(false);
  const [isHealthClicked, setIsHealthClicked] = useState(false);
  const [isValuesClicked, setIsValuesClicked] = useState(false);
  const [isAboutClicked, setIsAboutClicked] = useState(false);

  const isCondensed = false;
  
  const handleShopClick = () => {
    setIsShopClicked(!isShopClicked);
  }
  const handleServicesClick = () => {
   setIsServicesClicked(!isServicesClicked);
  }

  const handleAccountClick = () => { 
    setIsAccountClicked(!isAccountClicked);
  }

  const handleStoreClick = () => {
    setIsStoreClicked(!isStoreClicked);
  }

  const handleBusinessClick = () => {
    setIsBusinessClicked(!isBusinessClicked);
  }

  const handleEducationClick = () => {
    setIsEducationClicked(!isEducationClicked);
  }
  const handleHealthClick = () => {
    setIsHealthClicked(!isHealthClicked);
  }
  const handleValuesClick = () => {
    setIsValuesClicked(!isValuesClicked);
  }
  const handleAboutClick = () => {
    setIsAboutClicked(!isAboutClicked);
  }
 
  return (<div className='directory-wrapper'>
    <div className='directory-category-wrapper first-column'>
      <div className={isShopClicked? 'drop-down-menu': 'category-title'}>
        <h6>Shop and Learn</h6><FiPlus onClick={handleShopClick} className={isShopClicked? 'show-content-icon-active': 'show-content-icon'} />
      </div>
      
      {(isShopClicked === true || isCondensed ===false) && shop.map((item, index)=>{
      return (
      <div className={isShopClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
      
    </div>
    <div className='directory-category-wrapper second-column'>
      <div className={isServicesClicked? 'drop-down-menu': 'category-title'}>
        <h6>Services</h6><FiPlus onClick={handleServicesClick} className={isServicesClicked? 'show-content-icon-active': 'show-content-icon'} />
      </div>
      
      {(isServicesClicked=== true || isCondensed===false) && services.map((item, index)=>{
      return (      
      <div className={isServicesClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})} 
      
      
      <div className={isAccountClicked? 'drop-down-menu': 'category-title'}>
        <h6>Account</h6><FiPlus onClick={handleAccountClick} className={isAccountClicked? 'show-content-icon-active': 'show-content-icon'}/>
      </div>
      
      {(isAccountClicked=== true || isCondensed===false) && account.map((item, index)=>{
      return (      
      <div className={isAccountClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
     
    </div>
    <div className='directory-category-wrapper third-column'>
      <div className={isStoreClicked? 'drop-down-menu': 'category-title'}>
        <h6>Apple Store</h6><FiPlus onClick={handleStoreClick} className={isStoreClicked? 'show-content-icon-active': 'show-content-icon'}/>
      </div>
      
      {(isStoreClicked=== true || isCondensed===false) && store.map((item, index)=>{
      return (      
      <div className={isStoreClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
    
  </div>
    <div className='directory-category-wrapper fourth-column'>
      <div className={isBusinessClicked? 'drop-down-menu': 'category-title'}>
        <h6>For Business</h6> <FiPlus onClick={handleBusinessClick} className={isBusinessClicked? 'show-content-icon-active': 'show-content-icon'}/ >
      </div>
      
      {(isBusinessClicked=== true || isCondensed===false) && business.map((item, index)=>{
      return (
      <div className={isBusinessClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
      
      <div className={isEducationClicked? 'drop-down-menu': 'category-title'}>
        <h6>For Education</h6><FiPlus onClick={handleEducationClick} className={isEducationClicked? 'show-content-icon-active': 'show-content-icon'} />
      </div>
    
      {(isEducationClicked=== true || isCondensed===false) && education.map((item, index)=>{
      return (
      <div className={isEducationClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
      
      <div className={isHealthClicked? 'drop-down-menu': 'category-title'}>
        <h6>For Healthcare</h6><FiPlus onClick={handleHealthClick} className={isHealthClicked? 'show-content-icon-active': 'show-content-icon'} />
      </div>
      
      {(isHealthClicked=== true || isCondensed===false) && health.map((item, index)=>{
      return (
      <div className={isHealthClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
      
    </div>
    <div className='directory-category-wrapper fifth-column'>
      <div className={isValuesClicked? 'drop-down-menu': 'category-title'}>
        <h6>Apple Values</h6><FiPlus onClick={handleValuesClick} className={isValuesClicked? 'show-content-icon-active': 'show-content-icon'}/>
      </div>
      
      {(isValuesClicked=== true || isCondensed===false) && values.map((item, index)=>{
      return ( 
      <div className={isValuesClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
     
      <div className={isAboutClicked? 'drop-down-menu': 'category-title'}>
        <h6>About Apple</h6>      <FiPlus onClick={handleAboutClick} className={isAboutClicked? 'show-content-icon-active': 'show-content-icon'} />
      </div>

      {(isAboutClicked=== true || isCondensed===false) && about.map((item, index)=>{
      return ( 
      <div className={isAboutClicked?  'category-content': 'hide-content'}>
        <a key ={item} href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
      </div>
      )})}
      
    </div> 
</div>)
}
export default Directory;