import React from 'react';

class SearchParamsList extends React.Component  {


    state = {
        symbols : this.props.symbols,
    };


    removeSymbol = (symbol) =>{
        this.props.removeSymbol(symbol)
    }



    render(){
       return (
           <div className="ui segment">
            <ul className="ui symbolList">
                {this.state.symbols.map((symbol, index) => (
                    <li key={index}>{symbol}<button type="button" onClick={() => this.removeSymbol(symbol)}>X</button></li>
                ))}
            </ul>
         </div>
       )
    }
};


export default SearchParamsList;
