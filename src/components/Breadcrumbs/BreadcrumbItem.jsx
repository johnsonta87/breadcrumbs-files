import React from 'react'

export default function BreadcrumbItem({ name }) {
  return <a className='breadcrumb' href={name}>{name}</a>;
}
