import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container>
      <Button
        variant={'outline-dark'}
        className='p-2'
        onClick={() => setTypeVisible(true)}
      >
        Add Type
      </Button>
      <Button
        variant={'outline-dark'}
        className='p-2'
        onClick={() => setBrandVisible(true)}
      >
        Add Brand
      </Button>
      <Button
        variant={'outline-dark'}
        className='p-2'
        onClick={() => setDeviceVisible(true)}
      >
        Add Device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  )
}

export default AdminPage
