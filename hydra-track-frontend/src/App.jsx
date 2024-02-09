import React, { useState } from 'react';
import WaterIntakeForm from './components/WaterIntakeForm';
import WaterIntakeDisplay from './components/WaterIntakeDisplay';

const App = () => {
  const [totalWaterIntake, setTotalWaterIntake] = useState(0);

  const handleWaterIntakeSubmit = (intake) => {
    setTotalWaterIntake(totalWaterIntake + intake);
  };

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.heading}>Hydra Track: Your Personal Water Companion</h1>
      <WaterIntakeForm onSubmit={handleWaterIntakeSubmit} />
      <WaterIntakeDisplay waterIntake={totalWaterIntake} />
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
};

export default App;