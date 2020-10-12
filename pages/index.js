import Link from 'next/link'
import Router from 'next/router'
import '../styles/test.css'
import {Button} from 'antd'
const Home = () => {
  const goToB = () => {
    Router.push('/kuangB')
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="kuangA"><a href="">去KuangA</a></Link>
        <Link href="kuangB"><a href="">去KuangB</a></Link>
        <div>
          <Button>测试AntD</Button>
        </div>
        <div>
          <button onClick={() => { Router.push('/kuangA') }}>kuangA</button>
          <button onClick={goToB}>kuangB</button>
        </div>
      </div>
    </>
  )
}
export default Home