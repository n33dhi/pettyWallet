import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
//   console.info('You clicked a breadcrumb.');
}

const AdminBreadCrumb = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/cashMaster">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/cashMaster/user"
        >
          User
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/cashMaster/user/:uid"
          aria-current="page"
        >
          Single user
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default AdminBreadCrumb;