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
class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const redditEndpoint = "https://www.reddit.com/.json";
    axios.get(redditEndpoint)
      .then(function (res) {
        const { data } = res;
        const posts = data.data.children.map(child => {
          // console.log(child.data);
          const { author, created, subreddit, ups, thumbnail, url, title } = child.data
          const post = {
            author, created, subreddit, ups, thumbnail, url, title
          }
          return post;
        })
        this.setState({ posts })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='app'>
        <div>header</div>
        <div>body</div>
        <Reddit data={this.state.data} />
        <div>footer</div>
      </div>
    );
  }
}

export default App;
