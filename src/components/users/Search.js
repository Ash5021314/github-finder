import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, clearUsers, showAlert}) => {
  const [search, setSearch] = useState('')
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (search === '') {
      showAlert('Please enter something', 'light')
    } else {
      searchUsers(search)
      setSearch('')
    }
  }
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input type="text" name='text' placeholder='Search Users...' value={setSearch.search} onChange={onChange}/>
        <input type="submit" value="Search"/>
      </form>
      <button className="btn btn-light" onClick={clearUsers}>Clear</button>
    </div>
  )
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
}
export default Search
