import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import DeviceItem from './DeviceItem'
import Row from 'react-bootstrap/esm/Row'

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className='device-wrapper'>
      <Row>
        {device.devices.map(device =>
          <DeviceItem key={device.id} device={device} />
        )}
      </Row>
    </div>
  )
})

export default DeviceList
