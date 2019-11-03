import React from 'react';
import Unsplash from '../api/Unsplash.js';
import SearchBar from './Searchbar.js';
import Imagelist from './Imagelist.js';

import '../styles/styles.css';


class App extends React.Component {

    state = {
            images: [],
            imageURLS: [],
            currRequestStatus: {},
    }
    onSearchSUbmit = async (sq) => {
        const response = await Unsplash.get( '/search/photos' , {
                params: { query: sq }
            });

        this.setState({images: response.data.results});
        //console.log(this.state.images)
    }


    render(){
        return(
            <div className="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSUbmit} />
                <Imagelist images={this.state.images} selectImage={this.selectImage}   />

            </div>
        );
    }
};

export default App;
