import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { deleteType, fetchTypes, createType } from '../http/deviceAPI'

const AdminPage = observer(() => {
  const {device} = useContext(Context)
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  const addType = (valueOfType) => {
    createType({name: valueOfType}).then(() => {
      fetchTypes().then(data => device.setTypes(data))
    })
  }

  const onDeleteType = (valueOfType) => {
    deleteType(valueOfType).then(() => {
      fetchTypes().then(data => device.setTypes(data))
    })
  }

  return (
    <Container>
      <Tabs
        defaultActiveKey="type"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="type" title="Type">
          {device.types.map(type =>
            <Row className='mb-3' key={type.id}>
              <Col md={10}>
                {type.name}
              </Col>
              <Col md={2} className='text-end'>
                <Button
                  onClick={() => onDeleteType(type.name)}
                  variant='danger'>Delete
                </Button>
              </Col>
            </Row>
          )}
          <hr></hr>
          <Button
            variant={'outline-success'}
            className='p-2 me-3 mb-3'
            onClick={() => setTypeVisible(true)}
          >
            Add Type
          </Button>
        </Tab>
        <Tab eventKey="brand" title="Brand">
          <Button
            variant={'outline-dark'}
            className='p-2 me-3'
            onClick={() => setBrandVisible(true)}
          >
          Add Brand
          </Button>
        </Tab>
        <Tab eventKey="device" title="Device">
          <Button
            variant={'outline-dark'}
            className='p-2 me-3'
            onClick={() => setDeviceVisible(true)}
          >
            Add Device
          </Button>
        </Tab>
      </Tabs>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateType show={typeVisible} addType={addType} onHide={() => setTypeVisible(false)}/>
    </Container>
  )
})

export default AdminPage
