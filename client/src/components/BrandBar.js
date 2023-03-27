import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import Card from 'react-bootstrap/esm/Card'

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  return (
    <div className='d-flex flex-wrap mb-4 mt-4'>
      <Card
        className='p-2 me-3'
        style={{cursor: 'pointer'}}
        onClick={() => {
          setIsSelectedAll(true)
          device.setSelectedBrand(device.brands)
        }
        }
        border={isSelectedAll ? 'gray' : 'light'}
      >All</Card>
      {device.brands.map(brand =>
        <Card
          style={{cursor: 'pointer'}}
          className='p-2 me-3'
          onClick={() => {
            setIsSelectedAll(false)
            device.setSelectedBrand(brand)
          }
          }
          border={brand.id === device.selectedBrand.id ? 'gray' : 'light'}
          key={brand.id}>
          {brand.name}
        </Card>
      )}
    </div>
  )
})

export default BrandBar
