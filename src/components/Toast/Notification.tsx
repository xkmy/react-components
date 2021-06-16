import React, { useState, useImperativeHandle, forwardRef, Ref } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Notice from './Notice'
import { NoticeType } from './types'

type Props = {
  ref?: Ref<NotificationType>
  children?: React.ReactNode
}

export type NotificationType = {
  removeNotice: (key: string) => void
  addNotice: (notice: NoticeType) => () => void
}

const Notification = forwardRef((props: Props, ref: Ref<NotificationType>) => {
  const [time] = useState(300)
  const [notices, setNotices] = useState<NoticeType[]>([])

  const getNoticeKey = () => {
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  const removeNotice = (key: string) => {
    setNotices(notices =>
      notices.filter(notice => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, time)
          return false
        }
        return true
      })
    )
  }

  const addNotice = (notice: NoticeType) => {
    const key = getNoticeKey()
    if (notices.every(item => item.key !== notice.key)) {
      if (notices.length && notices[notices.length - 1].type === 'loading') {
        setTimeout(() => {
          setNotices([...notices, { ...notice, key }])
        }, time)
      } else {
        setNotices([...notices, { ...notice, key }])
      }

      if (notice.duration) {
        setTimeout(() => {
          removeNotice(key as string)
        }, notice.duration)
      }
    }

    return () => {
      removeNotice(key as string)
    }
  }

  useImperativeHandle(ref, () => {
    return {
      removeNotice,
      addNotice
    }
  })

  return (
    <TransitionGroup className='toast-notification'>
      {notices.map(notice => (
        <CSSTransition key={notice.key} classNames='notice' timeout={time}>
          <Notice {...notice} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
})

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref: any = React.createRef()
  ReactDOM.render(<Notification ref={ref} />, div)
  return {
    addNotice(notice: NoticeType) {
      // removeNotice
      return ref.current.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

export default createNotification()
