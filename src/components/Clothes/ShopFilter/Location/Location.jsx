import React from 'react';
import { observer, inject } from 'mobx-react';
import { mallPropType, mallPropTypeDefaults } from '../../../../stores/ClothesData';
import './Location.css';

@inject('mall')
@observer
export default class Locations extends React.Component {
  render() {
    return (
      <div className="location-box">
        <h2>Location:</h2>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="Sofia" onClick={() => this.props.mall.setFilter('Sofia')} />Sofia
        </div>
        <div className="input-holder">
          <input
            type="checkbox"
            name="10%"
            id="10%"
            value="Plovdiv"
            onClick={() => this.props.mall.setFilter('Plovdiv')}
          />Plovdiv
        </div>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="Varna" onClick={() => this.props.mall.setFilter('Varna')} />Varna
        </div>
        <div className="input-holder">
          <input
            type="checkbox"
            name="10%"
            id="10%"
            value="Burgas"
            onClick={() => this.props.mall.setFilter('Burgas')}
          />Burgas
        </div>
        <div className="input-holder">
          <input
            type="checkbox"
            name="10%"
            id="10%"
            value="Stara Zagora"
            onClick={() => this.props.mall.setFilter('Stara Zagora')}
          />Stara Zagora
        </div>
      </div>
    );
  }
}

Locations.wrappedComponent.propTypes = {
  mall: mallPropType
};

Locations.wrappedComponent.defaultProps = {
  mall: mallPropTypeDefaults
};
