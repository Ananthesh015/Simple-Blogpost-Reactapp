import React, { useState } from 'react';
import  styled  from  'styled-components';
// import Modal from "react-modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
// import parse from "html-react-parser"

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


function SampleUi(){
    const [text, setText] = useState("");
    const [isOpen,setisOpen] = useState(false);
    var toggleModal = () => {
        // this.setState({isOpen:!this.state.isOpen});
        setisOpen(!isOpen);
    }
    return (
        <>
        <div className="header">
            <div className="input-placeholder">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" placeholder="Search..."/>
                <input type="submit" value="Search"/>
            </div>
            <div className="button-container" >
                <Button onClick={toggleModal} >New Post</Button>
                <Button  >Published</Button>
             </div>
        </div>
        <div className="main">
        {isOpen ? 
            <div className="leftsection">  
                    <div className="inputfield"><input  value="" type="text" placeholder="Title" /></div>
                    <div className="editer-container">
                        <div className="editor">
                            <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                            />
                        </div>
                    </div>
                    <Button onClick={toggleModal} >ADD</Button>
            </div> 
        : null}
        <article>
            <section>
                <h1>Article Title</h1>
                <p>Sed autem necessitatibus quibusdam rerum suscipit aspernatur. Aut voluptatem animi rerum vero et et. Explicabo vel pariatur dolorem voluptas blanditiis quia magni eos. Ab temporibus nam tempora.</p>
            </section>
            <section>
                <h1>Article Title</h1>
                <p>Sed autem necessitatibus quibusdam rerum suscipit aspernatur. Aut voluptatem animi rerum vero et et. Explicabo vel pariatur dolorem voluptas blanditiis quia magni eos. Ab temporibus nam tempora.</p>
            </section>
            <section>
                <h1>Article Title</h1>
                <p>Sed autem necessitatibus quibusdam rerum suscipit aspernatur. Aut voluptatem animi rerum vero et et. Explicabo vel pariatur dolorem voluptas blanditiis quia magni eos. Ab temporibus nam tempora.</p>
            </section>
        </article>
        </div>
        <div className="footer">
                {/* <div className="editer-container">
                    <div className="editor">
                        <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                        />
                    </div>
                    <div>
                        <h2>Content</h2>
                        <p>{parse(text)}</p>
                    </div>
                </div>
                <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
        >
            <div className="leftsection">  
                    <input  value="" type="text" placeholder="Title" /> <br />  
                    <div className="editer-container">
                        <div className="editor">
                            <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                            />
                        </div>
                    </div>
                    <button >ADD</button>   
                    <button >CLEAR</button>  
            </div>
            <button onClick={toggleModal}>Close modal</button>
        </Modal> */}
        </div>
        
        </>
    );

}
export default SampleUi;
