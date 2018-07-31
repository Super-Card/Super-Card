import { observer, inject } from 'mobx-react';
import React from 'react';
import Result from './ResultItem';
import { mallPropType, mallPropTypeDefaults } from '../../../stores/ClothesData';

@inject('mall')
@observer
class ResultList extends React.Component {
  render() {
    return (
      <div className="resulted">
        {this.props.mall.getResultItems.map(resultItem => <Result key={resultItem.id} resultItem={resultItem} />)}
      </div>
    );
  }
}

ResultList.wrappedComponent.propTypes = {
  mall: mallPropType
};

ResultList.wrappedComponent.defaultProps = {
  mall: mallPropTypeDefaults
};

export default ResultList;
