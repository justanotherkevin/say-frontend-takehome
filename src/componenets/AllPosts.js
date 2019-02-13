import React from 'react'
import PropTypes from 'prop-types'

function AllPosts(props) {
  return (
    <div className="posts-wrapper">
      {props.posts.map(post =>
        <div key={post.id} className="post-wrapper">
          {post.thumbnail &&
            <a className="img-wrapper" href={post.url} title="link to source">
              <img src={post.thumbnail} alt="" />
            </a>
          }
          <span>{post.title}</span>
          <span className="ups">⬆️ {post.ups}</span>
          <span>
            {post.subreddit_name_prefixed} {post.created}
            <a
              href={`https://www.reddit.com${post.permalink}`}
              title="Link to reddit post">Reddit
            </a>
          </span>

        </div>
      )}
    </div>
  )
}

AllPosts.propTypes = {
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

export default AllPosts

