import react from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends react.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 24Tv3q6iIi_xYvdCpq26S7Z4OXij3rslI4iZuqMFey8",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
