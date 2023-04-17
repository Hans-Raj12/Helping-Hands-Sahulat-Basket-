import React from 'react'
import './AddRemoveNGOs.css'


import { Container } from 'react-bootstrap'
import AddorRemoveNGOs from './components/AddOrRemoveNGOs'

const AddRemoveNGOs = () => {
    return (
        <div className='add-remove-ngos-container'>
            <Container>
                <AddorRemoveNGOs/>
            </Container>
        </div>
    )
}
export default AddRemoveNGOs