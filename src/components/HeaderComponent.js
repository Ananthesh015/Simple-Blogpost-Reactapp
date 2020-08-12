import React,{Component} from 'react';
import  styled  from  'styled-components';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"

class Header extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
          isOpen:false,
          text:"",
          searchitem:this.props.searchitem
        }
    }
    toggleModal = () => { this.setState({isOpen:!this.state.isOpen});}

    setText = (data) => {
      this.setState({text:data});
      this.props.handletextChange(parse(data))
    }
    
  
    render() {
        const Button = styled.button`
        flex:0 0 auto;
        background-color: #3f51b5;
        color: #ffffff;
        font-size: 1.2em;
        border: none;
        border-radius: .3em;
        padding:.5em;
        margin: .3em;
        cursor: pointer;
        &:hover {
          background-color: #334296;
        }
      `;
      return(
        <>  
            <div className="input-placeholder">
                <span className="fa fa-search "></span> 
                <input  type="text" placeholder="Search..." onChange={this.props.handleSerch}/>
                <span className="fa fa-times "></span>
            </div>
            <div className="button-container" >
                <Button onClick={this.toggleModal} >New Post</Button>
                <Button onClick={this.props.posts} >Published</Button>
             </div>
              {this.state.isOpen ? 
              <div className="leftsection">  
                      <div className="inputfield"><input  value={this.props.title} type="text" placeholder="Title" onChange={this.props.handletitleChange} /></div>
                      <div className="editer-container">
                          <div className="editor">
                              <CKEditor
                              editor={ClassicEditor}
                              data={this.state.isOpentext}
                              onChange={(event, editor) => {
                                  const data = editor.getData()
                                  this.setText(data)
                              }}
                              />
                          </div>
                      </div>
                      <Button onClick={() => { this.props.submitData();this.toggleModal();}} >ADD</Button>
              </div> 
          : null}
        </>
      
      );
    }
  }
  
  export default Header;