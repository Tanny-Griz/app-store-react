import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import { dateGenerate } from '../utils/dateGenerate'
import { observer } from 'mobx-react-lite'
// import PaginationComponent from '../components/PaginationComponent'
// import { Context } from '../index'

const TableComponent = observer(({data, category, onDelete, brands}) => {
  // const {device} = useContext(Context)
  const findBrand = (id) => {
    const brandName = brands.find(i => i.id === id)
    return brandName.name
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            {data.info && <th>Info</th>}
            {brands && <th>Brand</th>}
            {category === 'devices' && <th>Price</th>}
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              {data.info && item.info.map(i => <td key={i.info}>{i.info}</td>)}
              {brands && <td>{findBrand(item.brandId)}</td>}
              {category === 'devices' && <th className='text-center'>{item.price} $</th>}
              <td>{dateGenerate(item.createdAt)}</td>
              <td className='text-end'>
                <Button
                  onClick={() => onDelete(item.name, category)}
                  variant='danger'>Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
})

export default TableComponent
