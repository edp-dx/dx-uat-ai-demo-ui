import React, { Component } from 'react';
import axios from 'axios';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = { badges: [] };

  componentDidMount() {
    axios.get('https://ai-demo-app-dx-dev-ai-demo-app-dev.eks-sandbox.aws.main.edp.projects.epam.com/badges')
      .then(response => {
        this.setState({ badges: response.data });
      })
      .catch(error => console.error('Error fetching badges:', error));
  }

  render() {
    const { badges } = this.state;
    return (
      <div className="badges-dashboard">
        {badges.map(badge => (
          <div key={badge.badgeId} className="badge">
            <img src={badge.badgeImage} alt={badge.badgeName} />
            <h2>{badge.badgeName}</h2>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;