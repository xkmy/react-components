import React, { FC } from 'react'
import { trim } from 'ts-tool-library'
import './button.scss'

export type ButtonSize = 'default' | 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface ButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  type?: ButtonType
  children: React.ReactNode
  href?: string
}

const Button: FC<ButtonProps> = props => {
  const {
    type = 'default',
    size = 'default',
    className,
    disabled,
    children,
    href,
    ...restProps
  } = props

  const classes = trim(`btn ${className || ''} ${type ? `btn-${type}` : ''} ${
    size !== 'default' ? `btn-${size}` : ''
  } ${disabled ? 'disabled' : ''}`)

  return type === 'link' && href ? (
    <a className={classes} href={href} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

export default Button
