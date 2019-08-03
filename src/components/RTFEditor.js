import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import styled from 'styled-components'

const EditorContainer = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Nova+Mono&display=swap');
	font-family: 'Nova Mono', monospace;
	border:solid 1px #d7dbe0
	padding:6pt
	sizing:border-box
	border-radius:6pt
`
const ControlContainer = styled.div`
	display:grid
	grid-template-columns: 48pt 48pt 48pt 48pt
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
		this.makeBold = () => this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
		this.makeItalic = () => this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
		this.makeUnderlined = () => this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINED'))
	}
	render() {
		return (
			<div>
				<h1>This is the Editor</h1>
				<ControlContainer>
					<StyleButton onClick={this.makeBold}>Bold</StyleButton>
					<StyleButton onClick={this.makeItalic}>Italic</StyleButton>
					<StyleButton onClick={this.makeUnderlined}>Underlined</StyleButton>
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