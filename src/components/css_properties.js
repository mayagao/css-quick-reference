import React from 'react';

export const cssProperties = {
  animation: {
    "animation-name": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "animation-duration": {
      color: "green",
      value: "2s",
      description:
        "How long an animation should take to complete, e.g.: 3s, 5000ms.",
      values: []
    },
    "animation-delay": {
      color: "green",
      value: "1s",
      description: "A delay for the start of an animation, e.g. 3s, 5000ms.",
      values: []
    },
    "animation-timing-function": {
      color: "purple",
      value: "ease-in-out",
      description: "The speed curve of an animation.",
      values: [
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear",
        "step-start",
        "step-end",
        "cubic-bezier(0.1, 0.7, 1.0, 0.1)",
        "steps(6, start)",
        "steps(6, end)"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s  ${tf} infinite alternate`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "animation-iteration-count": {
      color: "purple",
      description:
        "The number of times an animation. A number, e.g. 10, or inifinite.",
      value: "10",
      values: []
    },
    "animation-direction": {
      color: "blue",
      description:
        "Whether an animation should be played forwards, backwards or in alternate cycles.",
      value: "alternate",
      values: ["normal", "reverse", "alternate", "alternate-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s 3s ease-in-out infinite ${tf}`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "animation-fill-mode": {
      color: "blue",
      description:
        "The style of the element when the animation is not playing.",
      value: "forwards",
      values: ["non(default)", "forwards", "backwards", "both"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s 3s ease-in-out ${tf}`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },

    "animation-play-state": {
      color: "blue",
      description:
        "Whether the animation is running or paused. Values: runing(default) or paused.",
      value: "running",
      values: ["runing(default)", "paused"]
    }
  },

  transform: {
    transform: {
      color: "purple",
      value: "scaleY(1.5) scaleX(0.6)",
      description: "Translate, rotate, scale, and skew elements.",
      values: [
        "none",
        "skew(20deg, 20deg)",
        "translate(20px, 30px)",
        "perspective(600px) translate3d(20px, 30px, 100px)",
        "rotate(40deg)",
        "rotate3D(1, 0.4, 0.7, 40deg)",
        "scale(2)",
        "scale3D(1, 1.2, 0.7)",
        "perspective(50px) rotateX(45deg)",
        "matrix(1, 2, -1, 1, 30, 10)"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative flex flex-wrap ml4 pv3">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 pv2 relative`}>
                <div className="mr3 relative h4 b--dashed b--light-gray ba br3 flex items-center justify-center">
                  <div
                    style={{
                      transform: `${tf}`,
                      background: "#DDDAFA"
                    }}
                    className="relative h2 w2 br1 ba3"
                  />

                  <div className="relative ba b--purple absolute h2 w2 br1 ba3" />

                  <div className="w-100 bt b--purple o-30 tc absolute " />

                  <div className="h-100 bl b--purple o-30 absolute" />
                  <div className="dib bg-purple pa1 br-100 z-1 absolute" />
                </div>
                <pre className="o-50 mt2 mb2 lh-title">{tf}</pre>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "flex-flow": {
    "flex-direction": {
      color: "purple",
      description:
        "The main-axis. How flex items are placed in the container, either horizontally or vertically stacked. Default value: row.",
      value: "column",
      values: ["row", "row-reverse", "column", "column-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ flexDirection: `${tf}`, minHeight: 134 }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>

                <div
                  style={{ marginTop: i > 1 ? "-4.5rem" : "-4.5rem" }}
                  className={`${
                    i > 1 ? "rotate-90 w-40" : "nt5 w-90"
                  } absolute purple self-center tc`}
                >
                  <div
                    className={`${i > 1 &&
                      "h-100"} bt b--purple absolute w-100 mt1`}
                  />
                  <span className="bg-purple white br2 pv1 ph2 relative nt3">
                    main axis
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "flex-wrap": {
      color: "blue",
      description:
        "Whether flex items are forced into a single line or can be wrapped onto multiple lines. Default value: nowrap.",
      value: "wrap",
      values: ["nowrap", "wrap", "wrap-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ flexWrap: `${tf}`, width: i > 0 ? "70%" : "100%" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 blue ph1 tc bg-washed-blue br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "justify-content": {
    "justify-content": {
      color: "purple",
      description:
        "How to distribute space between flex items along the main-axis.",
      value: "space-around",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ justifyContent: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "align-items": {
    "align-items": {
      color: "purple",
      description:
        "How to distribute space between items along the cross-axis.",
      value: "center",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ height: 80, alignItems: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "align-self": {
    "align-self": {
      color: "purple",
      description: "Override the align-items value.",
      value: "baseline",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ height: 80, alignItems: `center` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{ alignSelf: `${i === 2 && tf}` }}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <pre className="w-100 o-50 mt3">
              Property rule was applied to Item 3.
            </pre>
          </div>
        );
      }
    }
  },
  flex: {
    "flex-grow": {
      color: "purple",
      description:
        "How much the item will grow relative to others when there is extra space. Number type. Default 1.",
      value: "0.4",
      values: ["0", "0.3", "0.7"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            <pre className="w-100 o-50 pv3">When there is no extra space:</pre>
            <div className=" w-60 flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `${tf} 0 auto` }}
                  className="ph2 relative pv2 mr2 mb2 purple tc bg-washed-purple br2 ba3"
                >
                  flex-grow: {tf}
                </div>
              ))}
            </div>
            <pre className="w-100 o-50 pv3">When there is extra space:</pre>
            <div className="w-100 flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `${tf} 0 auto` }}
                  className="ph2 relative pv2 mr2 mb2 purple tc bg-washed-purple br2 ba3"
                >
                  flex-grow: {tf}
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    "flex-shrink": {
      color: "purple",
      description:
        "How much the item will shrink relative to others when there isn't enough space. Number type. Default 1.",
      value: "12",
      values: ["1", "4", "1"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            <pre className="w-100 o-50 pv3">
              Ever item has a basis width of 200px:
            </pre>
            <div className="flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `1 ${tf} 200px` }}
                  className=" pv2 mr2 ph2 mb2 purple lh-copy tl tc bg-washed-purple br2 ba3"
                >
                  flex-shrink:{tf}
                  <br />
                </div>
              ))}
            </div>
          </div>
        );
      }
    },

    "flex-basis": {
      color: "blue",
      description:
        "The initial length of a flexible item. Auto(default), number, or percentage.",
      value: "500px",
      values: ["20", "80"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            <pre className="w-100 o-50 pv3">flex-grow: 0</pre>
            <div className="flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `0 1 ${Number(tf) * 2 + 100}px` }}
                  className=" pv2 mr2 ph2 mb2 blue lh-copy tl tc bg-washed-blue br2 ba3"
                >
                  flex-basis:{`${Number(tf) * 2 + 100}`}px<br />
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
  },
  grid: {
    "grid-template-rows": {
      color: "purple",
      value: "repeat(auto-fit, 1fr) /",
      description: "Line names and track sizing functions of the grid's rows.",
      values: [
        "auto auto",
        "30% 70%",
        "repeat(auto-fit, minmax(22px, 1fr))",
        "repeat(auto-fill, minmax(22px, 1fr))",
        "1fr 2fr"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            <div className="flex">
              {v.map((tf, i) => (
                <div key={i} className="">
                  <div className="purple tc mb1">{i + 1}</div>
                  <div
                    key={i}
                    style={{ gridTemplateRows: `${tf}`, height: 100 }}
                    className="dg tc "
                  >
                    {[1, 2].map((n, index) => (
                      <div
                        key={index}
                        className="relative bw1 pa1 ba b--light-2 purple ph1 tc bg-washed-purple br2 w2 ba3"
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="ml2 purple mt3">
                {v.map((tf, i) => (
                  <div key={i} className="mb1 pb1">
                    {i + 1}.{tf}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    },
    "grid-template-columns": {
      color: "purple",
      value: "minmax(max-content, 2fr)",
      description:
        "Line names and track sizing functions of the grid's columns.",
      values: [
        "repeat(2, 1fr)",
        "30% 70%",
        "auto minmax(22px, 80%)",
        "auto minmax(22px, 80%)",
        "auto fit-content(130px)",
        "auto fit-content(130px)"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4 mb4">
            <div className="flex flex-wrap">
              {v.map((tf, i) => (
                <div key={i} className="w-50 mb2 pr3">
                  <div className="purple tc mb1">{tf}</div>
                  <div
                    key={i}
                    style={{ gridTemplateColumns: `${tf}` }}
                    className="dg tc h2 "
                  >
                    {[1, 2].map((n, index) => (
                      <div
                        key={index}
                        className="relative bw1 pa2 ph3 ba b--light-2 purple ph1 tc bg-washed-purple br2 ba3"
                      >
                        {index === 1 && i === 2 && "placeholder text"}
                        {index === 1 && i === 4 && "placeholder text"}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
  },
  "grid-auto-flow": {
    "grid-auto-flow": {
      color: "purple",
      value: "dense",
      description: "How auto-placed items get flowed into the grid.",
      values: ["row", "column", "dense"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            <div className="flex flex-wrap">
              {v.map((tf, i) => (
                <div key={i} className="w-33 mb2 pr3">
                  <div className="purple tc mb1">{tf}</div>
                  <div
                    key={i}
                    style={{
                      grid: `repeat(4, 1fr) / repeat(4, 1fr)`,
                      gridAutoFlow: `${tf}`
                    }}
                    className="dg tc h4 "
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n, index) => (
                      <div
                        key={index}
                        style={{
                          gridArea: `${
                            index === 0
                              ? "auto/span 2"
                              : index === 2
                                ? "auto/span 2"
                                : "unset"
                          }`
                        }}
                        className={`${
                          index === 0 || index === 2
                            ? "bg-washed-purple purple"
                            : "bg-washed-red red"
                        }
                        relative bw1 pa2 ba b--light-2 ph1 tc br2 ba3`}
                      >
                        {index}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="gray mt2 lh-copy">
              Auto-placed items are marked in{" "}
              <span className="red bg-washed-red">red</span>.
              <br />Items marked in{" "}
              <span className="purple bg-washed-purple">purple</span> uses
              'grid-area: auto/span 2'.
            </div>
          </div>
        );
      }
    }
  },

  "grid-gap": {
    "grid-row-gap": {
      color: "purple",
      value: "10px",
      description: "The gaps between rows.",
      values: []
    },
    "grid-column-gap": {
      color: "purple",
      value: "calc(20px + 10%)",
      description: "The gaps between columns.",
      values: []
    }
  },
  "place-items": {
    "align-items": {
      color: "purple",
      value: "center",
      description: "Aligns grid items along the column axis.",
      values: ["start", "end", "center", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ grid: "1fr / repeat(3, 1fr)", alignItems: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className={`relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3`}
                    >
                      {n}
                    </div>
                  ))}
                </div>

                {makeAxis("column", "column axis")}
              </div>
            ))}
          </div>
        );
      }
    },
    "justify-items": {
      color: "purple",
      value: "center",
      description: "Aligns grid items along the inline (row) axis .",
      values: ["start", "end", "center", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{
                    grid: "repeat(3, 1fr) / 1fr",
                    justifyItems: `${tf}`
                  }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className={`relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3`}
                    >
                      {n}
                    </div>
                  ))}
                </div>

                {makeAxis("row", "row axis")}
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "place-content": {
    "align-content": {
      color: "purple",
      value: "space-around",
      description:
        "Align the grid along the column axis when grid items can't fill in the entire vertical space of the container.",
      values: [
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{
                    grid: "repeat(2, 30%) / 1fr 2fr",
                    alignContent: `${tf}`
                  }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{}}
                      className={`relative pv2 mr2 mb2 purple ph1 tc bg-washed-purple br2 w2 ba3`}
                    >
                      {n}
                    </div>
                  ))}
                </div>

                {makeAxis("column", "column axis")}
              </div>
            ))}
            <div className="gray mt2 lh-copy">
              Preant conatainer uses 'grid: repeat(2, 30%) / 1fr 2fr'.
            </div>
          </div>
        );
      }
    },
    "justify-content": {
      color: "purple",
      value: "space-evenly",
      description:
        "Align the grid along the row axis when grid items cant't fill in the entire horizontal space of the container.",
      values: [
        "start",
        "end",
        "center",
        "stretch",
        "space-around",
        "space-between",
        "space-evenly"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{
                    grid: "repeat(3, 30%) / auto",
                    justifyContent: `${tf}`
                  }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{}}
                      className={`relative pv2 mr2 mb2 purple ph2 tc bg-washed-purple br2 ba3`}
                    >
                      {n}
                    </div>
                  ))}
                </div>

                {makeAxis("row", "row axis")}
              </div>
            ))}
            <div className="gray mt2 lh-copy">
              Preant conatainer uses 'grid: repeat(3, 30%) / auto'.
            </div>
          </div>
        );
      }
    }
  },
  "grid-area": {
    "grid-row-start": {
      color: "purple",
      value: "auto /",
      description: "A grid item’s start position within the grid row.",
      values: ["span 2/auto/auto/auto", "3/auto/auto/auto", "-1/auto/1/auto"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4">
            {generateGridArea(v, 0)}
            <div className="gray lh-copy">
              <br />Item marked in <span className="red bg-washed-red">red</span>{" "}
              uses the specified grid-area rule, Other items in{" "}
              <span className="purple bg-washed-purple">purple</span> are
              auto-placed.
            </div>
          </div>
        );
      }
    },
    "grid-column-start": {
      color: "purple",
      value: "1 /",
      description: "A grid item’s start position within the grid column.",
      values: ["auto/span 2/auto/auto", "auto/3/auto/auto", "auto/-1/auto/1"],
      showDetails: function() {
        const v = this.values;
        return <div className="ml4 mr4">{generateGridArea(v, 1)}</div>;
      }
    },
    "grid-row-end": {
      color: "purple",
      value: "span 3 /",
      description: "A grid item’s end position within the grid row.",
      values: ["auto/-2/auto/1", "auto/1/auto/2", "auto/auto/span 2/auto"],
      showDetails: function() {
        const v = this.values;
        return <div className="ml4 mr4">{generateGridArea(v, 2)}</div>;
      }
    },
    "grid-column-end": {
      color: "purple",
      value: "span 2",
      description: "A grid item’s end position within the grid column.",
      values: ["auto/auto/auto/-1", "auto/2/auto/3", "auto/auto/auto/span 3"],
      showDetails: function() {
        const v = this.values;
        return <div className="ml4 mr4">{generateGridArea(v, 3)}</div>;
      }
    }
  },

  "place-self": {
    "align-self": {
      color: "purple",
      value: "center",
      description: "Align a grid item inside a cell along the column axis.",
      values: ["start", "end", "center", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative mt2 bt h4 b--dashed bb b--black-10 pv2"
                  style={{ grid: "auto/repeat(3, 1fr)", alignItems: "center" }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{ alignSelf: `${i === 2 ? tf : "unset"}` }}
                      className="relative pv2 mr2 purple ph2 tc bg-washed-purple br2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                {makeAxis("column")}
              </div>
            ))}
          </div>
        );
      }
    },
    "justify-self": {
      color: "purple",
      value: "center",
      description: "Align a grid item inside a cell along the row axis.",
      values: ["start", "end", "center", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-25 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="dg relative mt2 bt h4 b--dashed bb b--black-10 pv2"
                  style={{ grid: "repeat(3, 1fr)/1fr", justifyItems: "center" }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{ justifySelf: `${i === 2 ? tf : "unset"}` }}
                      className="relative pv2 mr2 mb2 purple ph2 tc bg-washed-purple br2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                {makeAxis("row")}
              </div>
            ))}
          </div>
        );
      }
    }
  }
};
const lines = () => {
  return (
    <div>
      <div
        style={{ marginRight: 7 }}
        className="absolute right-0 h-100 bl b--dashed b--light-gray"
      />
      <div
        style={{ marginRight: 307 }}
        className="absolute right-0 h-100 bl b--light-gray b--dashed "
      />
    </div>
  );
};

