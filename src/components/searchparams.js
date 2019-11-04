import React from 'react';

const SearchParamsList= (props) => {


      let symbolsList = props.symbols.map((id,symbol) => {

                return <li key={id} >{symbol}</li>
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
