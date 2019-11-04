import React from 'react';

const Messagelist = (props) => {


        let messages = props.publish_messages.map(({id, description, urls}) => {

                return <li key={id} ><div style={ilStyles} ></div></li>
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
