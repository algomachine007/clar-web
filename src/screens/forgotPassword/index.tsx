import React, { useState } from "react";
import Loading from "../../components/Loading";
import { useStores } from "../../models";
import appLogo from "../../images/app-logo.svg";
import "./index.less";

import ForgotPasswordStep1 from "../../components/ForgotPasswordStep1";
import ForgotPasswordStep2 from "../../components/ForgotPasswordStep2";
import { useHistory } from "react-router";
import { ROUTES } from "../../constants/routes";
import ForgotPasswordStep3 from "../../components/ForgotPasswordStep3";
import Button from "../../components/Button";
import checkCircle from "../../images/check-circle.svg";

const ForgotPassword = () => {
  const history = useHistory();

  const { userStore } = useStores();

  const [isLoading, setIsLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const onForgotPasswordStep1Submit = (data: any) => {
    setCurrentStep(1);
  };

  const onForgotPasswordStep2Submit = (data: any) => {
    setCurrentStep(2);
  };

  const onForgotPasswordStep3Submit = (data: any) => {
    //submit form

    setCurrentStep(3);
  };

  const SuccessBanner = () => {
    return (
      <div className="success-banner">
        <div className="success-banner-content">
          <img src={checkCircle} alt="success logo" className="logo" />
          <h5 className="message">Password Changed Successfully!</h5>

          <Button
            label="Proceed to Login"
            onClick={() => {
              history.push(ROUTES.loginPage);
            }}
            className="proceed-button"
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="forgotPassword-page"
      className=" d-flex align-items-center justify-content-center"
    >
      {isLoading && <Loading />}

      <div className="forgot-password-container">
        <div className="logo-container">
          <img src={appLogo} />

          <h1 className="header">Clarity</h1>
        </div>

        {currentStep == 0 && (
          <ForgotPasswordStep1
            onBackPress={() => {
              history.push(ROUTES.loginPage);
            }}
            forgotPasswordSubmit={onForgotPasswordStep1Submit}
          />
        )}

        {currentStep == 1 && (
          <ForgotPasswordStep2
            onBackPress={() => {
              setCurrentStep(0);
            }}
            forgotPasswordSubmit={onForgotPasswordStep2Submit}
          />
        )}

        {currentStep == 2 && (
          <ForgotPasswordStep3
            onBackPress={() => {
              setCurrentStep(1);
            }}
            forgotPasswordSubmit={onForgotPasswordStep3Submit}
          />
        )}

        {currentStep == 3 && <SuccessBanner />}
      </div>
    </div>
  );
};

export default ForgotPassword;