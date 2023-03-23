import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
  const history = useNavigate()
  return (
    <Col md={4} className='mb-3'>
      <Card
        onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
        style={{cursor: 'pointer'}}
      >
        <Card.Img variant='top' src={process.env.REACT_APP_API_URL + device.img}></Card.Img>
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          <Card.Text>
            123
          </Card.Text>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default DeviceItem
