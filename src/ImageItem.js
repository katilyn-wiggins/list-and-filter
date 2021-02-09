//image item components
import React from 'react'


export default class ImageItem extends React.Component {
    render() {
        return <div className="animal-item">
            <img className="animal-image" alt='animal' src={this.props.imageProp.url}></img>
            <p>Name: {this.props.imageProp.title}</p>
            <p>Description: {this.props.imageProp.description}</p>
            <p>Number of Horns: {this.props.imageProp.horns}</p>
        </div>
    }
}


