import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addOffenseToFilter } from '../../../actions/addOffenseToFilterAction';
import { removeOffenseFromFilter } from '../../../actions/removeOffenseFromFilterAction';

import FaFilter from 'react-icons/lib/fa/filter';
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
        <div className="OffenseTypeFilter-header">
          <FaFilter className="OffenseTypeFilter-icon"/>
          <h3>Filter by Incident</h3>
        </div>

        <div className="OffenseTypeFilter-btns">
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
