import React, { Component } from "react";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import "./App.css";
import { connect } from "react-redux";
import { fetchPosts, addPost } from "./actions/postActions";

class App extends Component {
  componentWillMount = () => {
    console.log(this.props);
    this.props.fetchPosts();
  };

  render() {
    return (
      <div key="app" className="App">
        <h1>Posts</h1>
        <AddPost addPost={this.props.addPost} />

        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});
const mapActionToProps = {
  fetchPosts,
  addPost
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
