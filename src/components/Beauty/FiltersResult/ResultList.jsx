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
        <div className="tags">
          {this.props.beauty.filters.length > 0 ? 'Tags: ' : ''}
          {this.props.beauty.filters.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div>
          {this.props.beauty.getResultItems.map(resultItem => <Result key={resultItem.id} resultItem={resultItem} />)}
        </div>
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
