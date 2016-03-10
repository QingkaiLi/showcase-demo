import React from "react";
import ReactDOM from "react-dom";

import electrodeLogo from "../images/electrode.png";
import {SearchText} from "../kl/klreact-searchable";
import faqItems from "./faq-items";

let searchItems = []
    .concat(faqItems);

export default class Home extends React.Component {
  render() {
    return (
      <div className="component-documentation">
          <div style={{textAlign: "center"}}>
              <img
                  src={electrodeLogo}
                  style={{
                      height: 100
                  }}
              />
          </div>
          <SearchText
              inputContainer="container"
              className="form-control"
              noResultOnEmpty={true}
              items={searchItems}>
              <ComponentCarousel />
              <SearchItems />
          </SearchText>
      </div>
    )
  }
}
