//image item components
import React from 'react'


export default class ImageItem extends React.Component {
    render() {
        return <div className="animal-item">
            <img className="animal-image" alt='animal' src={this.props.imageProp.url}></img>
            <div>Name: {this.props.imageProp.title}</div>
            <div>Description: {this.props.imageProp.description}</div>
            <div>Number of Horns: {this.props.imageProp.horns}</div>
            <div>Magical Powers? {this.props.imageProp.magicpowers}</div>
        </div>
    }
}


