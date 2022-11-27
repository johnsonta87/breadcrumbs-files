import React from 'react'
import { getNavigationData } from '../../utils';
import { BreadcrumbItem } from './';

export default function Breadcrumbs() {
  const navigation = getNavigationData();
  return (
    <div className='breadcrumbs'>
      {(navigation || navigation.length) && navigation.map(
        (item, key) => <BreadcrumbItem key={key} name={item} />
      )}
    </div>
  )
}
