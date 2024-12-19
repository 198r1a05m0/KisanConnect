
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <h1 className='bg-orange-500'>KisanConnect</h1>
      <div className='flex text-center justify-center gap-5 '>
      <Button label="Post a job" className="bg-blue-600 hover:bg-green-600 p-8 border-2 border-cyan-500 rounded text-white"/>
      <Button label="Find a job" className="bg-blue-600 hover:bg-green-600 p-8 border-2 border-cyan-500 rounded text-white"/>
      </div>
    </div>
  );
}

export default App;
