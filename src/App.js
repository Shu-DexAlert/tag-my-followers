import './App.css';
import Step1 from './components/Step1';

function App() {
  return (
    <div className='bg-blue-100 dark:bg-gray-900 h-screen w-screen flex items-center justify-start relative flex-col'>
      <h5 className='m-12 font-bold text-4xl text-black dark:text-white'>Tag random followers</h5>
      <Step1></Step1>
    </div>
  );
}

export default App;
