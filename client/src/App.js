import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { observer } from 'mobx-react-lite'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap'
import { Context } from './index'
import './App.css'
import Footer from './components/Footer'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(() => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
})

export default App
