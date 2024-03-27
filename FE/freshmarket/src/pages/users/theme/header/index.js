import { memo, useState } from "react";
import "./style.scss"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { formatter } from "utils/formatter";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTERS } from "utils/router"


const Header = () => {
    const [menus, setMenu] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.SHOP,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCTS,
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ROUTERS.USER.MEAL,
                },
                {
                    name: "Rau củ",
                    path: ROUTERS.USER.VEGETABLES,
                },
                {
                    name: "Thức ăn nhanh",
                    path: ROUTERS.USER.FASTFOOD,
                },
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.POSTS,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACT,
        },
    ])
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li>
                                    <IoMail />hello@gmail.com
                                </li>
                                <li>
                                    Miễn phí ship đơn hàng từ  {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header-top-right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <FaFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaSquareInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="header-logo">
                            <h2>FRESH MARKET</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <nav className="header-menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="header-cart">
                            <div className="header-cart-price">
                                <span>{formatter(176000)}</span>
                            </div>   
                            <ul>
                                <li>
                                    <Link to="#">
                                        <FaShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
        

    )
};

export default memo(Header);