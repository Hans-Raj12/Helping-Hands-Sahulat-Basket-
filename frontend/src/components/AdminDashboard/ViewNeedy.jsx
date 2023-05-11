import React from 'react'
import './ViewDonors.css'
import { Container } from 'react-bootstrap'

import NeedyList from './components/NeedyList'
const ViewDonors = () => {
    return (
        <div className='view-donors-container'>
            <Container>
                <NeedyList/>
            </Container>
        </div>
    )
}
export default ViewDonors