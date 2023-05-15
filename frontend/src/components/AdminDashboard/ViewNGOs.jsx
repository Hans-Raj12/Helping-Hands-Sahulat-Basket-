import React from 'react'
import './ViewNGOs.css'

import { Container } from 'react-bootstrap'
import NGOList from './components/NGOList'

const ViewNGOs = () => {
    return (
        <div className='view-ngos-container'>
            <Container>
                <NGOList/>
            </Container>
        </div>
    )
}
export default ViewNGOs 