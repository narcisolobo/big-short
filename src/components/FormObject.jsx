import React from 'react';
import { useState } from 'react';

function FormObject(props) {
  const { housePurchases, setHousePurchases } = props;

  const [application, setApplication] = useState({
    id: crypto.randomUUID(),
    homeName: '',
    offer: 0,
    isRejected: false,
  });
  const [error, setError] = useState('');

  const handleVals = (e) => {
    console.log(e.target.name, e.target.value);
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const buyHome = (e) => {
    e.preventDefault();
    if (application.homeName.length < 3 || application.offer < 3) {
      setError('Invalid submission please try again');
    } else {
      setError('');
      console.log(application);
      setHousePurchases([...housePurchases, application]);

      setApplication({
        id: crypto.randomUUID(),
        homeName: '',
        offer: 0,
        isRejected: false,
      });
    }
  };

  return (
    <div className="card shadow mb-3">
      <h1 className="card-header">Buy a home!</h1>
      <div className="card-body">
        <form onSubmit={buyHome}>
          {error ? <p>{error}</p> : null}
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="homeName" className="form-label">
                Home:
              </label>
              <input
                type="text"
                value={application.homeName}
                id="homeName"
                name="homeName"
                onChange={handleVals}
                className="form-control"
              />
              {application.homeName.length < 3 &&
              application.homeName.length > 0 ? (
                <p>Home name needs to be longer than 3 characters</p>
              ) : null}
            </div>
            <div className="col">
              <label htmlFor="offer" className="form-label">
                offer:
              </label>
              <input
                type="number"
                value={application.offer}
                id="offer"
                name="offer"
                onChange={handleVals}
                className="form-control"
              />
              {application.offer < 3 && application.offer > 0 ? (
                <p>Offer needs to be greater than 3</p>
              ) : null}
            </div>
          </div>
          <div className="text-end">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      {/* line 36 was added at the very end of lecture after our end of class stuf */}
      {/* <p>HomeName: {application.homeName}</p> */}
      {/* This show real time updates  */}
    </div>
  );
}

export default FormObject;
