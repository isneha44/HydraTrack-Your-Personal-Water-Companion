import React, { useState } from 'react';

const WaterIntakeForm = ({ onSubmit }) => {
  const [waterIntake, setWaterIntake] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (waterIntake.trim() !== '') {
      onSubmit(parseInt(waterIntake, 10));
      setWaterIntake('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Enter Water Intake (in cups):
        <input
          type="number"
          value={waterIntake}
          onChange={(e) => setWaterIntake(e.target.value)}
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: 20,
  },
  label: {
    display: 'block',
    marginBottom: 10,
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default WaterIntakeForm;