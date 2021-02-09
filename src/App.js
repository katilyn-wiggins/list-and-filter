import React from 'react'
import './App.css';
import images from './images.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem';



export default class App extends React.Component {
  state = {
    name: '',
    flavor: '',
  }
  render() {
    return (
      <ImageList />)
  }
}

