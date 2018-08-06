import React from 'react';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';

import './BeautyFilters.css';

@inject('beauty')
@observer
export default class HumanBody extends React.Component {
  constructor(props) {
    super(props);
    this.human = { hair: false, body: false, face: false };
  }

  select(type, filter) {
    this.human[filter] = !this.human[filter];
    this.props.beauty.setFilter(type, filter, this.human[filter]);
  }

  render() {
    return (
      <div className="human-body-img">
        <img src="assets/beauty/human-body.png" alt="human body" useMap="#human-body" />
        <map name="human-body" id="human-body">
          <area
            id="area-hair"
            alt="hair"
            shape="poly"
            href="#"
            className="human-body-img-categories"
            coords="462,103,463,100,464,105,465,110,470,106,471,101,470,
        96,474,99,477,97,480,95,473,93,476,87,476,77,477,74,479,76,480,73,478,66,476,57,474,49,466,43,460,44,453,
        36,443,34,435,37,428,43,423,51,420,56,418,63,412,66,414,70,417,70,420,81,413,84,418,90,420,94,419,100,423,
        105,421,111,428,112,435,101,431,92,425,88,429,84,430,78,437,68,439,60,445,55,453,55,459,56,465,60,466,68,
        468,75,470,74,470,83,470,88,467,89"
            onClick={() => this.select('categories', 'hair')}
          />
          <area
            id="area-face"
            alt="face"
            shape="poly"
            href="#"
            className="human-body-img-categories"
            coords="431,91,433,97,437,101,443,105,450,106,460,103,465,94,467,90,469,85,470,76,467,75,466,64,461,58,
        455,56,449,56,442,58,438,67,434,74,431,78,428,84,427,88"
            onClick={() => this.select('categories', 'face')}
          />
          <area
            id="area-body"
            alt="body"
            shape="poly"
            href="#"
            className="human-body-img-categories"
            coords="437,103,438,117,421,128,407,134,401,151,402,181,400,215,395,246,394,284,394,310,393,321,402,343,
        408,342,406,331,405,306,402,295,414,245,421,181,427,214,421,235,413,257,410,280,412,309,415,312,425,355,
        431,388,432,436,441,473,442,500,434,516,433,528,448,531,454,527,456,511,459,493,454,464,457,414,454,320,
        466,325,482,398,484,415,499,471,503,495,506,516,510,527,526,526,528,522,518,491,514,433,504,380,504,329,
        505,306,498,257,486,215,487,188,491,205,498,244,510,282,509,299,511,305,511,317,506,322,507,333,512,331,
        514,335,520,311,517,267,512,222,506,182,502,142,497,130,488,125,463,117,462,102,450,106"
            onClick={() => this.select('categories', 'body')}
          />
        </map>
      </div>
    );
  }
}
HumanBody.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

HumanBody.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};
