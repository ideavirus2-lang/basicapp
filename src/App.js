import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
import MyClock from './02/MyClock';
import Lotto from './05/Lotto';
import Traffic from './06/Traffic';
import MyRefAdd from './07/MyRefAdd';
import Gallery from './08/Gallery';
import RecoilMain from './10/RecoilMain';
import Rest from './11/Rest'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full min-h-screen mx-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 px-10 bg-slate-200">
          <p>리엑트 기초</p>
          <ul className="flex gap-6 text-base font-semibold">
            <li><Link to="/">시계</Link></li>
            <li><Link to="/lotto">로또</Link></li>
            <li><Link to="/traffic">교통사고</Link></li>
            <li><Link to="/add">더하기</Link></li>
            <li><Link to="/gallery">관광</Link></li>
            <li><Link to="/recoil">recoil 예제</Link></li>
            <li><Link to="/rest">rest 예제</Link></li>
          </ul>
          <Link to="/">
            <RiHomeHeartFill />
          </Link>
        </header>

        <main className="grow w-full flex justify-center items-start overflow-y-auto">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/add" element={<MyRefAdd />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/recoil" element={<RecoilMain/>} />
            <Route path="/rest" element={<Rest/>} />
          </Routes>
        </main>

        <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
          @Kim Jin Sik
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;