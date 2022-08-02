import './Explore.css';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ToTop from './totop';
import data from '../../data/products';

export default function Explore() {

  const [filter, setFilter] = useState(false);

  const productCards = data.map(item => <ProductCard key={data.id} {...item}/>);

  // const productCads = data.filter( item => {
  //   // if(data.category === )
  //   return (<ProductCard key={data.id} {...item}/>);
  // });

  const clearAll = () => {
    setFilter(false);
  }

  return (
    <div className="explore">
      <div className="explore--left">
        <span>Filters</span>
        <div className='filters'>
          <span className='filter--title'>Size</span>
          <div className='size--div'>
            <input type='checkbox' checked={filter} onChange={()=> setFilter(p => !p)} className='size--box' cbname='S' id='size--s'/>
            <input type='checkbox' className='size--box' cbname='M' id='size--m'/>
            <input type='checkbox' className='size--box' cbname='L' id='size--l'/>
            <input type='checkbox' className='size--box' cbname='XL' id='size--xl'/>
            <input type='checkbox' className='size--box' cbname='XXL' id='size--xxl'/>
          </div>
          <span className='filter--title'>Color</span>
          <div className='color--div'>
            <input type='checkbox' className='color--box' cbname='' id='c-mustard'/>
            <input type='checkbox' className='color--box' cbname='' id='c-onion'/>
            <input type='checkbox' className='color--box' cbname='' id='c-green'/>
            <input type='checkbox' className='color--box' cbname='' id='c-navy'/>
            <input type='checkbox' className='color--box' cbname='' id='c-grey'/>
            <input type='checkbox' className='color--box' cbname='' id='c-white'/>
            <input type='checkbox' className='color--box' cbname='' id='c-black'/>
          </div>
          <span className='filter--title'>Category</span>  
          <div className='cat--div'>
            <input type='checkbox' classname='cat--box' cbname='Anime' id='anime-box'/>
            <input type='checkbox' classname='cat--box' cbname='Custom' id='custom-box'/>
            <input type='checkbox' classname='cat--box' cbname='Typography' id='typo-box'/>
            <input type='checkbox' classname='cat--box' cbname='Solid Colors' id='solid-box'/>
          </div>
        </div>
        <span className='clear--all' onClick={clearAll}>Clear all</span>
      </div>
      <div className='explore--right'>
        {productCards}
      </div>
      <ToTop/>
    </div>
  );
}


