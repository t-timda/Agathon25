import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import Main from './pages/Main.jsx'
import Introduction from './pages/Introduction.jsx'
import Announcement from './pages/Announcement.jsx'
import MapoNews from './pages/MapoNews.jsx'
import MyPage from './pages/MyPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/MapoNews" element={<MapoNews />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Route>
    </Routes>
  )
}

export default App
