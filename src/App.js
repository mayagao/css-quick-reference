import React, { Component } from 'react';

import { styles } from "./components/styles";
import { cssProperties } from "./components/css_properties";


const highlightItemClass = color =>
  `bb relative dib ml2 highlighted-item bw2 b--${color} bg-washed-${color} ph1 pv1 ${color} fw5`;

const propertyList = {
  animation: ["animation"],
  flex: ["flex-flow", "justify-content", "align-items"],
  "flex children": ["flex", "align-self"],
  grid: ["grid", "grid-auto-flow", "grid-gap", "place-items", "place-content"],
  "grid children": ["grid-area", "place-self"],
  transform: ["transform"]
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "grid" };
  }

  setActiveItem(cp) {
    this.setState({ activeItem: cp });
  }

  render() {
    return (
      <div className="App">

        <div className={`${styles.limiter} cheatsheet-container`}>
          <h1 className="f3">CSS Quick Reference</h1>

          <div id="cheatsheet-container" className="mt4 dg">
            <aside className="sidebar mr4 f6">
              <ul className="list">
                {Object.keys(propertyList).map((cp, i) => (
                  <li
                    key={i}
                    onClick={() => this.setActiveItem(cp)}
                    className={`
              ${
                this.state.activeItem === cp ? "o-100" : "o-50"
              } glow pointer pv1 mb1`}
                  >
                    {cp}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="content code f7">
              {propertyList[this.state.activeItem].map((ai, i) => (
                <div key={i} className="mb5">
                  <div className="bg-light-2 property-reset ph4 pt4 pb5 br--top br3">
                    {/* <div className='br2 bg-light-2 mb3 f7 o-30 ttu tracked dib'>shorthand</div>*/}

                    <div>
                      {ai}:
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <span
                            key={i}
                            className={highlightItemClass(ob.color)}
                          >
                            {ob.value}
                          </span>
                        );
                      })};
                    </div>
                  </div>

                  <div className="bg-light-1 ph4 pb4 pt4 br3 br--bottom">
                    {/* <div className="br2 bg-light-2 f7 o-30 ttu tracked mb4 dib">
                      values
                    </div>*/}
                    <div className="property-reset ">
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <div key={i} className={`${i > 0 && "mt4"}`}>
                            <span
                              className={`in-list highlighted-item mr4 bg-washed-${
                                ob.color
                              } ${ob.color}`}
                            />
                            {a}
                            <div className="ml4 lh-copy gray mt2">
                              {ob.description}{" "}
                              {!ob.showDetails && ob.values.join("/")}
                            </div>
                            {ob.showDetails && (
                              <div className="mt2">{ob.showDetails()}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt3 f6 tc gray lh-copy ph6">
            Explanations for CSS properties that are a bit
            confusing. View the source code or file an issue <a className='blue link dim' href="https://github.com/mayagao/css-quick-reference">here</a>.  <div className='pt2 pb3'> <a className='blue link dim' href="http://mayagao.com/">mayagao.com</a> </div> <span  aria-label='octopus' role='img' className="f5"> 🐙</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
