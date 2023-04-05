import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ({currentPage, total, limit, onPageChange}) => {
  const pagesCount = Math.ceil(total / limit)
  let items = []
  for (let page = 1; page <= pagesCount; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}>
        {page}
      </Pagination.Item>
    )
  }
  return (
    <Pagination>{items}</Pagination>
  )
}

export default PaginationComponent
