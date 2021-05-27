import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer';
import ActorsContainer from './app/actors/components/ActorsContainers';

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <ActorsContainer />
    </div>
  );
}

export default App;
