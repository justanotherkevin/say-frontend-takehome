import React from 'react'
import PropTypes from 'prop-types'

function AllPosts(props) {
  return (
    <div>
      {props.posts.map(post =>
        <div>
          {post.thumbnail && <img src={post.thumbnail} alt="" />}
          <span>{post.title}</span>
          <span>{post.created}</span>
          <span>{post.ups}</span>
          <span>{post.url}</span>
          <a href={post.url}>Link</a>

        </div>
      )}
    </div>
  )
}

AllPosts.propTypes = {

}

export default AllPosts

