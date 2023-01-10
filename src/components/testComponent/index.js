import { WhiteSpace, Button } from 'antd-mobile'

const TestComponent = (props) => {
  const { title } = props;
  return (
    <section>
      <WhiteSpace />
      <Button type="warning" size="small">{ title }</Button>
      <WhiteSpace />
    </section>
  );
}
export default TestComponent