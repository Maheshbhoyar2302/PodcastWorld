import React from 'react'
import styles from './StepOTP.module.css'

const StepOTP = ({onNext}) => {
  return (
    <>
    <div>StepOTP component</div>
    <button onClick={onNext}>Next</button>
    </>
  )
}

export default StepOTP