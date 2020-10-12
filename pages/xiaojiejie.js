import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Xiaojiejie =({router,list})=>{
    return(
        <>
            <div>{router.query.name}来为我服务了</div>
            <div>{list}</div>
            <Link href='/'><a href="">返回首页</a></Link>
        </>
    )
}


Xiaojiejie.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios('https://www.fastmock.site/mock/f54236b7fb320bac2fd44a599897c2f4/redux/api/getlist')
            .then(res=>{
                console.log('远程数据', res);
                resolve(res.data.data)
            })
    })
    return await promise
}

export default withRouter(Xiaojiejie)