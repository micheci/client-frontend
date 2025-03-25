import { hookstate } from "@hookstate/core";

const PropertiesState = hookstate({
  propertyData: [],
});

//function to get all properties
//will call api and set it to propertyData
