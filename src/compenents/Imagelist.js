import React from 'react';

const Imagelist = (props) => {


        let images = props.images.map(({id, description, urls}) => {
            let ilStyles = {
                background : 'url(' + urls.regular + ')',
                backgroundSize : 'cover'
            }
                return <li key={id} ><div style={ilStyles} ></div></li>
            });



        return (
            <div className="ui segment">
                <h2>Found {props.images.length} Images</h2>
                <ul className="ui gallery">
                    {images}
                </ul>
            </div>
        )
    };


export default Imagelist;
