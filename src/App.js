import './App.scss';
import Grid from './components/organisms/grid/grid';
import Header from './components/organisms/header/header';
import Section from './components/atoms/section/section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section first>
        <Grid />
      </Section>
    </div>
  );
}

export default App;
