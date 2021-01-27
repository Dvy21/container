
var cars = [ 
    { 
      Name: "Maruti Suzuki - SWIFT",
      picture: "https://www.cars24.com/blog/wp-content/uploads/2019/11/swift.jpeg",
      Cost: "5.19 Lakh onwards",
      Fual: " Petrol",
      learnmore: "Learn More",
      link:"./swift.html",
      address: {
        street: "Maruti Suzuki ARENA Khivraj Motors, Adyar",
        city: "Chennai",
        state: "Tamilnadu",
        country: "India"
      },
    }, 
    { 
      Name: "Hyundai - ELITE i20",
      picture: "https://www.cars24.com/blog/wp-content/uploads/2018/04/2018-hyundai-elite-i20.jpg",
      Cost: "6.79 - 11.32 Lakhs",
      Fual: "Petrol",
      learnmore: "Learn More",
      link:"./Hyundai.html",
      address: {
        street: "L6, Sidco Industrial Estate, Ambattur",
        city: "Chennai",
        state: "Tamilnadu",
        country: "India"
      },
    },
    { 
      Name: "Mahindra - SCORPIO",
      picture: "https://www.cars24.com/blog/wp-content/uploads/2018/09/best-cars-for-a-long-drive-Mahindra-Scorpio-768x396.jpg",
      Cost: "15.87 Lakhs",
      Fual: "Diesel",
      learnmore: "Learn More",
      link:"./mahindra.html",
      address: {
        street: "Anna Salai, 184",
        city: "Chennai",
        state: "Tamilnadu",
        country: "India"
      },
    },
    { 
      Name: "Tata Motors - TIAGO",
      picture: "https://www.cars24.com/blog/wp-content/uploads/2019/11/tata-tiago-2.jpg",
      Cost: "4.7 lakhs - ₹6.63 lakhs",
      Fual: "Petrol",
      learnmore: "Learn More",
      link:"./tata.html",
      address: {
        street: "Poonamalle High Road, Arumbakkam",
        city: "Chennai",
        state: "Tamilnadu",
        country: "India"
      },
    },
   
  ];
  
  function getFullAddress(user){
    return user.address.street + "<br><br>" + user.address.state + ", " + user.address.city + ", " + user.address.country;
  }
  
  
  document.getElementById('contacts').innerHTML = "";
  
  cars.forEach( function( user ) {
    
    var html = "";  
    html += '<div class="contact-image">';
    html += '<img src="' + user.picture + '" alt="' + user.Name +  '" title="' + user.Name +  '">';
    html += '</div><div class="contact-data"><br /><br />';
    html += '<p><strong>Car Name</strong> <span class="name">' + user.Name + '</span><br /><br />';
    html += '<strong>Price:</strong> ' + user.Cost + '<br /><br />';
    html += '<strong>Fuel Type:</strong> ' + user.Fual + '<br /><br />';
    html += '<strong>Address:</strong> ' + getFullAddress(user) + '<br />';
    html += '<a href="'+user.link+'"><center><button style="border: none;color: white;float: right;padding: 8px 18px;text-align: center;text-decoration: none; display: inline-block;margin: 4px 2px;cursor: pointer;background-color: #4CAF50;">'+ user.learnmore +'</button></center>';
    html += '</div>';
  
    
    var contact = document.createElement('div');
   
    contact.setAttribute('class', 'contact');
    
    contact.innerHTML = html;
  
  
    document.getElementById('contacts').appendChild(contact);
  });