import React, { useState } from 'react'

function Listitem() {
    const [count, setCount] = useState(0);
    const handleBuy = () => {
        setCount(count + 1)
    }
    const handleSell = () => {
        if (count > 0)
            setCount(count - 1)
    }
    return (
        <div>
            <div className="list-item">
                <i class="fa-brands fa-apple-pay"></i>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU" alt="" />
                    <div className="body">
                        <h2 className="sub-title">Airpods Pro</h2>
                        <p>24900</p>
                        <div className="action">
                            <a onClick={handleSell}><i className="fa-regular fa-circle-left"></i></a>
                            <p>{count}</p>
                            <a onClick={handleBuy}><i className="fa-regular fa-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png" alt="" />
                    <div className="body">
                        <h2 className="sub-title">Apple Watch</h2>
                        <p>40900</p>
                        <div className="action">
                            <a><i className="fa-regular fa-circle-left"></i></a>
                            <p> 0 </p>
                            <a><i className="fa-regular fa-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://pngimg.com/uploads/macbook/macbook_PNG8.png" alt="" />
                    <div className="body">
                        <h2 className="sub-title">Macbook Pro</h2>
                        <p>199900</p>
                        <div className="action">
                            <a><i className="fa-regular fa-circle-left"></i></a>
                            <p> 0</p>
                            <a><i className="fa-regular fa-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073" alt="" />
                    <div className="body">
                        <h2 className="sub-title">iphone 11 pro</h2>
                        <p>106600</p>
                        <div className="action">
                            <a><i className="fa-regular fa-circle-left"></i></a>
                            <p> 0</p>
                            <a><i className="fa-regular fa-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156" alt="" />
                    <div className="body">
                        <h2 className="sub-title">ipad pro pro</h2>
                        <p>71900</p>
                        <div className="action">
                            <a ><i className="fa-regular fa-circle-left"></i></a>
                            <p> {count}</p>
                            <a ><i className="fa-regular fa-circle-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listitem