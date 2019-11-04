import React from 'react';

const SearchParamsList= (props) => {


      let symbolsList = props.symbols.map((symbol) => {

                return <li>{symbol}</li>
            });



        return (
            <div className="ui segment">
                <ul className="ui symbolList">
                    {symbolsList}
                </ul>
            </div>
        )
    };


export default SearchParamsList;
