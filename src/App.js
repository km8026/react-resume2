import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import MyPage from './components/MyPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
            <Route index element= {<Main />} />
            <Route path='/1' element= {<SignIn />} />
            <Route path='/2' element= {<SignUp />} />
            <Route path='/3' element= {<MyPage />} />
         
        </Routes>

   </BrowserRouter>
    </>
   
  );
}

export default App;
