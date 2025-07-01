const axios = require('axios');

axios.get('http://51.105.241.241:5000/tasks')
  .then(response => {
    console.log('📋 Received tasks from server:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('❌ Error fetching data:', error.message);
  });

