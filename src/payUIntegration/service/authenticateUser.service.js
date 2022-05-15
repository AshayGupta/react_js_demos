import axios from "axios";

export const AuthenticateUser = axios.create({
  baseURL: "https://devapi.edelweissfin.com/authentication/users",
  headers: { "Content-Type": "application/json" },
  data: {
    userName: "VmCRq",
    password: "9b2ca556-7cdd-43aa-8df9-66cf36f71590",
  },
});

const config = {
  headers: {
    "Content-Type": "application/json",
    // "x-api-key": "0jTQWLYxbG1glicMoYsNq3JPLT8U4epS3uQ8nWwj",
    "Authorization": "Basic Vm1DUnE6SGtKVml0LUp2",
    "Access": "application/json"
  }
}

export const CreateTransaction = async(data) => {
  return axios.post(
    "https://egiswitchpylon.infoaxon.com/gates/1.0/switch/createTransaction", data, config);  
}

// export const VerifyTransaction = (jwtToken, data) => axios.create({
//   baseURL: "https://devapi.edelweissfin.com/payment/verifyTransaction",
//   headers: {
//     "Content-Type": "application/json", 
//     "x-api-key": "0jTQWLYxbG1glicMoYsNq3JPLT8U4epS3uQ8nWwj",
//     "Authorization": jwtToken
//   },
//   data: {
//     id: "U2FsdGVkX19FlDt6KpN4F70hTaVJ1wf6yI+SjcQwxJA1Gu7o+70L6I5Mk+S2MZS8aAoPpMSopi0lFa9jGSELCE3elzP9KDm/0qeWAG3zyR7XpmnlcyoA/VnDZ3FIb9HphrVRfZK/Bd6TQGE/4dYu7Q==",
//     txnid: 10000396,
//   },
// });

// export const RecurringTransaction = (jwtToken, data) => axios.create({
//   baseURL: "https://devapi.edelweissfin.com/payment/recurringTransaction",
//   headers: {
//     "Content-Type": "application/json", 
//     "x-api-key": "0jTQWLYxbG1glicMoYsNq3JPLT8U4epS3uQ8nWwj",
//     "Authorization": jwtToken
//   },
//   data: {
//     businessCode: "100",
//     payload: {
//       "authpayuid": "403993715520686263",
//       "amount": 8.00,
//       "phone": "9999999999",
//       "email": "dhirajkumar.mishra@edelweissfin.com",
//     }
//   }
// });

export const UserCards = (jwtToken, data) => axios.create({
  baseURL: "https://devapi.edelweissfin.com/payment/userCards",
  headers: {
    "Content-Type": "application/json", 
    "x-api-key": "0jTQWLYxbG1glicMoYsNq3JPLT8U4epS3uQ8nWwj",
    "Authorization": jwtToken
  },
  data: {
    user_credentials: "9999999999",
    businessCode: '100'
  }
});


// Hash calculation
// Capturing successful registration response for Cards 
// Capturing successful registration response for Banks -


// fetch/stage api
// guid