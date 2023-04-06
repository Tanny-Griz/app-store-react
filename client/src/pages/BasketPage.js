// import React, {useEffect, useContext} from 'react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fetchBasket } from '../http/basketAPI'
import { observer } from 'mobx-react-lite'
// import { Context } from '../index'
// import jwt_decode from 'jwt-decode'

const BasketPage = observer(() => {
  fetchBasket().then(data => console.log('data', data))
  return (
    <Container>
      <Row>
        <Col>
          <div>
            123
          </div>
        </Col>
      </Row>
    </Container>
  )
})

export default BasketPage
