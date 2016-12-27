import React, { PropTypes } from 'react';
import NavbarEntry from './components/NavbarEntry';
import HamburgerMenu from './components/HamburgerMenu';
import navbarEntries from './model';

class Navbar extends React.Component {
  static get defaultProps() {
    return {
      entries: navbarEntries,
    };
  }

  constructor(props) {
    super(props);

    this.state = { open: false };

    this.handleClickHamburger = this.handleClickHamburger.bind(this);
    this.handleClickEntry = this.handleClickEntry.bind(this);
  }

  handleClickHamburger() {
    const timeout = this.state.open ? 300 : 0;
    setTimeout(() => {
      this.setState({ open: !this.state.open });
    }, timeout);
    this.forceUpdate();
  }

  handleClickEntry() {
    setTimeout(() => {
      this.setState({ open: false });
    }, 300);
  }

  renderEntries() {
    const { path, entries } = this.props;
    return this.state.open && (
      <ul>
        {entries.map((e, index) => {
          const entry = Object.assign({}, e, {
            active: (e.path === path),
            onClick: this.handleClickEntry,
            index,
          });
          return <NavbarEntry key={index} {...entry} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <nav>
        {this.renderEntries()}
        <HamburgerMenu open={this.state.open} onClick={this.handleClickHamburger} />
      </nav>
    );
  }
}

Navbar.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  path: PropTypes.string.isRequired,
};

export default Navbar;
