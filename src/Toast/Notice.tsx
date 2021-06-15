import React from 'react'
import { Type } from './types'

type Props = {
  type: Type
  content?: React.ReactNode
}

const Notice = ({ type, content }: Props) => {
  const icons = {
    info: 'icon-info-circle-fill',
    success: 'icon-check-circle-fill',
    warning: 'icon-warning-circle-fill',
    error: 'icon-close-circle-fill',
    loading: 'icon-loading'
  }

  return (
    <div className={`toast-notice`}>
      <div  className={`toast-notice-content ${type}`}>
        <svg className='icon' aria-hidden='true'>
          <use xlinkHref={`#${icons[type]}`} />
        </svg>
        <span>{content}</span>
      </div>
    </div>
  )
}

export default React.memo(Notice)
