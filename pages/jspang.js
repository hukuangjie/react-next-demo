import { useState } from 'react'


function Jspang() {
    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }
    return (
        <>
            <div>技术胖next教程</div>
            <button onClick={changeColor}>切换</button>
            <style jsx>
                {`
                div {
                    color:${color};
                }
                `}
            </style>
        </>
    )
}
export default Jspang