import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap'

const CreateType = ({show, valueOfType, setValueOfType, onHide, errorTypeMessage, setErrorTypeMessage, addType}) => {
  const onAddType = () => {
    if (valueOfType) {
      addType(valueOfType)
      onHide()
    } else {
      setErrorTypeMessage('Name can`t be empty')
    }
  }
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
            value={valueOfType}
            onChange={e => setValueOfType(e.target.value)}
            placeholder={'input name of brand'}
          />
          {errorTypeMessage && <p className='text-danger mt-2'>{errorTypeMessage}</p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={() => onAddType()}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
