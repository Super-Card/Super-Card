import { observer, inject } from 'mobx-react';
import React from 'react';
import Result from './ResultItem';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';

@inject('beauty')
@observer
class ResultList extends React.Component {
  render() {
    return (
      <div>
        {this.props.beauty.getResultItems.map(resultItem => <Result key={resultItem.id} resultItem={resultItem} />)}
      </div>
    );
  }
}

ResultList.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

ResultList.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};

export default ResultList;
