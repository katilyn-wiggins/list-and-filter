//image list component
import React from 'react';
import ImageItem from './ImageItem';

export default class ImageList extends React.Component {
    render() {

        const ListLayout =
            this.props.images.map(
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