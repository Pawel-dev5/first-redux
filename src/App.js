import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer';
import MoviesForm from './app/movies/components/MoviesForm';
import ActorsContainer from './app/actors/components/ActorsContainers';
import ActorsForm from './app/actors/components/ActorsForm';

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
      <ActorsContainer />
      <ActorsForm />
    </div>
  );
}

export default App;
