import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import CreateDevice from '../components/modals/CreateDevice'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TableComponent from '../components/TableComponent'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchTypes, createType, deleteType, createBrand, fetchBrands, deleteBrand } from '../http/deviceAPI'
import Create from '../components/modals/Create'

const AdminPage = observer(() => {
  const {device} = useContext(Context)
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  const [valueOfType, setValueOfType] = useState('')
  const [errorTypeMessage, setErrorTypeMessage] = useState('')

  const [valueOfBrand, setValueOfBrand] = useState('')
  const [errorBrandMessage, setErrorBrandMessage] = useState('')

  const addCategory = (value, category) => {
    if (value) {
      switch (category) {
        case 'type':
          createType({name: value}).then(() => {
            fetchTypes().then(data => device.setTypes(data))
          })
          setValueOfType('')
          break
        case 'brand':
          createBrand({name: value}).then(() => {
            fetchBrands().then(data => device.setBrands(data))
          })
          setValueOfBrand('')
          break
        default: return
      }
    }
    return
  }

  const deleteCategory = (value, category) => {
    switch (category) {
      case 'type':
        deleteType(value).then(() => {
          fetchTypes().then(data => device.setTypes(data))
        })
        break
      case 'brand':
        deleteBrand(value).then(() => {
          fetchBrands().then(data => device.setBrands(data))
        })
        break
      default: return
    }
  }

  return (
    <Container>
      <Tabs
        defaultActiveKey="type"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="type" title="Type">
          <TableComponent
            category={'type'}
            data={device.types}
            onDelete={deleteCategory}
          />
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
          <TableComponent
            category={'brand'}
            data={device.brands}
            onDelete={deleteCategory}
          />
          <Button
            variant={'outline-success'}
            className='p-2 me-3'
            onClick={() => setBrandVisible(true)}
          >
          Add Brand
          </Button>
        </Tab>
        <Tab eventKey="device" title="Device">
          <TableComponent data={device.devices} />
          <Button
            variant={'outline-success'}
            className='p-2 me-3'
            onClick={() => setDeviceVisible(true)}
          >
            Add Device
          </Button>
        </Tab>
      </Tabs>
      <Create
        show={brandVisible}
        category={'brand'}
        value={valueOfBrand}
        addCategory={addCategory}
        setValue={setValueOfBrand}
        errorMessage={errorBrandMessage}
        setErrorMessage={setErrorBrandMessage}
        onHide={() => {
          setBrandVisible(false)
          setErrorBrandMessage('')
        }}
      />
      <Create
        show={typeVisible}
        category={'type'}
        value={valueOfType}
        addCategory={addCategory}
        setValue={setValueOfType}
        errorMessage={errorTypeMessage}
        setErrorMessage={setErrorTypeMessage}
        onHide={() => {
          setTypeVisible(false)
          setErrorTypeMessage('')
        }}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  )
})

export default AdminPage
