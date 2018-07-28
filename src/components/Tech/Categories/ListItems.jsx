import React from 'react';
import { observer, inject } from 'mobx-react';
import { techPropType, techPropTypeDefaults } from '../../../stores/Tech';
import ResultList from './ResultList';

@inject('tech')
@observer
class ListItems extends React.Component {
  render() {
    return (
      <div className="category-list">
        {this.props.tech.getItems.map(category => <ResultList key={category.id} Category={category} />)}
      </div>
    );
  }
}
ListItems.wrappedComponent.propTypes = {
  tech: techPropType
};

ListItems.wrappedComponent.defaultProps = {
  tech: techPropTypeDefaults
};
export default ListItems;
