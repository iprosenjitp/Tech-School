import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	mx-auto'>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </div>
)
