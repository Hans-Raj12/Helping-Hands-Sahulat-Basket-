import React from 'react'
import './AddRemoveDonors.css'

import { Container } from 'react-bootstrap'
import AddorRemoveDonors from './components/AddOrRemoveDonors'

const AddRemoveDonors = () => {
    return (
        <div className='add-remove-donors-container'>
            <Container>
                <AddorRemoveDonors/>
            </Container>
        </div>
    )
}
export default AddRemoveDonors