import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/create" element={<CreateUsers />} />
        <Route path="/update" element={<UpdateUsers />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
