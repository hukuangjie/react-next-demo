import Link from 'next/link'
import Router from 'next/router'
const Home = () => {

  // routeChangeStart
  // routeChangeComplete
  // beforeHistotyChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routerChangeStart=>路由开始变化,参数为:', ...args);
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete=>路由变化结束,参数为:', ...args);
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('4.hashChangeComplete=>hash路由变化结束,参数为:', ...args);
  })
  const toXiaojiejie = () => {
    Router.push({
      pathname: "xiaojiejie",
      query: {
        name: "博多"
      }
    })
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="xiaojiejie?name=净空"><a href="">小姐姐1</a></Link>
        <br />
        <Link href="xiaojiejie?name=仓老"><a href="">小姐姐2</a></Link>
      </div>
      <div>
        <button onClick={toXiaojiejie}>小姐姐诶</button>
      </div>
      <div>
        <Link href={{ pathname: 'xiaojiejie', query: { name: "仓老" } }}><a href="">小姐姐2</a></Link>
      </div>
    </>
  )
}
export default Home