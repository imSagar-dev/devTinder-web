import {  BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css'
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import {Provider} from 'react-redux';
import appStore from './utils/store/appStore';
function App() {

  return (
   <>
    <Provider store={appStore}>
   <BrowserRouter baseName="/">
   <Routes>
   <Route path='/' element={<Body></Body>} >
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
   </Route>
   </Routes>
   </BrowserRouter>
    </Provider>
   </>
       
   
   
  )
}

export default App
