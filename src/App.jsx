import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import Main from './pages/Main.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  )
}

export default App
