import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItems from './ListItems';
import ItemDetail from './ItemDetail';
import { techPropType, techPropTypeDefaults } from '../../../stores/Tech';

@inject('tech')
@observer
class CategoryContainer extends React.Component {
  render() {
    return (
      <div className="category-container">
        <ListItems />
        <ItemDetail Category={this.props.tech.selectedItem} />
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
