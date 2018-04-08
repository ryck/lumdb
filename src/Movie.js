import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  };

  static defaultProps = {
    desc: "Description not available"
  };

  render() {
    const { title, overview } = this.props.movie;
    return (
      <div>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    );
  }
}
