import React from 'react';
import Unsplash from '../api/Unsplash.js';
import StockTwit from '../api/Stocktwit.js';
import SearchBar from './Searchbar.js';
import Messagelist from './messagelist.js';
import SearchParamsList from './searchparams.js';

import '../styles/styles.css';

class App extends React.Component {

    state = {
            currRequestStatus: {},
            symbols: [],
            messages: []
    }
    onSearchSubmit = async (sq) => {
        var accessTokenIndex = window.location.hash.indexOf('access_token='),
            accessToken      = ~accessTokenIndex && window.location.hash.substr(accessTokenIndex + 13);
            const response = await StockTwit.get( '/symbols.json' , {
                params: {
                    access_token: accessToken,
                    symbols: sq }
            });

        this.setState({ symbols: sq });
        console.log(this.state.symbols);
    }


    render(){
        return(
            <div className="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchParamsList symbols={this.state.symbols} />
                <Messagelist messages={this.state.messages} />
            </div>
        );
    }
};

export default App;
