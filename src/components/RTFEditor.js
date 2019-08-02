import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import styled from 'styled-components'

const EditorContainer = styled.div`
	border:solid 1px #d7dbe0
	padding:6pt
	sizing:border-box
	border-radius:6pt
`
const ControlContainer = styled.div`
	display:grid
`
const StyleButton = styled.button`
	border:none
	padding:6pt
	border-radius:3pt
	width:32pt
`

class RTFEditor extends Editor {
	constructor(props){
		super(props)
		this.state = {editorState: EditorState.createEmpty()}
		this.onChange = (event) => this.setState({editorState: event})
	}
	render() {
		return (
			<div>
				<h1>This is the Editor</h1>
				<ControlContainer>
					<StyleButton>Bold</StyleButton>
				</ControlContainer>
				<EditorContainer>
					<Editor 
						editorState={this.state.editorState}
						onChange={this.onChange}
					/>
				</EditorContainer>
			</div>
		)
	}
}

export default RTFEditor