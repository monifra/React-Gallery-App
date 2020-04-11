import React, {Component} from "react";

//importing components
import Photo from "./Photo";
import NotFound from "./NotFound";
import Loading from "./Loading";

//Photo Container Class

class PhotoContainer extends Component {

    componentDidMount() {
        this.props.handleSearch(this.props.routeMatch.params.query);
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if(this.props.routeMatch.params.query !== prevProps.routeMatch.params.query){
            this.props.handleSearch(this.props.routeMatch.params.query);
        }
    }

    render() {

        const results = this.props.data;
        let images;

        if(results.length > 0){
            images = results.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
        }
        else if(this.props.loadingState){
            images = <Loading />
        }
        else if(results.length === 0){
            images = <NotFound />
        }


        return(
            <div className="photo-container">
                <h2>Here are your results for {this.props.routeMatch.params.query}</h2>
                <ul>
                    {images}
                </ul>
            </div>

        );
    }
}

export default PhotoContainer;

