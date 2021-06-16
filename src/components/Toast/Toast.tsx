import notificationDOM from './Notification'
import { Type, NoticeType } from './types'
import './toast.scss'

let notification: {
  addNotice(notice: NoticeType): any
  destroy(): void
}

const notice = (type: Type, content: React.ReactNode, duration = 2000, onClose?: () => void) => {
  if (!notification) notification = notificationDOM
  return notification.addNotice({ type, content, duration, onClose })
}

export default {
  info(content: React.ReactNode, duration?: number, onClose?: () => void) {
    return notice('info', content, duration, onClose)
  },
  success(content: React.ReactNode, duration?: number, onClose?: () => void) {
    return notice('success', content, duration, onClose)
  },
  warning(content: React.ReactNode, duration?: number, onClose?: () => void) {
    return notice('warning', content, duration, onClose)
  },
  error(content: React.ReactNode, duration?: number, onClose?: () => void) {
    return notice('error', content, duration, onClose)
  },
  loading(content: React.ReactNode, duration = 0, onClose?: () => void) {
    return notice('loading', content, duration, onClose)
  }
}
