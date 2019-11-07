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
            messages: [],
    }

    updateSymbols = (symbol) => {
                this.state.symbols.push(symbol);

    };

    updateMessages = (apiResponse)=>{
        this.setState(state => {
            state.messages = [];
               for (var m = 0; m <= 4; m++){
                   //state.messages.push
                console.log(apiResponse.messages[m]);
              }
         });
     }
    onSearchSubmit =  async(sq) => {
        var accessTokenIndex = window.location.hash.indexOf('access_token='),
            accessToken      = ~accessTokenIndex && window.location.hash.substr(accessTokenIndex + 13);

            try {
                let response = await StockTwit.get( '/symbols.json' , {
                params: {
                    access_token: accessToken,
                    symbols: sq }
                });


                console.log(response);
                this.updateMessages(response);
            } catch (err) {
                console.log(err);

            };


            this.updateSymbols(sq);
            console.log('app state symbol list:' + this.state.symbols);
            console.log('app state messgaes:' + this.state.messages);

    }

    removeSymbol = (i) => {
        let symbols = this.state.symbols.filter((item, j) => i !== j);
        this.setState(state => {
            return  state.symbols = symbols;
          });

      };


    render(){
        return(
            <div className="ui continer" style={{marginTop:`10px`}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchParamsList symbols={this.state.symbols} removeSymbol={this.removeSymbol} />
                <Messagelist messages={this.state.messages} />
            </div>
        );
    }
};

export default App;
