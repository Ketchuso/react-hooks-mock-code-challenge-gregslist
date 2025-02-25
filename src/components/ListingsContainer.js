import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001")
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  const listingData = listings.map((listing) => (
    <ListingCard 
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingData}
      </ul>
    </main>
  );
}

export default ListingsContainer;
