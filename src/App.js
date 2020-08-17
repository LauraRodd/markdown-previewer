import React from 'react';
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
let marked = require("marked");


// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

// class component
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: placeholder
    };
  }

// Method
  updateMarkdown(markdown){
    this.setState({markdown});
  }

  render(){
    // styles
    const inputStyle = {
      width: "100%",
      height: "400px", 
      margin: "1em auto",
      padding: "2em",
      backgroundColor: "#19191a",
      color: "#f0f0f0",
      borderRadius: "5px",
      fontFamily: 'Source Code Pro',
      fontSize: "0.8rem"
    };
    
    const outputStyle = {
      width: "100%",
      backgroundColor: "#95d2de",
      margin: "1.2em auto",
      padding: "1.5em",
      borderRadius: "5px",
      overflow: "auto",
      height: "400px"
    }

    return (
      <div className="App">
        <div className="container mb-3">
          <div className="row mt-4">
            {/* Main heading */}
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
              <hr/>
            </div>  
          </div>
          <div className="row mt-4">
            {/* Markdown input column */}
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="dark">
                    Markdown Editor
                  </Badge>
                </h4>
                <div className="mark-input">
                  <textarea 
                    id="editor"
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(event) => {
                      this.updateMarkdown(event.target.value);
                    }}> 
                    {" "} 
                    {/* {console.log(this.state.markdown)} */}
                  </textarea>
                </div>
              </div>
            </div>
            {/* Preview column */}
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
               <h4>
                 <Badge className="text-align-center" variant="info">
                   Preview
                 </Badge>
               </h4>
              </div>
              <div 
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={
                  {__html: marked(this.state.markdown)}
                }>
              </div>
            </div>  
          </div>  
          {/* clear button */}
          <div className="row mt-4">
            <div className="col text-center">
              <Button 
                variant="danger"
                onClick={(event) => {
                  this.updateMarkdown("");
                }}
                >Clear all
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = 
`# This is a heading

## This is a sub-heading...
  
Here is some in-linecode: \`<h1>Hello World</h1>\`.

And here some multi-line code:
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can add style to your text by making it **bold**...
_italic_.
Or... **_both!_**
And! ~~crossing stuff out~~.

There are also
> Block Quotes!

and much more! Give it a try ;)

---

_Built by [Laura](https://codepen.io/laura-rodd) with [**React**](https://reactjs.org/)_
`


