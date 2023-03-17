 const apiKey = 'Lu4DBt-dCI0--2TVd7Bs5eikTkP8zxshncCUqK0qKGNAjms8v4In7X3N5LSPD6Q3YtRKb_lr0UAAt31DfndNx4ujazvcGxrJ3eqqxhJCA4cKKA5hGE0uW4n8TFcPZHYx'

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        console.log(jsonResponse)
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;