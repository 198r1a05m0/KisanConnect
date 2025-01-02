import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to={"/PostAJob"}>PostJob</Link>
      <Link to={"/FindAJob"}>FindWork</Link>
    </nav>
  )
}
