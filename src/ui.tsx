import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component<{}, { fonts: Font[] }> {
  constructor(props) {
    super(props);

    this.state = {
      fonts: []
    };

    onmessage = event => {
      this.setState({
        fonts: [...event.data.pluginMessage]
      });
    };
  }

  onCreate = () => {
    parent.postMessage({ pluginMessage: { type: "create-rectangles" } }, "*");
  };

  render() {
    const fonts = this.state.fonts.map((font, index) => {
      console.log(font);
      const itemStyle = {
        fontFamily: font.fontName.family
      };
      return (
        <li className="" style={itemStyle} key={index}>
          {font.fontName.family}
        </li>
      );
    });
    return (
      <div>
        <ul className="">{fonts}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
