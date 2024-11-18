import './index.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import LoginPage from './pages/LoginPage'

import { BrowserRouter ,Routes  , Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/editprofile' element={<EditProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    
  )

}

export default App
