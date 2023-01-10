import { WhiteSpace, Button } from 'antd-mobile'
import { useEffect, useState } from 'react'

const UseEffect0 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(`你点击了${count}次`)
    }, 3000)
  })

  return (
    <section>
      <h3>你点击了--{count}--次</h3>
      <Button type="primary" onClick={() => {setCount(count + 1)}}>setCount</Button>
      <WhiteSpace />
    </section>
  )
}

export default UseEffect0