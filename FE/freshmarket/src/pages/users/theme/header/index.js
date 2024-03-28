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
import { FaList } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ROUTERS } from "utils/router"


const Header = () => {

    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState([
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
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {menu.child && (
                                            <ul className="header-menu-dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={`${menuKey}-${childKey})`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        
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

            <div className="container">
                <div className="row categories-container">
                    <div className="col-xl-3 categories">
                        <div className="categories-all" onClick={() => setShowCategories(!isShowCategories)}> 
                             <FaList/>Danh sách sản phẩm</div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li><Link to="#">Thịt tươi</Link></li>
                                <li><Link to="#">Rau củ</Link></li>
                                <li><Link to="#">Nước trái cây</Link></li>
                                <li><Link to="#">Trái cây</Link></li>
                                <li><Link to="#">Hải sản</Link></li>
                            </ul>
                        )}
                        
                    </div>
                    <div className="col-lg-9 search-container">
                        <div className="search">
                            <div className="search-form">
                                <form action="">
                                    <input type="text" name="" value="" placeholder="Bạn đang tìm gì?"></input>
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="search-phone">
                                <div className="search-phone-icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="search-phone-text">
                                    <p>0821.271.231</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item">
                            <div className="banner-item-text">
                                <span>Trái cây tươi</span>
                                <h2>Rau quả <br/> sạch 100%</h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary">Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
        
        

    )
};

export default memo(Header);