import './App.css';
import React, { useState } from 'react';
import { AuthenticateUser, CreateTransaction } from './payUIntegration/service/authenticateUser.service';

function App() {
  let [errorMsg1, setErrorMsg1] = useState('');
  let [errorMsg2, setErrorMsg2] = useState('');

  // const payUIntegration = async() => {
  //   try {
  //     const response = await AuthenticateUser.post();
  //     console.log('Resp payUIntegration ->', response);
  //     setErrorMsg1(response.data.errorMessage);
  //     createTransaction();
  //   }
  //   catch(e) {
  //     console.log('Error payUIntegration ->', e);
  //     setErrorMsg1(e.message);
  //   }
  // }

  const createTransaction = async() => {
    const data = {
      "firstname": "DhirajKumar",
      "email": "dhirajkumar.mishra@edelweissfin.com",
      "businessCode": "100",
      "productinfo": "SAU Admission 2020",
      "phone": "9650793328",
      "user_credentials": "8IpLLY:9999999999",
      "redirect_url": "http://localhost:3000/",
      "amount": 8.00,
      "isconsent": true,
      "si_details": {
          "billingAmount": "8.00",
          "billingCurrency": "INR",
          "billingCycle": "ADHOC",
          "billingInterval": 1,
          "paymentStartDate": "2022-01-27",
          "paymentEndDate": "2022-10-27"
      }
    }
    try {
      const response = await CreateTransaction(data);
      console.log('Resp createTransaction ->', response);
      // Payment Middle Layer will send encrypted string with payment identifier.
      setErrorMsg2(response.data.errorMessage);
      if (response.data) {
        openUrlInBrowser(response.data.data.data.id);
      }
    }
    catch(e) {
      console.log('Error createTransaction ->', e);
      setErrorMsg2(e.message);
    }
  }

  const openUrlInBrowser = (id='') => {
    window.open(`https://dev-payment.edelweissfin.com?id=${id}`, "_self")
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button onClick={createTransaction}>PayU Integration</button>
      <h1>{errorMsg1}</h1>
      <h1>{errorMsg2}</h1>
    </div>
  );
}

export default App;
