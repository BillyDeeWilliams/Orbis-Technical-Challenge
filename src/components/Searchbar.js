import React from 'react';

class SearchBar extends React.Component  {

    state = {
        sq : ``,
        symbols: this.props.symbols,

    };
onFormSubmit = (e) =>{
    e.preventDefault();
    this.state.symbols.push(this.state.sq);
    this.props.onSubmit(this.state.symbols);
    this.state.sq = ``;
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
