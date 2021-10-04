import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import Layout from './components/Layout'

function Content() {
  return <Layout/>
}

export default function App(){
  return <Router>
    <Content />
  </Router>
}
