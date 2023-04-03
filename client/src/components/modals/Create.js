import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap'

const Create = ({show, category, value, setValue, onHide, errorMessage, setErrorMessage, addCategory}) => {
  const add = () => {
    if (value) {
      addCategory(value, category)
      onHide()
    } else {
      setErrorMessage('Name can`t be empty')
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
          Add {category}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={`input name of ${category}`}
          />
          {errorMessage && <p className='text-danger mt-2'>{errorMessage}</p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={() => add()}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Create
