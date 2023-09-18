import React, { useState, useEffect } from "react";
import LogoDrak2x from "../../images/logo-dark2x.png";
import LogoLight2x from "../../images/logo2x.png";
import Menu from "../../layout/menu/Menu";
import MobileMenu from "../../layout/menu/MobileMenu";
import { Logo } from "../../components/logo/Logo";
import { useNavigate } from "react-router-dom";
// import { Button } from "../../components/button/Button";
import { Card, Col, Container, Row } from "reactstrap";
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
import career from "../../images/career.jpg";
import { Button } from "../../components/button/Button";
// import dummyNews from "./News/DummyNews";

const Career = (props) => {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  // const [news, setNews] = useState(dummyNews);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onClickModal = () => {
    setShowModal(!showModal);
  };

  const dummyJob = [
    {
      id: 1,
      title: "Developer",
      department: "SM",
      team: "IT",
      location: "Jakarta",
      country: "Indonesia",
      url: "www.facebook.com",
      descriptionPlain:
        "Lorem Ipsum Saat BebeLorem Ipsum Saat Beberapa Kali Lorem Ipsum Saat Beberapa Kali rapa Kali ",
    },
    {
      id: 2,
      title: "Tester",
      department: "AUDIT",
      team: "IT",
      location: "Bandung",
      country: "Indonesia",
      url: "www.facebook.com",
      descriptionPlain:
        "Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali  Lorem Ipsum Saat Beberapa Kali ",
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
  if (dummyJob != null) {
    divElements = dummyJob.map((item, index) => {
      return (
        <Col lg="5" md="5">
          {/* <div className=" mb-3"> */}
          <div class="card shadow border mt-5 center bg-primary">
            {" "}
            <div class="card-header bg-primary">
              <h4> {item.title}</h4>
            </div>{" "}
            <ul class="list-group list-group-flush ">
              {" "}
              <li class="list-group-item center">
                <p>
                  {item.department} - {item.team}
                </p>
              </li>{" "}
              <li class="list-group-item center">
                <p>
                  {item.location} - {item.country}
                </p>
              </li>{" "}
              <li class="list-group-item center">{item.descriptionPlain}</li>{" "}
              <li class="list-group-item center">
                <Button>Apply</Button>
              </li>{" "}
            </ul>
          </div>
          {/* </div> */}
        </Col>
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
            <Col lg="10" md="5 ">
              <HeaderCaption>
                <HeaderTitle className="mt-4 center">CAREER</HeaderTitle>
                <div>
                  <img src={career} />
                  <div className="bg-primary">
                    <div class="mt-2 d-flex flex-row ">
                      <input
                        type="text"
                        class="form-control"
                        id="default-01"
                        placeholder="Search"
                      />

                      <a href="#" class="btn ms-3 btn-round btn-primary">
                        <em class="icon ni ni-search"></em>
                        <span>Search Career</span>
                        {""}
                      </a>
                    </div>
                  </div>
                </div>
              </HeaderCaption>

              <div class="d-flex justify-content-around">{divElements}</div>
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

export default Career;
