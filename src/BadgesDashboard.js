import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = { badges: [] };

  componentDidMount() {
    fetch('https://ai-demo-app-dx-dev-ai-demo-app-dev.eks-sandbox.aws.main.edp.projects.epam.com/badges')
      .then(response => response.json())
      .then(data => this.setState({ badges: data }))
      .catch(error => console.error('Error fetching badges:', error));
  }

  render() {
    const { badges } = this.state;
    return (
      <div className="badges-dashboard">
        {badges.map(badge => (
          <div className="badge" key={badge.badgeId}>
            <img src={badge.badgeImage} alt={`Badge ${badge.badgeName}`} />
            <h3>{badge.badgeName}</h3>
            <p>ID: {badge.badgeId}</p>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

BadgesDashboard.propTypes = {
  badgeName: PropTypes.string,
  badgeId: PropTypes.number,
  description: PropTypes.string,
  badgeImage: PropTypes.string
};

export default BadgesDashboard;
