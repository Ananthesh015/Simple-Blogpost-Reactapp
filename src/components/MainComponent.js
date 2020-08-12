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
        //   const updatedDetails = {  
        //     id: this.state.id,  
        //     title: this.state.title,  
        //     text: this.state.text,  
        //   }; 
        console.log("Enter content is all ready present"); 
      
        //   this.props.editEmployee(updatedDetails);  
        } else {  
          alert('Enter Blog Details.');  
        }  
    }  
    handletitleChange = (e) => {  
        // console.log(e.target.value);
        this.setState({  
           title: e.target.value  
        });
        // this.search(this.state.title)
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
                {/* <label className="search-label" htmlFor="search-input">
					<input
						type="text"
                        placeholder="Search..."
                        onChange={this.handleSerch}
					/>
					{this.state.title}
                    {this.state.searchItem}
				</label> */}
                
                <Header posts={this.posts} searchItem={this.state.searchItem} handleSerch={this.handleSerch} handletitleChange={this.handletitleChange} title={this.state.title} handletextChange={this.handletextChange} text={this.state.text} submitData={this.submitData} />
                {/* <div className="leftsection">  
                    Employee Name : <input onChange={this.handletitleChange} value={this.state.title} type="text" placeholder="Employee Name" /> <br />  
                    Employee Department :  <input onChange={this.handletextChange} value={this.state.text} type="text" placeholder="Employee Department" /><br />  
                    {this.state.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>}   <button onClick={this.clearData}>CLEAR</button>  
                </div> */}
                {/* <p className="App-intro">  
                <div className="rightsection">  
                    <table>  
                    <thead>  
                        <tr>  
                        <th>ID</th>  
                        <th>Name</th>  
                        <th>Depatment Name</th>  
                        <th>Action(s)</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        {filteredData && filteredData.map((data, index) => {  
                        return <tr key={(index + 1)}>  
                            <td>{(index + 1)}</td>  
                            <td>{data.title}</td>  
                            <td>{data.text}</td>  
                            <td><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteEmployee(data.id)}>DELETE</button> </td>  
                        </tr>  
                        })}  
                    </tbody>  
                    </table>  
                </div>  
                </p> */}
                <article>
                {this.state.postshow && filteredData && filteredData.map((data, index) => {  
                        // return <tr key={(index + 1)}>  
                        //     <td>{(index + 1)}</td>  
                        //     <td>{data.title}</td>  
                        //     <td>{data.text}</td>  
                        //     <td><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteEmployee(data.id)}>DELETE</button> </td>  
                        // </tr> 

                        return <section key={index}>
                                <h1>{data.title}</h1>
                                <p>{data.text}</p>
                            </section>
                        })}  
                    {/* <section>
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
                    </section> */}
                </article>
            </>
        )
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(Main));;