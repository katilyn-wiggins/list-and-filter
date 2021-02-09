//image list component
import React from 'react';
import ImageItem from './ImageItem';
import images from './images.js';

export default class ImageList extends React.Component {
    render() {

        const ListLayout =
            images.map(
                singleimageObject =>

                    <ImageItem imageProp={
                        singleimageObject
                    } />)

        return (
            <>
                <ul class="list-layout">
                    {ListLayout}
                </ul>
            </>
        )
    }
}