import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//axios for fetching data
import axios from 'axios';

//import components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Error from "./components/Error";

//flicker config
import apiKey from "./config.js";

class App extends Component {
    constructor() {
        super();
        this.state = { //state is going to be a img data we want to display, a collection of objects
            images: [],
            isLoading: true
        };
    }

    // componentDidMount() { //is called immediately after a component is added to a DOM
    //     axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=Cat&per_page=24&format=json&nojsoncallback=1`)
    //         .then(response => {
    //             this.setState({
    //                images: response.data.photos.photo
    //             });
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

    componentDidMount() {
        this.search();
    }

    //Search Function

    search = (query = 'horses') => {
        axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    images: response.data.photos.photo,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };


    render() {
        console.log(this.state.images);
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" render={ ()=> <Redirect to="/search/horses" /> } />
                        <Route path="/search/:query" render={ ({match})=> (
                            <>
                                <SearchForm onSearch={this.search}/>
                                <Nav/>
                                { (this.state.isLoading)
                                    ? <p>Loading......</p>
                                    : <PhotoContainer data={this.state.images}/>
                                }
                            </>
                        ) } />
                        <Route path="*" component={Error} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
