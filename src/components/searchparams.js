import React from 'react';

const SearchParamsList= (props) => {

console.log("search param props: " + props.symbols)


       return (
           <div className="ui segment">
               <ul className="ui symbolList">
               { props.symbols.map(item => (
                       <li key={item}>{item}</li>
                     ))}
           </ul>
         </div>
       )
    };


export default SearchParamsList;
