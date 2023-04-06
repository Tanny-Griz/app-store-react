import React, {useState, useEffect} from 'react'
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from '../http/deviceAPI'

const DevicePage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  const addToCart = (dev) => {
    console.log('dev', dev)
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div>
            <div className='device-page-img-holder'>
              <img src={process.env.REACT_APP_API_URL + device.img} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Card className='p-3'>
            {device.info.length
              ? <div>
                <h2 className='text-secondary'>
                Characteristics:
                </h2>
                {device.info.map((info, index) =>
                  <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}} className='py-2'>
                    <div>
                      {info.title} : {info.description}
                    </div>
                  </Row>
                )}
              </div>
              : ''
            }
            <h2 className='mb-4'>{device.name}</h2>
            <Button onClick={() => addToCart(device)} variant="success">Add To Cart</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DevicePage
