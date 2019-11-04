import React from 'react';
import Unsplash from '../api/Unsplash.js';
import StockTwit from '../api/Stocktwit.js';
import SearchBar from './Searchbar.js';
import Imagelist from './Imagelist.js';

import '../styles/styles.css';


class App extends React.Component {

    state = {
            images: [],
            imageURLS: [],
            currRequestStatus: {},
            symbols: {},
            messages: []
    }
    onSearchSUbmit = async (sq) => {
            const response = await StockTwit.get( '/symbols.json' , {
                params: { symbols: sq }
            });

        this.setState({messages: response.data.results});
        //console.log(this.state.images)
    }


    render(){
        return(
            <div className="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSUbmit} />
                <Messagelist messages={this.state.messages}   />
            </div>
        );
    }
};

export default App;
