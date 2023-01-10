import { WhiteSpace, Button } from 'antd-mobile'
import { useState } from 'react'

const AloneState = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 3000);
  }

  return (
    <section>
      <WhiteSpace />
      <h3>{count}</h3>
      <WhiteSpace />
      <Button type="primary" onClick={() => setCount(count + 1)}>setCount</Button>
      <WhiteSpace />
      <Button type="primary" onClick={handleClick}>Delay SetCount</Button>
    </section>
  )
}

export default AloneState