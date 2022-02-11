import react from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends react.Component {
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 24Tv3q6iIi_xYvdCpq26S7Z4OXij3rslI4iZuqMFey8",
      },
    });
    
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
          
        <div>Found {this.state.images.length} images</div>
      </div>
    );
  }
}

export default App;
