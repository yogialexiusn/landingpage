import React from "react";
import ErrorImage from "../../images/gfx/error-404.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Error404Modern = () => {
  return (
    <PageContainer>
      <div className="block nk-block-middle wide-md mx-auto">
        <div className="block-content nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Oops! Why you’re here?</h3>
            <p className="nk-error-text">
              We are very sorry for inconvenience. It looks like you’re try to
              access a page that either has been deleted or never existed.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Back To Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default Error404Modern;
