import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addOffenseToFilter } from '../../../actions/addOffenseToFilterAction';
import { removeOffenseFromFilter } from '../../../actions/removeOffenseFromFilterAction';

import './offensetypefilter.css';

class OffenseTypeFilter extends Component {
  constructor() {
    super();

    this.handleOffenseSelection = this.handleOffenseSelection.bind(this);
  }

  handleOffenseSelection(offenseId, e) {
    e.preventDefault();
    console.log(e.target);
    console.log(offenseId);
    if (e.target.classList.contains('OffenseTypeFilter-btn-pressed')) {
      e.target.classList.remove('OffenseTypeFilter-btn-pressed');
      this.props.dispatch(removeOffenseFromFilter(offenseId));

      return;
    }

    e.target.classList.add('OffenseTypeFilter-btn-pressed');
    this.props.dispatch(addOffenseToFilter(offenseId));
  }

  render() {
    return (
      <div className="OffenseTypeFilter-container">
        <h3>Filter by Crime</h3>
        {
          this.props.offenseTypes.map((offense, i) => {
            const style = {
              backgroundColor: offense.color
            }

            const offenseId = offense.id;

            return (
            <button
              key={i}
              style={style}
              onClick={(e) => this.handleOffenseSelection(offenseId, e)}
              className="OffenseTypeFilter-btn">
              {offense.offense_name}
            </button>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    offenseTypes: store.offenseTypes.offenseTypes
  }
}

export default connect(mapStateToProps)(OffenseTypeFilter);
