import {User} from "./User";
import { Company } from "./Company";

// assiging from the User to the user

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  });