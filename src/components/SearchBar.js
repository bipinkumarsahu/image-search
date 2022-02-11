import React from "react";
import react from "react";
import reactDom from "react-dom";

class SearchBar extends React.Component {
 
  state={ term: ''}
    
  constructor(props){
    super(props)
    this.onFormSubmit=this.onFormSubmit.bind(this)
  }
  onFormSubmit (event){
      event.preventDefault();
      this.props.onSubmit(this.state.term);
  };
 
    render() {
    return (
      <div className="ui segment">
         <form onSubmit={this.onFormSubmit}>
         <h3>Image Search</h3>
        <div className="ui fluid action input">
          <input type="text" value={this.state.term} placeholder="Search here"
           onChange={(e)=>this.setState({term:e.target.value})}/>
          <button className="ui icon button">
            <i className="search icon"></i>
          </button>
         
        </div>
         </form>
        
      </div>
    );
  }
}

export default SearchBar;
