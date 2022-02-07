import React from "react";
import react from "react";
import reactDom from "react-dom";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
          <h3>Image Search</h3>
        <div className="ui fluid action input">
          <input type="text" placeholder="Enter you search term here"></input>
          <button className="ui icon button">
            <i className="search icon"></i>
          </button>
         
        </div>
        
      </div>
    );
  }
}

export default SearchBar;
