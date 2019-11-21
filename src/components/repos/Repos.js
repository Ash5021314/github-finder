import React from 'react'
import RipoItem from './RipoItem'
import PropTypes from 'prop-types'


const Repos = ({repos}) => {
  return repos.map(repo => <RipoItem repo={repo} key={repo.id}/>)
}


export default Repos