import { hookstate } from "@hookstate/core";
import PropertyService from "../service/PropertyService";
import { Property } from "../interfaces/Iproperties";

const propertiesState = hookstate<{
  propertyData: Property[];
  featuredPropertiesData: Property[];
}>({
  propertyData: [],
  featuredPropertiesData: [],
});

//function to get all properties
//will call api and set it to propertyData
async function getProperties() {
  const response: Property[] = await PropertyService.getProperties();
  console.log(response, "FROMTHE SERVICE/API");
  propertiesState.propertyData.set(response);
}

async function getFeaturedProperties(agent_slug: string) {
  const response: Property[] = await PropertyService.getFeaturedProperties(
    agent_slug
  );
  console.log(response, "FROMTHE SERVICE/API");
  propertiesState.featuredPropertiesData.set(response);
}

export const properties = {
  propertiesState,
  getProperties,
  getFeaturedProperties,
};
