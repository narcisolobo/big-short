import { useState } from 'react';
import Form from './components/Form';
import FormObject from './components/FormObject';
import Display from './components/Display';

function App() {
  const [housePurchases, setHousePurchases] = useState([]);

  const handleReject = (e, targetId) => {
    const modifiedPurchases = [...housePurchases].map((purchase) => {
      if (purchase.id === targetId) {
        purchase.isRejected = e.target.checked;
      }
      return purchase;
    });
    setHousePurchases(modifiedPurchases);
  };

  const handleDelete = (targetId) => {
    const filteredPurchases = [...housePurchases].filter((purchase) => {
      return purchase.id !== targetId;
    });
    setHousePurchases(filteredPurchases);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      {/* <Form/> */}
      <section>
        <FormObject
          housePurchases={housePurchases}
          setHousePurchases={setHousePurchases}
        />
        <Display
          housePurchases={housePurchases}
          handleReject={handleReject}
          handleDelete={handleDelete}
        />
      </section>
    </div>
  );
}

export default App;
