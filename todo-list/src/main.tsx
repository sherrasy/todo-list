import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/app/App'
import { Provider } from 'react-redux'
import { store } from './store'
import '@styles/styles.scss';
import { StyledEngineProvider } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </Provider>
  </StrictMode>,
)
