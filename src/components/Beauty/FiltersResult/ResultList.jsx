import { observer, inject } from 'mobx-react';
import React from 'react';
import Result from './ResultItem';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';

@inject('beauty')
@observer
class ResultList extends React.Component {
  componentDidMount() {
    this.props.beauty.filters = { discounts: [], partners: [], gender: [], categories: [] };
  }

  render() {
    return (
      <div>
        <div className="tags">
          {this.props.beauty.filters.discounts.length > 0 ||
          this.props.beauty.filters.partners.length > 0 ||
          this.props.beauty.filters.gender.length > 0 ||
          this.props.beauty.filters.categories.length > 0
            ? 'Tags: '
            : ''}
          {this.props.beauty.filters.discounts.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <span className="close-icon" onClick={() => this.props.beauty.setFilter('discounts', tag, false)}>
                &times;
              </span>
            </span>
          ))}
          {this.props.beauty.filters.partners.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <span className="close-icon" onClick={() => this.props.beauty.setFilter('partners', tag, false)}>
                &times;
              </span>
            </span>
          ))}
          {this.props.beauty.filters.gender.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <span className="close-icon" onClick={() => this.props.beauty.setFilter('gender', tag, false)}>
                &times;
              </span>
            </span>
          ))}
          {this.props.beauty.filters.categories.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <span className="close-icon" onClick={() => this.props.beauty.setFilter('categories', tag, false)}>
                &times;
              </span>
            </span>
          ))}
        </div>
        <div className="no-matches">{this.props.beauty.getResultItems.length === 0 ? 'No matches found!' : ''}</div>
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
