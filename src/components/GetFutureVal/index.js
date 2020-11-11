import { WhiteSpace, Button } from 'antd-mobile'
import { useState, useRef } from "react"

const GetFutureVal = () => {
  const [count, setCount] = useState(0)

  let currentCount = useRef(count)
  
  currentCount.current = count

  const handleClick = () => {
    setTimeout(() => {
      setCount(currentCount.current +1)
    }, 3000);
  }

  return (
    <section>
      <h3>{count}</h3>
      <WhiteSpace />
      <Button type="primary" onClick={() => setCount(count + 1)}>SetCount</Button>
      <WhiteSpace />
      <Button type="primary" onClick={handleClick}>Delay SetCount</Button>
    </section>
  )
}

export default GetFutureVal