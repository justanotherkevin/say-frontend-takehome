import React from 'react'
import PropTypes from 'prop-types'

function SubredditNav(props) {
  const onClicked = e => {
    if (e.target.tagName === "SPAN") {
      [...document.querySelectorAll('.subreddit-nav-wrapper span')].forEach(span => { span.classList.contains('active') && span.classList.remove('active') })
      e.target.classList.add('active');
      const subreddit = e.target.innerHTML === 'Home' ?
        null :
        e.target.innerHTML;
      props.changeActiveSubreddit(subreddit);
    }
  }

  return (
    <div className="subreddit-nav-wrapper" onClick={onClicked}>
      <span className="active">Home</span>
      {props.groupedPosts.map((str, i) => (
        <span key={i}>{str}</span>
      ))}
    </div>
  )
}

SubredditNav.propTypes = {
  groupedPosts: PropTypes.arrayOf(PropTypes.string)
}

export default SubredditNav

