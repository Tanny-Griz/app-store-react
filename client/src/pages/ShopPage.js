import React, {useContext, useEffect} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {fetchBrands, fetchDevices, fetchTypes} from '../http/deviceAPI'
import PaginationComponent from '../components/PaginationComponent'

const ShopPage = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 9).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col className='shop-wrapper' md={9}>
          <BrandBar />
          <DeviceList />
          <PaginationComponent
            currentPage={device.page}
            total={device.totalCount}
            limit={device.limit}
            onPageChange={(page) => device.setPage(page)} />
        </Col>
      </Row>
    </Container>
  )
})

export default ShopPage
