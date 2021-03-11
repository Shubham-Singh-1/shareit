import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreatePost, Post } from './';

class PostsList extends Component {
  render() {
    const { posts, isLoggedin } = this.props;
    return (
      <div className="posts-list">
        {isLoggedin && <CreatePost />}
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isLoggedin: auth.isLoggedin,
  };
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(PostsList);
