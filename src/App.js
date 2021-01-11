import "./App.css";
import Movie from "./Movie";

class App extends React.Component {
  state ={
    isLoading = true;
    movies =[]
  };

  

  render(){
  return (
    <div className="App">
      <Movie />
    </div>
  );
  }
}

export default App;
