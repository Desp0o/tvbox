import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({linkName, link, cliclAction}) {
  return <Link to={link} onClick={cliclAction}><p>{linkName}</p></Link>
}
