import React from "react";
import BannerFour from "../section/banner/BannerFour";
import CtaFour from "../section/cta/CtaFour";
import FooterThree from "../section/footer/FooterThree";
import History from "../section/history/History";
import OrganizationChard from "../section/organization-chard/OrganizationChard";
import ItService from "../section/it-service/it-service";
import Solution from "../section/solution/solution";
import Platform from "../section/platform/platform";
import DataCenter from "../section/data-center/data-center";
import AboutCompany from "../section/about-company/about-company";
import Business from "./page/Business";
import Partner from "./page/Partner";
import { FeatureOne, FeatureOneAlt } from "../section/feature/FeatureOne";
import News from "./page/News";

const IndexFour = (props) => {
  return (
    <div className="nk-main">
      <BannerFour
        className="header-32 has-header-main-s1 bg-dark"
        id="#BannerFour"
      />
      <FeatureOne className="section-feature pb-0" id="#feature" />
      <FeatureOneAlt className="section-feature" />
      {/* <AboutCompany className="section-service pb-0" id="#about-company" /> */}
      <History className="section-service pb-0" id="#history" />
      <OrganizationChard
        className="section-service pb-0"
        id="#organization-chard"
      />
      <ItService className="section-service pb-0" id="#it-service" />
      <Solution className="section-service pb-0" id="#solution" />
      {/* <Platform className="section-service pb-0" id="#platform" /> */}
      <DataCenter className="section-service pb-0" id="#data-center" />
      <Business className="section-service pb-0" id="#business" />
      <Partner className="section-service pb-0" id="#partner" />
      {/* <News className="section-service pb-0" id="#news" /> */}

      {/* <CtaFour className="section-cta bg-lighter" id="#cta" /> */}
      <FooterThree
        className=" bg-dark is-dark section section-sm"
        id="#footer"
      />
    </div>
  );
};

export default IndexFour;
