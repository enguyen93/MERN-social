import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {

    onDeleteClick(id) {
        this.props.deleteEducation(id)
    }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
            {console.log(<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> - 
          {/* Null for some reason doesn't want to work in place of '' */}
          {edu.to === '' ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <btn className="btn btn-danger" onClick={(this.onDeleteClick.bind(this, edu._id))}>Delete</btn>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education stuffs</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
