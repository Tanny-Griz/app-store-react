import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import Card from 'react-bootstrap/esm/Card'

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <div className='d-flex flex-wrap mb-4 mt-4'>
      {device.brands.map(brand =>
        <Card
          style={{cursor: 'pointer'}}
          className='p-2 me-3'
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'gray' : 'light'}
          key={brand.id}>
          {brand.name}
        </Card>
      )}
    </div>
  )
})

export default BrandBar
