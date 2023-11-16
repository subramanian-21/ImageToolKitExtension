const axios =require('axios')
const memeCreator = ()=>{
    const postData = {
        background: 'https://18e4-2401-4900-230f-a0c8-3dcf-d223-f2e7-9703.ngrok.io/1700101256326_819.jpg',
        style: 'string',
        text: [
          'this is me sajxb uisbxx nisabsa isxisbbsa',
          'sabuicbuicbsauibcusa sauicbuisacnicusancu asucbsaiubciusa',
          'bhkcvvwjkx dscbjkdsbkdc'
        ],
        layout: 'string',
        font: 'string',
        extension: 'string',
        redirect: false
      };
      
      axios.post('https://api.memegen.link/images/custom', postData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Response:', response.data);
          // Handle the response data as needed
        })  .catch(error => {
            console.error('Error:', error);
            // Handle errors
          });
}
module.exports = memeCreator