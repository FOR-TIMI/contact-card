import {getDb} from './database';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

export const fetchCards = async () => {
    // Grab card data from IndexedDB using our READ function
      const result = await getDb();

      let cardContent = ` `;

      // Loop through the data and create the contact card
      for (let data of result) {
        let profilePic = data.profile;
        
        // Create cards
      cardContent+= `
          <div class="card shadow p-3 mb-5 bg-body rounded" data-id="${data.id}">
            <div class="card-header" data-name="${data.name}">
            ${data.name} 
            </div>
          <div class="card-body">
          <img src="${profilePic === "Bear" ? Bear : Dog}" class="card-img-top" alt="...">
          <h5 class="card-title" data-email="${data.email}">${data.email}</h5>
          <h5 class="card-title" data-phone="${data.phone}">${data.phone}</h5>
          <button class="btn btn-danger" data-id="${data.id}" data-name="${data.name}" data-phone="${data.phone}" data-email= "${data.email}" onclick="editCard(this)" >Edit</button>
          <button class="btn btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
        </div>
        </div>    
        `
        
      };
      
      // Setting innerHTML as card variable
      document.getElementById('card-gallery').innerHTML = cardContent;
      };
