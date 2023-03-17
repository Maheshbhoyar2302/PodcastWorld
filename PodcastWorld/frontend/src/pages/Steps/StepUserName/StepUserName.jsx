import React from 'react'
import styles from './StepUserName.module.css'

const StepUserName = ({onNext}) => {
  return (
    <>
    <div>StepUserName component</div>
    <button onClick={onNext}>Next</button>
    
    </>
  )
}

export default StepUserName