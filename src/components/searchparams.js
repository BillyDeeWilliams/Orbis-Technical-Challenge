import React from 'react';

const SearchParamsList= (props) => {


      let symbolsList = props.symbols.map(({id, }) => {

                return <li key={id} ><div>{{body}}</div></li>
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
