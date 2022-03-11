import React from "react";
import {
  BgImage,
  Container,
  Content,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  CTALogoTwo,
} from "./styles";
import logoOne from "Assets/Images/cta-logo-one.svg";
import logoTwo from "Assets/Images/cta-logo-two.png";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={logoOne} alt="logo one" />
          <SignUp>GET It ALL THERE </SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src={logoTwo} alt="logo one" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
