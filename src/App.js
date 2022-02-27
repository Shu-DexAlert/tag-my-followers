import { useState } from 'react';
import './App.css';
import Followers from './components/Followers';
import Step1 from './components/Step1';
import useFollowers from './hooks/useFollowers';
import useUser from './hooks/useUser';


function App() {
  const [handle, setHandle] = useState('');
  const [user] = useUser(handle);
  const [followers] = useFollowers(user?.data?.id);

  return (
    <div className='bg-blue-100 dark:bg-gray-900 h-screen w-screen flex items-center justify-start relative flex-col'>
      <h5 className='m-12 font-bold text-4xl text-black dark:text-white'>Tag random followers</h5>
      <Step1 handle={handle} setHandle={setHandle}></Step1>
      <Followers followers={followers}></Followers>
    </div>
  );
}

export default App;
