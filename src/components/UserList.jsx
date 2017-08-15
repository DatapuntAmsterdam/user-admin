import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import FilterLink from '../containers/FilterLink'

const UserList = ({ users, onUserClick }) => (
  <section>
    <aside>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_INACTIVE">
        Inactive
      </FilterLink>
    </aside>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <NavLink to={`/users/${user.id}`}>
            {user.name} | {user.emailAddress}
          </NavLink>
        </li>
      ))}
    </ul>
  </section>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func
}

export default UserList