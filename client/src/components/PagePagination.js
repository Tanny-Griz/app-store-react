import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Pagination} from 'react-bootstrap'

const PagePagination = observer(() => {
  const {device} = useContext(Context)
  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages = []

  for (let i = 1; i < pageCount; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={device.page === i}
        onClick={() => device.setPage(i)}
      >
        {i}
      </Pagination.Item>
    )
  }

  return (
    <Pagination>{pages}</Pagination>
  )
})

export default PagePagination
