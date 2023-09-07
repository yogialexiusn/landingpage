import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { Pricing, PricingAction } from '../../components/pricingInfo/PricingInfo'
import { ListChecked } from '../../components/styledList/StyledList'
import { Section, SectionHead } from '../../layout/section/Section'
import { PricingListThree } from './PricingData'
import ProductImg1 from '../../images/product/a.jpg'
import ProductImg2 from '../../images/product/b.jpg'
import ProductImg3 from '../../images/product/c.jpg'
import ProductImg4 from '../../images/product/d.jpg'
const PricingThree = (props) =>{
    return(
                <div id="carouselExCap" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExCap" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExCap" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExCap" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner text-light">
            <div class="carousel-item active">
            <img src={ProductImg1} class="d-block w-100" alt="product-img" />
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={ProductImg2} class="d-block w-100" alt="product-img" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={ProductImg3} class="d-block w-100" alt="product-img" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExCap" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExCap" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
        </div>
    )
}

export default PricingThree
