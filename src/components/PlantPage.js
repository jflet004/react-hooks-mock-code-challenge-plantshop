import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(plantData => setPlants(plantData))
      .catch(error => alert(error))
  }, [])

  const handleAddPlant = (newPlant) => setPlants([...plants, newPlant])
  const searchedPlant = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm
        onAddPlant={handleAddPlant}
      />
      <Search
        setSearch={setSearch}
      />
      <PlantList
        plants={searchedPlant}
      />
    </main>
  );
}

export default PlantPage;
