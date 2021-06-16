import React from "react"

export type Type = 'info' | 'success' | 'warning' | 'error' | 'loading'

export type NoticeType = {
  type: Type
  key?: string
  content: React.ReactNode
  duration?: number
  onClose?: () => void
}