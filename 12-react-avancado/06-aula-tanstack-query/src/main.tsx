import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Responsável por gerenciar todas as queries da aplicação
const queryCliente = new QueryClient

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolva o app */}
    <QueryClientProvider client={queryCliente}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
