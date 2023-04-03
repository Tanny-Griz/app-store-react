import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import { dateGenerate } from '../utils/dateGenerate'

const TableComponent = ({data, category, onDelete}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
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
  )
}

export default TableComponent
