import React from 'react'
import './App.css';
import images from './images.js';
import ImageList from './ImageList.js';
import Header from './Header.js';
import Dropdown from './Dropdown.js';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
    magicpowers: '',
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  handleMagicPowersChange = (e) => {
    this.setState({
      magicpowers: e.target.value
    })
  }


  render() {
    const { keyword, horns, magicpowers } = this.state; 

    const filteredAnimals = images.filter((image) => {
      if (!keyword && !horns && !magicpowers) return true;
      
      if (keyword && !horns && !magicpowers) {
        if(image.keyword === keyword) return true; 
      }

      if (!keyword && horns && !magicpowers) {
        if(image.horns === horns) return true; 
      }

      if (!keyword && !horns && magicpowers) {
        if(image.magicpowers === magicpowers) return true; 
      }
      
      if (keyword && horns && !magicpowers) {
        if(image.keyword === keyword && image.horns === horns) return true; 
      }
      
      if (keyword && !horns && magicpowers) {
        if(image.keyword === keyword && image.magicpowers === magicpowers) return true; 
      }
      if (!keyword && horns && magicpowers) {
        if(image.horns === horns && image.magicpowers === magicpowers) return true; 
      }

      if (keyword && horns && !magicpowers) {
        if(image.horns === horns && image.magicpowers === magicpowers) return true; 
      }

      if (!keyword && horns && magicpowers) {
        if(image.horns === horns && image.magicpowers === magicpowers) return true; 
      }

      if (((image.keyword === keyword) &&
      (image.magicpowers === magicpowers) &&
        (image.horns === Number(horns)))) return true;


      return false;

    });

    const keywordOptions = []
    images.map(image => {
      if(!keywordOptions.includes(image.keyword)) keywordOptions.push(image.keyword)
    })

    const hornsOptions = []
    images.map(image => {
      if(!hornsOptions.includes(image.horns)) hornsOptions.push(image.horns)
    })

    const magicOptions = []
    images.map(image => {
      if(!magicOptions.includes(image.magicpowers)) magicOptions.push(image.magicpowers)
    })


    return (

      <div>
        <Header />
        <section className="animals-questions">
        <span>
          Which type of animal are you insterested in? 
        </span>
        <Dropdown
          currentValue = {this.state.keyword}

          handleChange = {this.handleKeywordChange}
          options = {keywordOptions}
          />

        <div>
          How many horns are you looking for?
          <Dropdown
          currentValue = {this.state.horns}

          handleChange = {this.handleHornsChange}
          options = {hornsOptions}
        />
        </div>

        <div>
          Do you want it to have magical powers?
         
          <Dropdown
          currentValue = {this.state.magicpowers}

          handleChange = {this.handleMagicPowersChange}
          options = {magicOptions}
        />
        </div>

        
        </section>
        <ImageList images={filteredAnimals} />

      </div>)


  }
}

