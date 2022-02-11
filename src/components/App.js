import react from "react";
import reactDom from "react-dom";
import SearchBar from "./SearchBar"

class App extends react.Component{

    onSearchSubmit(term){
        console.log(term)
    }
    render(){
        return (<div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
    </div>);
    }
   
}

export default App;
