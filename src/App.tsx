import React from 'react'
import Toast from './components/Toast/Toast'
import Button from './components/Button/Button'
import Progress from './components/Progress/Progress'

function App() {
  return (
    <div className='App'>
      <div onClick={() => Toast.info('1')} style={{ zIndex: 100 }}>
        Toast1
      </div>
      <div onClick={() => Toast.success('1')} style={{ zIndex: 100 }}>
        success
      </div>
      <div
        onClick={() => {
          const hide = Toast.loading('加载中...', 1000)
          setTimeout(hide, 2000)
        }}
        style={{ zIndex: 100 }}
      >
        loading
      </div>

      <Button type='danger'>123</Button>
      <Progress percent={20}></Progress>
    </div>
  )
}

export default App
