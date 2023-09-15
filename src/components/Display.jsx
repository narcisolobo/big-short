import React from 'react';

function Display(props) {
  const { housePurchases, handleReject, handleDelete } = props;

  const handleCheck = (e, targetId) => {
    handleReject(e, targetId);
  };

  return housePurchases.map((housePurch) => (
    <div
      className={`card shadow mb-3 ${
        housePurch.isRejected ? 'text-secondary' : ''
      }`}
      key={housePurch.id}>
      <div className="card-body">
        <div>
          <p className="card-text">House: {housePurch.homeName}</p>
          <p className="card-text">Amount: {housePurch.offer}</p>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={housePurch.isRejected}
            id={housePurch.id}
            onChange={(e) => handleCheck(e, housePurch.id)}
          />
          <label className="form-check-label" htmlFor={housePurch.id}>
            Reject
          </label>
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(housePurch.id)}>
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  ));
}

export default Display;
