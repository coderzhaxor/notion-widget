import { useState } from 'react'
import Clock from '../pages/Clock/Clock'
import './Index.css'

function Index() {
  const [time, setTime] = useState(0)

  return (
    <div className="Index">
      <Clock />
    </div>
  )
}

export default Index
