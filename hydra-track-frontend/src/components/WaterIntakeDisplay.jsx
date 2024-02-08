import React from 'react';

const WaterIntakeDisplay = ({ waterIntake }) => {
    const waterIntakeInML = waterIntake * 240;
  
    return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Today's Water Intake:</h2>
      <p style={styles.text}>{waterIntakeInML} ml</p>
    </div>
  );
};

const styles = {
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
  },
};

export default WaterIntakeDisplay;
