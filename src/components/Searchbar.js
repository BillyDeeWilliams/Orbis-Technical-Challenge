import React from 'react';

class SearchBar extends React.Component  {

    state = {
        sq : ``,

    };
onFormSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit(this.state.sq)
    this.state.sq = '';
};

    render(){
        return (
                <div className="ui segment ">
                    <form className="ui form center-flex" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Stock Watcher Search</label>
                            <input
                                type="text"
                                value={this.state.sq}
                                onChange={(e) => this.setState({sq : e.target.value})}

                            />
                        </div>
                    </form>
                </div>
        );
    }
};

export default SearchBar;
