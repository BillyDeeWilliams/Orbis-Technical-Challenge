import React from 'react';

class SearchParamsList extends React.Component  {


    state = {
        symbols : this.props.symbols,
    };


  onRemoveSymbol = i => {
    this.setState(state => {
      const symbols = state.symbols.filter((item, j) => i !== j);
      return {
        symbols,
      };
    });
  };



    render(){
       return (
           <div className="ui segment">
            <ul className="ui symbolList">
                {this.state.symbols.map((symbol, index) => (
                    <li key={symbol}>{symbol}<button type="button" onClick={() => this.onRemoveSymbol(index)}>X</button></li>
                ))}
            </ul>
         </div>
       )
    }
};


export default SearchParamsList;
