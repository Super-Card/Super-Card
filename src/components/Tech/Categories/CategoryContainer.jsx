import React from 'react';
import { observer, inject } from 'mobx-react';
import { techPropType, techPropTypeDefaults } from '../../../stores/Tech';
import ListItems from './ListItems';
import ItemDetail from './ItemDetail';
import './categories.css';

@inject('tech')
@observer
class CategoryContainer extends React.Component {
  render() {
    return (
      <div className="category-container">
        <ListItems />
        <ItemDetail item={this.props.tech.selectedItem} />
      </div>
    );
  }
}
CategoryContainer.wrappedComponent.propTypes = {
  tech: techPropType
};

CategoryContainer.wrappedComponent.defaultProps = {
  tech: techPropTypeDefaults
};
export default CategoryContainer;
