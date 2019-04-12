import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';


import { gameOperations } from '../../state/ducks/game';

const styles = () => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TitleBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { menuOpen: false };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleNewGameClick = this.handleNewGameClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: true });
  }

  handleMenuClose() {
    this.setState({ menuOpen: false });
  }

  handleNewGameClick(itemKey) {
      this.props.newGame();
  }

  render() {
    const { classes } = this.props;
    const { menuOpen } = this.state;

    return (
        <button onClick={this.handleNewGameClick}>
            New game
    </button> 

    );
  }
}

const { object, func } = PropTypes;

TitleBar.propTypes = {
  classes: object.isRequired,
  newGame: func.isRequired
};

const mapDispatchToProps = {
  newGame: gameOperations.newGame
};

const styledTitleBar = withStyles(styles)(TitleBar);

export default connect(null, mapDispatchToProps)(styledTitleBar);
