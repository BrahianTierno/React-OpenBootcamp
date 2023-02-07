import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
import Father from './components/container/Father';
import { GreetingStyled } from './components/pure/GreetingStyled';

function App() {
  return (
    <div className="App">
    <TaskListComponent></TaskListComponent>

    {/*EJEMPLOS VISTOS */}
    {/* <GreetingStyled name="Brahian"></GreetingStyled>*/}
    {/*Father></Father> */} 
    </div>
  );
}

export default App;
