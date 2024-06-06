import React from 'react'
import ReactDOM from 'react-dom/client'
import ULoging from './components/Ui_One/ULoging.jsx'
import Register from './components/Ui_Two/Register.jsx'
import Froget from './components/Ui_Three/Froget.jsx'
import Verify from './components/Ui_Three/Verify.jsx'
import NewPassword from './components/Ui_Three/NewPassword.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ULoging/> */}
    {/* <Register/> */}
    <Froget/>
    {/* <Verify/> */}
    {/* <NewPassword/> */}
  </React.StrictMode>,
)
