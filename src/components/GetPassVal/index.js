import { WhiteSpace, Button } from 'antd-mobile'
import { useRef, useState } from 'react'

const GetPassVal = () => {
  const [count, setCount] = useState(1)

  const prevCountRef = useRef(1);
  const prevCount = prevCountRef.current
  prevCountRef.current = count
  const handleClick = () => {
    setCount(count + prevCount)
  }

  return (
    <section>
      <h3>{count}</h3>
      <p>prevCount: {prevCount}</p>
      <p>currentCount: {count}</p>
      <WhiteSpace />
      <Button type="primary" onClick={handleClick}>SetCount</Button>
      <WhiteSpace />
    </section>
  )
}

export default GetPassVal