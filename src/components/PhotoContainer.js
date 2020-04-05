import React, {Component} from "react";

//importing components
import Photo from "./Photo";
import NotFound from "./NotFound";

//Photo Container Class

class PhotoContainer extends Component {

    render() {

        const results = this.props.data;
        let images;

        results.length > 0
            ?
            images = results.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
            :
            images = <NotFound />


        return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {images}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;

