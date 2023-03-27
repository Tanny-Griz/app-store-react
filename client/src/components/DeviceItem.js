import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
  const history = useNavigate()
  return (
    <Col lg={3} md={4} className='mb-3'>
      <div className='device-card'
        onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
      >
        <div className='device-card-img'>
          <img src={process.env.REACT_APP_API_URL + device.img}></img>
        </div>
        <div className='device-card-text'>
          <h4 className='mb-3'>{device.name}</h4>
          <p className='text-end text-success mb-0 price'>
            <b>{device.price} $</b>
          </p>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </div>
      </div>
    </Col>
  )
}

export default DeviceItem
