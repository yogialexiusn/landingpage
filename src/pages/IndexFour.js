import React from 'react'
import AboutOne from '../section/about/AboutOne'
import BannerFour from '../section/banner/BannerFour'
import CtaFour from '../section/cta/CtaFour'
import { FeatureThree, FeatureThreeAlt } from '../section/feature/FeatureThree'
import FooterThree from '../section/footer/FooterThree'
import PricingThree from '../section/pricing/PricingThree'
import ServiceFour from '../section/service/ServiceFour'
import History from '../section/history/History'
import OrganizationChard from '../section/organization-chard/OrganizationChard'
import ItService from '../section/it-service/it-service'
import Solution from '../section/solution/solution'
import Platform from '../section/platform/platform'
import DataCenter from '../section/data-center/data-center'
import AboutCompany from '../section/about-company/about-company'


const IndexFour = (props) => {
  return (
    <div className="nk-main">
        <BannerFour className="header-32 has-header-main-s1 bg-dark" id="#BannerFour" />
        <AboutCompany className="section-service pb-0" id="#about-company" />
        <History className="section-service pb-0" id="#history" />
        <OrganizationChard className="section-service pb-0" id="#organization-chard" />
        <ItService className="section-service pb-0" id="#it-service" />
        <Solution className="section-service pb-0" id="#solution" />
        <Platform className="section-service pb-0" id="#platform" />
        <DataCenter className="section-service pb-0" id="#data-center" />


        {/* <ServiceFour className="section-service pb-0" id="#service" />
        <FeatureThree className="section-feature pb-0" id="#features" />
        <FeatureThreeAlt className="section-feature pb-0" />
        <PricingThree className="section-pricing pb-0" id="#pricing" />
        <AboutOne className="section-about" id="#story" /> */}
        <CtaFour className="section-cta bg-lighter" id="#cta" />
        <FooterThree className=" bg-dark is-dark section section-sm" id="#footer" />
    </div>
  )
}

export default IndexFour
