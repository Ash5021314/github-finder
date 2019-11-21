import React from 'react'

const Alert = ({alert, closeSection}) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"/> {alert.alert.msg}
        <i className="fa fa-close" onClick={closeSection}/>
      </div>
    )
  )
}
export default Alert