import { hookstate } from "@hookstate/core";
import PropertyService from "../service/PropertyService";
import { Property } from "../interfaces/Iproperties";

const propertiesState = hookstate<{ propertyData: Property[] }>({
  propertyData: [],
});

//function to get all properties
//will call api and set it to propertyData
async function getProperties() {
  //const response = await fetch('/backend');
  //const propertiesData=response.json();
  //propertiesState.propertiesData.set(data)
  const response: Property[] = await PropertyService.getProperties();
  console.log(response, "FROMTHE SERVICE/API");
  propertiesState.propertyData.set(response);
}

export const properties = {
  propertiesState,
  getProperties,
};
