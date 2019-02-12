import React, { Component } from 'react'
import PropTypes from 'prop-types';
import SubredditNav from './SubredditNav';
import AllPosts from './AllPosts';

class Reddit extends Component {
  state = {
    groupedPosts: {},
    activeSubreddit: null,
  }
  componentDidMount() {
    const groupedPosts = this.createGroupsFromPosts(this.props.posts)
    this.setState({ groupedPosts })

  }
  createGroupsFromPosts = (posts) => {
    const collections = {};
    posts.forEach(post => {
      const { subreddit } = post;
      if (collections[subreddit]) {
        collections[subreddit].push(post);
        collections[subreddit].sort((a, b) => (b.ups - a.ups))
      } else {
        collections[subreddit] = [];
        collections[subreddit].push(post);
      }
    })
    return collections;
  }
  changeActiveSubreddit = (str) => {
    this.setState({ activeSubreddit: str });
  }
  getPostsToRender = () => {
    const { activeSubreddit, groupedPosts } = this.state;
    if (activeSubreddit === null) {
      return this.props.posts;
    } else {
      return groupedPosts[activeSubreddit];
    }
  }
  render() {
    const groupedPosts = Object.keys(this.state.groupedPosts);
    const posts = this.getPostsToRender();

    return (
      <div className="reddit-wrapper">
        {groupedPosts.length !== 0 &&
          <SubredditNav
            groupedPosts={groupedPosts}
            changeActiveSubreddit={this.changeActiveSubreddit}
          />
        }
        <AllPosts posts={posts} />
      </div>
    )
  }
}
Reddit.propTypes = {
  // posts: PropTypes.array.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    created: PropTypes.string,
    subreddit: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    ups: PropTypes.number,
    url: PropTypes.string,
  }))

}
export default Reddit;