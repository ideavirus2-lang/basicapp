
// import MyList from './04/MyList';

import './App.css';
import { RiHomeHeartFill } from 'react-icons/ri';
import Traffic  from './06/Traffic'
import MyRef from './07/MyRef'
import MyRefAdd from './07/MyRefAdd'
// import Lotto from './05/Lotto';
// import MyClock from './02/MyClock'



function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
       <p>리엑트 기초</p>
       <p><RiHomeHeartFill /></p>
      </header>

      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        <MyRefAdd/>

      </main>

      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
         @Kim Jin Sik
      </footer>

    </div>
  );
}

export default App;
