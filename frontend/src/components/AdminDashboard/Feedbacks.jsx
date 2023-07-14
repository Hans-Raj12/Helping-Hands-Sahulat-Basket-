import React from 'react'
import './Feedbacks.css'
import { Container } from 'react-bootstrap'

import FeedbacksList from './components/FeedbacksList'
const Feedbacks = () => {
    return (
        <div className='feedbacks-container'>
            <Container>
                <FeedbacksList/>
            </Container>
        </div>
    )
}
export default Feedbacks