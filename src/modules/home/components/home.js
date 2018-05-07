import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeLink = styled.h1`
  color: blue;
`;

const Item = styled.li`
  color: ${p => (p.selected ? 'red' : 'black')};
`;

class Home extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    toggleItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getItems } = this.props;
    getItems([{ id: 1, title: 'item 1' }, { id: 2, title: 'item 2' }]);
  }

  render() {
    const { items, toggleItem } = this.props;
    return (
      <div>
        <HomeLink>Home</HomeLink>
        <Link to="contact">Contact</Link>
        <Link to="products">products</Link>
        <ul>
          {items.map((item, idx) => (
            <Item
              key={idx}
              onClick={() => toggleItem(item.id)}
              selected={item.selected}
            >
              {item.title}
            </Item>
          ))}
          <div>dit is een test</div>
        </ul>
      </div>
    );
  }
}

export default Home;
