import React, { Component } from 'react'; // import react, and pull off Component

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    
    
    render() {
        return (
                <div>
                    <input
                        value = {this.state.term}
                        onChange={event => this.setState({term: event.target.value})}
                    />; // Curly braces for any vanilla .js
                </div>
               );
    }
}

export default SearchBar;