const generateGridArea = (v, hi) => {
  return (
    <div className="flex flex-wrap mt3">
      {v.map((tf, i) => (
        <div key={i} className="w-33 mb2 pr3">
          <div className="tc mb1">
            {tf.split("/").map((t, i) => (
              <span className={`${i === hi ? "purple" : "o-40"}`}>
                {t}
                {i < 3 && "/"}
              </span>
            ))}
          </div>
          <div
            key={i}
            style={{
              grid: `repeat(3, 1fr) / repeat(3, 1fr)`
            }}
            className="dg tc h-auto"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((n, index) => (
              <div
                key={index}
                style={{
                  gridArea: `${index === 0 ? `${tf}` : "unset"}`,
                  gridAutoFlow: "column dense"
                }}
                className={`${
                  index !== 0 ? "bg-washed-purple purple" : "bg-washed-red red"
                }
                        relative bw1 pa2 ba b--light-2 ph1 tc br2 ba3`}
              >
                {index}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
const makeAxis = (type, text) => {
  return (
    <div
      style={{}}
      className={`
          ${type === "column" ? "w-100 top-1 pv2" : "nt5 w-80"}
        absolute purple self-center tc `}
    >
      <div
        className={`${
          type === "column" ? "nl2 w-50 br h4" : "bt w-100"
        } b--purple absolute mt1`}
      />
      <div
        style={{ width: '10px', height: '10px'}}
        className={`${
          type === "column" ? "mt5 nl3 rotate-90" : "nt1"
        } bg-purple br-100 dib`}
      />
    </div>
  );
};
