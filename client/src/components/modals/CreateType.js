import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap'

const CreateType = ({show, onHide, addType}) => {
  const [value, setValue] = useState('')
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'input name of brand'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={() => {
          addType(value)
          setValue('')
          onHide()
        }}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
