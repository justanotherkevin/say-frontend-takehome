import React, { Component } from "react";
import axios from 'axios';
import Reddit from "./componenets/Reddit";

/*
////Fetch data from the url provided: https://www.reddit.com/.json.

Group the posts together by subreddit.

Sort the posts in each subreddit based on upvote, i.e. most upvotes to fewest.

For each group of posts in a subreddit, display the subreddit name. Each post of the subreddit must display title, image (if there is one), date (formatted as MM/DD/YYYY), upvotes, and a link to the actual post.

Once you are done, push the project to your own GitHub/BitBucket/GitLab account (private is perfectly fine).
*/
import './app.scss';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const redditEndpoint = "https://www.reddit.com/.json";
    const current = this;
    axios.get(redditEndpoint)
      .then(function (res) {
        const { data } = res;
        const posts = data.data.children.map(child => {
          console.log(child.data);
          const { id, author, created, subreddit, ups, thumbnail, url, title, subreddit_name_prefixed, permalink } = child.data
          let post = {
            id, author, created, subreddit, ups, thumbnail, url, title, subreddit_name_prefixed, permalink
          }
          post.thumbnail = post.thumbnail.includes('http') ? post.thumbnail : null;
          post.created = new Date(post.created * 1000).toLocaleDateString("en-US");
          return post;
        })
        current.setState({ posts })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state
    return (
      <div className='app'>
        {/* <div>header</div> */}
        {/* <div>body</div> */}
        {posts.length !== 0 && <Reddit posts={posts} />}
        {/* <div>footer</div> */}
      </div>
    );
  }
}

export default App;
