import React from 'react';

const Messagelist = (props) => {


        let messages = props.messages.map(({id, body}) => {

                return <li key={id} ><div>{{body}}</div></li>
            });



        return (
            <div className="ui segment">
                <h2>Found {props.messages.length} Messages</h2>
                <ul className="ui gallery">
                    {messages}
                </ul>
            </div>
        )
    };


export default Messagelist;
