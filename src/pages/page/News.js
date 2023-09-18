import React, { useState, useEffect } from "react";
import LogoDrak2x from "../../images/logo-dark2x.png";
import LogoLight2x from "../../images/logo2x.png";
import Menu from "../../layout/menu/Menu";
import MobileMenu from "../../layout/menu/MobileMenu";
import { Logo } from "../../components/logo/Logo";
import { Card, Col, Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderContent,
  HeaderMain,
  HeaderWrap,
} from "../../layout/header/Header";
import { Link } from "../../components/button/Button";
import {
  HeaderCaption,
  HeaderTitle,
} from "../../components/headerCaption/HeaderCaption";
import { BannerFourAdd } from "../../section/banner/BannerData";
import news_img from "../../images/ldci_news.png";
// import dummyNews from "./News/DummyNews";

const News = (props) => {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  // const [news, setNews] = useState(dummyNews);
  const navigate = useNavigate();

  const dummyNews = [
    {
      id: 1,
      date: "2023, 10 Januari",
      newsType: "BUSINESS",
      newsContentPlain:
        "Lorem Ipsum Weend Going to Lotte Mrart Going toLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem IpsumLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Weend Going to Lotte Mrart Going to Zebra Wihtout End ",
      newsTitle: "JUDUL BERITANYA",
    },
    {
      id: 2,
      date: "2023, 10 Januari",
      newsType: "NETRAL",
      newsContentPlain:
        "Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout v",
      newsTitle: "JUDUL BERITANYA TEST",
    },
  ];

  useEffect(() => {
    // let newNews = dummyNews;
    // setNews(newNews);
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    // window.scrollTo(0, 0);
    viewChange();
    window.addEventListener("resize", viewChange);
    return () => {
      window.removeEventListener("resize", viewChange);
    };
  });

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  const handleNewsDetail = async (event, item) => {
    event.preventDefault();
    let id = item.newsId;
    try {
      navigate(`/news/detail/${id}`);
    } catch (error) {
      navigate("/error", {
        state: { message: "Failed to show news detail page..." },
      });
    }
  };

  let divElements;
  // console.log("yogi", divElements);
  // console.log("yogi2", news);
  if (dummyNews != null) {
    divElements = dummyNews.map((item, index) => {
      return (
        <div key={item.id} class="text-left d-flex flex-row bg-lighter mt-5 ">
          <Card class="shadow border">
            <Link
              to="#"
              onClick={(e) => handleNewsDetail(e, item)}
              text-lowercase
            >
              <img class="w-30" src={news_img} alt="" />
              <div
                className="ms-5 d-block w-100 si"
                style={{ textAlign: "left" }}
              >
                <h5>{item.date}</h5>
                <h4>
                  <span text-left>[{item.newsType}]</span>
                  &nbsp;
                  <span>{item.newsTitle}</span>
                </h4>
                <p>{item.newsContentPlain.substring(0, 500) + "..."}</p>
              </div>
            </Link>
          </Card>
        </div>
      );
    });
  }

  return (
    <Header
      className={props.className && props.className}
      id={props.id && props.id}
    >
      <HeaderMain className={` ${offset > 0 ? "has-fixed" : ""}`}>
        <Container className="header-container">
          <HeaderWrap>
            <div className="header-logo">
              <Logo to="/IndexFour" dark={LogoDrak2x} light={LogoLight2x} />
            </div>
            <div className="header-toggle" onClick={() => setToggle(!toggle)}>
              <button
                className={`menu-toggler ${toggle === true ? "active" : ""}`}
              >
                <em className="menu-on icon ni ni-menu"></em>
                <em className="menu-off icon ni ni-cross"></em>
              </button>
            </div>
            <nav
              className={`header-menu menu ${toggle === true ? "active" : ""} ${
                mobileView ? "mobile-menu" : ""
              }`}
            >
              {!mobileView ? (
                <Menu className="ms-lg-auto" data={BannerFourAdd} />
              ) : (
                <MobileMenu data={BannerFourAdd} />
              )}
              <ul className="menu-btns">
                <li>
                  <Link
                    to="/landing/pages/auths/auth-login"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary btn-lg"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
            {toggle && window.innerWidth < 992 && (
              <div
                className="header-overlay"
                onClick={() => setToggle(!toggle)}
              ></div>
            )}
          </HeaderWrap>
        </Container>
      </HeaderMain>
      <HeaderContent className="py-6 is-black mt-lg-n1 mt-n3">
        <Container>
          <Row className="row justify-content-center g-gs">
            <Col lg="12" md="1 ">
              <HeaderCaption>
                <HeaderTitle className="mt-4 center">NEWS</HeaderTitle>
                <div>
                  <img src={news_img} />
                  <div>
                    <div class="mt-2 d-flex flex-row bg-lighter">
                      <input
                        type="text"
                        class="form-control"
                        id="default-01"
                        placeholder="Search"
                      />

                      <a href="#" class="btn ms-3 btn-round btn-primary">
                        <em class="icon ni ni-search"></em>
                        <span>Search News</span>
                        {""}
                      </a>
                    </div>
                  </div>
                </div>
              </HeaderCaption>
              {divElements}
              <div className="center mt-6">
                <nav>
                  {" "}
                  <ul class="pagination pagination-lg">
                    {" "}
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">1</span>
                    </li>{" "}
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>{" "}
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>{" "}
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </HeaderContent>
    </Header>
  );
};

export default News;
