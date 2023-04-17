import React from 'react'
import './ViewDonors.css'
import { Container } from 'react-bootstrap'

import DonorList from './components/DonorList'
const ViewDonors = () => {
    return (
        <div className='view-donors-container'>
            <Container>
                <DonorList/>
            </Container>
        </div>
    )
}
export default ViewDonors