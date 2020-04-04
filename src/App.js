import React from 'react';

//import components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
//flicker config
import apiKey from "./config";

function App() {
    return (
        <div className="container">
            <SearchForm />
            <Nav />
            <PhotoContainer />
        </div>
    );
}

export default App;
