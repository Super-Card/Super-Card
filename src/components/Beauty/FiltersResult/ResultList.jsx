import { observer, inject } from 'mobx-react';
import React from 'react';
import ResultItem from './ResultItem';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';

@inject('beauty')
@observer
class ResultList extends React.Component {
  render() {
    return (
      <div>
        {this.props.beauty.resultItems.map(resultItem => <ResultItem key={resultItem.id} resultItem={resultItem} />)}
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
