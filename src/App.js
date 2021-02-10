import React from 'react'
import './App.css';
import images from './images.js';
import ImageList from './ImageList.js';
import Header from './Header.js';





export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
    magicpowers: '',
  }


  render() {

    const filteredAnimals = images.filter((image) => {
      if (!this.state.keyword) return true;
      if (!this.state.horns) return true;
      if (!this.state.magicpowers) return true;

      if (((image.keyword === this.state.keyword) &&
      (image.magicpowers === this.state.magicpowers) &&
        (image.horns === Number(this.state.horns)))) return true;
        


      return false;

    });


    return (

      <div>
        <Header />
        <section className="animals-questions">
        <span>
          Which type of animal are you insterested in? 
        </span>
        <select

          value={this.state.keyword}
          onChange={(e) => {
            this.setState({
              keyword: e.target.value

            })
          }}
        >

          <option value="narwhal">Narwhal</option>
          <option value="rhino">Rhino</option>
          <option value="unicorn">Unicorn</option>
          <option value="unilego">Unilego</option>
          <option value="triceritops">Triceritops</option>
          <option value="markhor">Markhor</option>
          <option value="mouflon">Mouflon</option>
          <option value="addax">Addax</option>
          <option value="chameleon">Chameleon</option>
          <option value="lizard">Lizard</option>
          <option value="dragon">Dragon</option>

        </select>

        <div>
          How many horns are you looking for?
        
        <select

          value={this.state.horns}
          onChange={(e) => {
            this.setState({
              horns: e.target.value

            })
          }}
        >

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>

        </select>
        </div>

        <div>
          Do you want it to have magical powers?
       
        <select

          value={this.state.magicpowers}
          onChange={(e) => {
            this.setState({
              magicpowers: e.target.value

            })
          }}
        >

          <option value="yes">yes</option>
          <option value="no">no</option>

        </select>
        </div>

        <ImageList images={filteredAnimals} />
        </section>

      </div>)


  }
}

