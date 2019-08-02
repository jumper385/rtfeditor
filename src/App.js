import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    this.onBoldClick = () => this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState, 'BOLD'
    ))
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <div>
          <button onClick={this.onBoldClick}>Bold</button>
        </div>
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange}
        />
      </div>
    )
  }

}

export default App;
