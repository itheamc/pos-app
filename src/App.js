import React from 'react';
import './App.css';
import BillingDashboard from './features/billing_dashboard/BillingDashboard';
import MultiBillingDashboard from './features/billing_dashboard/MultiBillingDashboard';

function App() {
  return (
    <div className="App">
      <MultiBillingDashboard />
    </div>
  );
}

export default App;
