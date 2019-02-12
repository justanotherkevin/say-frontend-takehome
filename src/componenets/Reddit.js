import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Reddit extends Component {
  state = {

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
      } else {
        collections[subreddit] = [];
        collections[subreddit].push(post);
      }
    })
    return collections;
  }
  render() {
    return (
      <div>
        this is reddit
      </div>
    )
  }
}
Reddit.propTypes = {
  // posts: PropTypes.array.isRequired,
  posts: PropTypes.arrayOf(PropTypes.PropTypes.share({
    author: PropTypes.string,
    created: PropTypes.number,
    subreddit: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    ups: PropTypes.number,
    url: PropTypes.string,
  }))

}
export default Reddit;