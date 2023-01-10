import { WhiteSpace, Button } from 'antd-mobile'

const FunCom = (props) => {
  const { count } = props
  const handleClick = () => {
    setTimeout(() => {
      console.log('------FunCom-------', count)
    }, 3000);
  }
  return (
    <section>
      <WhiteSpace />
      <h2>FunCom-Click: {count}</h2>
      <Button type="primary" onClick={ handleClick }>FunCom-Click</Button>
    </section>
  )
}

export default FunCom