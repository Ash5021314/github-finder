import React, {useState} from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  searchUsers: PropTypes.func.isRuquired,
  clearUsers: PropTypes.func.isRuquired,
}
const Search = ({searchUsers, clearUsers}) => {
  const [search, setSearch] = useState({
    text: ''
  })
  const onChange = (e) => {
    setSearch({[e.target.name]: e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    searchUsers(search.text)
    setSearch({text: ''})
  }
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input type="text" name='text' placeholder='Search Users...' value={setSearch.text} onChange={onChange}/>
        <input type="submit" value="Search"/>
      </form>
      <button className="btn btn-light" onClick={clearUsers}>Clear</button>
    </div>
  )
}
export default Search
