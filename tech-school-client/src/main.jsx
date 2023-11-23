import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	mx-auto'>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </div>
)
