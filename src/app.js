import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import AppRouter from "./components/routers/AppRouter";

ReactDOM.render(<AppRouter/>,
    document.getElementById("app")
) 