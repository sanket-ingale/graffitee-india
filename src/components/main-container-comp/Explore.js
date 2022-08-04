import './Explore.css';
import React, { useState, useReducer } from 'react';
import ProductCard from './ProductCard';
import ToTop from './totop';
import data from '../../data/products';

export default function Explore() {

  const reducer = (state, action) => {
    switch(action.id) {
      case "size-s":
        return {...state, size: {...state.size, s: !state.size.s}}
      case "size-m":
        return {...state, size: {...state.size, m: !state.size.m}}
      case "size-l":
        return {...state, size: {...state.size, l: !state.size.l}}
      case "size-xl":
        return {...state, size: {...state.size, xl: !state.size.xl}}
      case "size-xxl":
        return {...state, size: {...state.size, xxl: !state.size.xxl}}
      case "c-mustard":
        return {...state, color: {...state.color, mustard: !state.color.mustard}}
      case "c-onion":
        return {...state, color: {...state.color, onion: !state.color.onion}}
      case "c-green":
        return {...state, color: {...state.color, green: !state.color.green}}
      case "c-navy":
        return {...state, color: {...state.color, navy: !state.color.navy}}
      case "c-grey":
        return {...state, color: {...state.color, grey: !state.color.grey}}
      case "c-white":
        return {...state, color: {...state.color, white: !state.color.white}}
      case "c-black":
        return {...state, color: {...state.color, black: !state.color.black}}
      case "anime-box":
        return {...state, category: {...state.category, anime: !state.category.anime}}
      case "custom-box":
        return {...state, category: {...state.category, custom: !state.category.custom}}
      case "typo-box":
        return {...state, category: {...state.category, typo: !state.category.typo}}
      case "solid-box":
        return {...state, category: {...state.category, solid: !state.category.solid}}
      case "clear-all":
        return {
          size: {
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: false
          },
          color: {
            mustard: false,
            onion: false,
            green: false,
            navy: false,
            grey: false,
            white: false,
            black: false
          },
          category: {
            anime: false,
            custom: false,
            typo: false,
            solid: false,
          }
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    size: {
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false
    },
    color: {
      mustard: false,
      onion: false,
      green: false,
      navy: false,
      grey: false,
      white: false,
      black: false
    },
    category: {
      anime: false,
      custom: false,
      typo: false,
      solid: false,
    }
  });

  const checkFilter = (item) => {
    return state.size.s === item.size.includes('S');
  }
  
  const productCads = data.filter(checkFilter);
  
  const productCards = productCads.map(item => <ProductCard key={data.id} {...item}/>);

  return (
    <div className="explore">
      <div className="explore--left">
        <span className="explore--left--title">Filters</span>
        <div className='filters'>
          <span className='filter--title'>Size</span>
          <div className='size--div'>
            <button onClick={() => dispatch({id:'size-s'})} className={state.size.s ? `size--box button-active`:`size--box`} id='size-s'>S</button>
            <button onClick={() => dispatch({id:'size-m'})} className={state.size.m ? `size--box button-active`:`size--box`} id='size-m'>M</button>
            <button onClick={() => dispatch({id:'size-l'})} className={state.size.l ? `size--box button-active`:`size--box`} id='size-l'>L</button>
            <button onClick={() => dispatch({id:'size-xl'})} className={state.size.xl ? `size--box button-active`:`size--box`} id='size-xl'>XL</button>
            <button onClick={() => dispatch({id:'size-xxl'})} className={state.size.xxl ? `size--box button-active`:`size--box`} id='size-xxl'>XXL</button>
          </div>
          <span className='filter--title'>Color</span>
          <div className='color--div'>
            <button onClick={() => dispatch({id:'c-mustard'})} className={state.color.mustard ? `color--box button-active`:`color--box`} id='c-mustard'></button>
            <button onClick={() => dispatch({id:'c-onion'})} className={state.color.onion ? `color--box button-active`:`color--box`} id='c-onion'></button>
            <button onClick={() => dispatch({id:'c-green'})} className={state.color.green ? `color--box button-active`:`color--box`} id='c-green'></button>
            <button onClick={() => dispatch({id:'c-navy'})} className={state.color.navy ? `color--box button-active`:`color--box`} id='c-navy'></button>
            <button onClick={() => dispatch({id:'c-grey'})} className={state.color.grey ? `color--box button-active`:`color--box`} id='c-grey'></button>
            <button onClick={() => dispatch({id:'c-white'})} className={state.color.white ? `color--box button-active`:`color--box`} id='c-white'></button>
            <button onClick={() => dispatch({id:'c-black'})} className={state.color.black ? `color--box button-active-w`:`color--box`} id='c-black'></button>
          </div>
          <span className='filter--title'>Category</span>  
          <div className='category--div'>
            <button onClick={() => dispatch({id:'anime-box'})} className={state.category.anime ? `category--box button-active`:`category--box`} id='anime-box'>Anime</button>
            <button onClick={() => dispatch({id:'custom-box'})} className={state.category.custom ? `category--box button-active`:`category--box`} id='custom-box'>Custom</button>
            <button onClick={() => dispatch({id:'typo-box'})} className={state.category.typo ? `category--box button-active`:`category--box`} id='typo-box'>Typography</button>
            <button onClick={() => dispatch({id:'solid-box'})} className={state.category.solid ? `category--box button-active`:`category--box`} id='solid-box'>Solid</button>
          </div>
        </div>
        <span className='clear--all' onClick={() => dispatch({id:'clear-all'})}>Clear all</span>
      </div>
      <div className='explore--right'>
        {productCards}
        {productCards}
      </div>
      <ToTop/>
    </div>
  );
}


