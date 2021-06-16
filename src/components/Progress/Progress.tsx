import React, { FC } from 'react'
import './progress.scss'

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ProgressProps {
  percent: number
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  type?: ThemeProps
}

const Progress: FC<ProgressProps> = props => {
  const { percent, styles, strokeHeight = 15, showText = true, type = 'primary' } = props
  return (
    <div className='progress-bar' style={styles}>
      <div className='progress-bar-outer' style={{ height: `${strokeHeight}px` }}>
        <div className={`progress-bar-inner color-${type}`} style={{ width: `${percent}%` }}>
          {showText && <span className='inner-text'>{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

export default Progress
