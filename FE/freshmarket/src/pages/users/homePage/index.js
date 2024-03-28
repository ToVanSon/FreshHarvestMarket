import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"
import cat1Img from "assets/users/image/categories/cat1.jpg";
import cat2Img from "assets/users/image/categories/cat2.jpg";
import cat3Img from "assets/users/image/categories/cat3.jpg";
import cat4Img from "assets/users/image/categories/cat4.jpg";
import cat5Img from "assets/users/image/categories/cat5.jpg";
import cat6Img from "assets/users/image/categories/cat6.jpg";

import featured1Img from "assets/users/image/featured/feature-1.jpg";
import featured2Img from "assets/users/image/featured/feature-2.jpg";
import featured3Img from "assets/users/image/featured/feature-3.jpg";
import featured4Img from "assets/users/image/featured/feature-4.jpg";
import featured5Img from "assets/users/image/featured/feature-5.jpg";
import featured6Img from "assets/users/image/featured/feature-6.jpg";
import featured7Img from "assets/users/image/featured/feature-7.jpg";
import featured8Img from "assets/users/image/featured/feature-8.jpg";

import banner1Img from "assets/users/image/banner/banner1.jpg";
import banner2Img from "assets/users/image/banner/banner2.jpg";

import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";

import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const HomePage = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô"
        },
        {
            bgImg: cat3Img,
            name: "Sữa hộp"
        },
        {
            bgImg: cat4Img,
            name: "Rau củ tươi"
        },
        {
            bgImg: cat5Img,
            name: "Thịt lợn"
        },
        {
            bgImg: cat6Img,
            name: "Thịt bò"
        },
    ]

    const featuredProducts = {
        all: {
            title: "Toàn bộ",
            products: [
                {
                    img: featured1Img,
                    name: "Thịt bò nạt",
                    price: 20000,
                },
                {
                    img: featured2Img,
                    name: "Chuối",
                    price: 17000,
                },
                {
                    img: featured3Img,
                    name: "Sữa",
                    price: 18000,
                },
                {
                    img: featured4Img,
                    name: "Ổi",
                    price: 8100,
                },
                {
                    img: featured5Img,
                    name: "Táo",
                    price: 9100,
                },
                {
                    img: featured6Img,
                    name: "Xoài",
                    price: 89100,
                },
                {
                    img: featured7Img,
                    name: "Nho",
                    price: 122200,
                },
                {
                    img: featured8Img,
                    name: "Quýt",
                    price: 8900,
                },
            ]
        },
        freshMeat: {
            title: "Thịt tươi",
            products: [
                {
                    img: featured1Img,
                    name: "Thịt bò nạt",
                    price: 20000,
                },
                {
                    img: featured6Img,
                    name: "Xoài",
                    price: 89100,
                },
                {
                    img: featured7Img,
                    name: "Nho",
                    price: 122200,
                },
                {
                    img: featured8Img,
                    name: "Quýt",
                    price: 8900,
                },
            ]
        },
        fruits: {
            title: "Trái cây",
            products: [
                {
                    img: featured2Img,
                    name: "Chuối",
                    price: 17000,
                },
                {
                    img: featured3Img,
                    name: "Sữa",
                    price: 18000,
                },
                {
                    img: featured4Img,
                    name: "Ổi",
                    price: 8100,
                },
            ]
        },
        fastFood: {
            title: "Thức ăn nhanh",
            products: [
                {
                    img: featured3Img,
                    name: "Sữa",
                    price: 18000,
                },
                {
                    img: featured4Img,
                    name: "Ổi",
                    price: 8100,
                },
            ]
        },
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            console.log(key, index);

            tabList.push(<Tab key={index}>{data[key].title}</Tab>)

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured-item">
                        <div className="featured-item-pic" style={{backgroundImage: `url(${item.img})`,}}>
                            <ul  className="featured-item-pic-hover">
                                <li>
                                    <FaEye />
                                </li>
                                <li>
                                    <FaShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className="featured-item-text">
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>)
            })
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>

                {tabPanels.map((item, key) => (
                    <TabPanel>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
            </Tabs>
        )
    }

    return (
        <>
            <div className="container container-categories-slider">
            <Carousel responsive={responsive} className="categories-slider">
                {sliderItems.map((item, key) => (
                    <div className="categories-slider-item" style={{ backgroundImage: `url(${item.bgImg})`}} key={key}>
                        <p>{item.name}</p>
                    </div>
                ))}
                
            </Carousel>
            </div>

            <div className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featuredProducts)}
                </div>
            </div>

            <div className="container">
                <div className="banner">
                    <div className="banner-pic">
                        <img src={banner1Img} alt="banner"></img>
                    </div>
                    <div className="banner-pic">
                        <img src={banner2Img} alt="banner"></img>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(HomePage);