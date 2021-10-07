import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">FitHOU</a>
        <span className="ml-1">&copy; 2021 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.facebook.com/phongmongcong.2606/" target="_blank" rel="noopener noreferrer">Nguyễn Đình Phong - phongnguyendx@gmail.com</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
