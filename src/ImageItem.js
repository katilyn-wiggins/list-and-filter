//image item components
import React from 'react'


export default class ImageItem extends React.Component {
    render() {
        return <div>
            <p>{this.props.imageProp.description}</p>
        </div>
    }
}


