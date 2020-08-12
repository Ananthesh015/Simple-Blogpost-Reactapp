import React,{Component} from 'react';
import { connect } from 'react-redux';  
import {postsLoading, addpost} from '../redux/action/Action';
import Header from './HeaderComponent';


const mapStateToProps = state => ({  
    posts: state.posts  
});

const mapDispatchToProps = dispatch => ({
    postsLoading: () => dispatch(postsLoading()),
    addpost:(data) =>dispatch(addpost(data))
});

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {  
            id: 0,  
            title: "",  
            text: "",
            searchItem:"",
            postshow:false
          };
    }
    componentDidMount() {  
        this.props.postsLoading();  
    }
    submitData = () => {  
        if (this.state.title && this.state.text && !this.state.id) {  
          const newposts = {  
            id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
            title: this.state.title,  
            text: this.state.text,  
          };  
          this.props.addpost(newposts);  
        } else if (this.state.title && this.state.text && this.state.id) {  
        console.log("Enter content is all ready present"); 
        } else {  
          alert('Enter Blog Details.');  
        }  
    }  
    handletitleChange = (e) => {  
        this.setState({  
           title: e.target.value  
        });
    }
    handletextChange = (Data) => {  
        this.setState({  
            text:Data  
        });  
    }
    handleSerch =(e) => {
        this.setState({
            searchItem: e.target.value
        })
    }
    posts = (e) => {
        this.setState({
            postshow:true
        })
    }
    render(){
        let filteredData = this.props.posts.filter((data) => {
            return data.title.toLowerCase().includes(this.state.searchItem.toLowerCase())
        });
        return (
            <>  
                <Header posts={this.posts} searchItem={this.state.searchItem} handleSerch={this.handleSerch} handletitleChange={this.handletitleChange} title={this.state.title} handletextChange={this.handletextChange} text={this.state.text} submitData={this.submitData} />
               
                <article>
                    {this.state.postshow && filteredData && filteredData.map((data, index) => {  
                            return <section key={index}>
                                    <h1>{data.title}</h1>
                                    <p>{data.text}</p>
                                </section>
                            })}  
                </article>
            </>
        )
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(Main));;