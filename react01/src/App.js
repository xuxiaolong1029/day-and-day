import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcomel,Welcome2} from './components/compType'
import Clock from './components/clock'

let name='xuxialong';
let user={first:'1992',last:'1029'}
let jsx = <p>hello,jerry</p>
function formatName(user){
  return user.first+' '+user.last
}
export default function App() {
  return (
    <div>
      <p>{name}</p>
      <h2>{formatName(user)}</h2>
      <img src={logo} style={{width:'100px'}} />
      <h1>{jsx}</h1>
      <Welcomel name={formatName(user)}></Welcomel>
      <Welcome2 name='App.js welcome2'></Welcome2>
      <Clock title='购物车'></Clock>
    </div>
  );
}

