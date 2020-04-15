import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './homePage'
import { Container } from 'reactstrap'

const App = () => {
    return(
    <React.Fragment>
        <Container>
            <HomePage />
        </Container>
    </React.Fragment>
    )
}

ReactDOM.render( <App />, document.querySelector('#root'));