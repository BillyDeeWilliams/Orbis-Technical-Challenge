import React from 'react';

const Messagelist = (props) => {


      let renderedMessages = props.messages.map(({id, body}) => {

                return <li key={id} ><div>{{body}}</div></li>
            });

        return (
            <div className="ui segment">
                <h2>Found  Messages</h2>
                <ul className="ui gallery">
                {props.renderedMessages}
                </ul>
            </div>
        )
    };


export default Messagelist;
