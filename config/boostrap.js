"use strict";
//import object from "../data/persons.json";

module.exports = () => {
  const fs = require("fs");
  //const strapi = require("strapi");
  const strapi = require("@strapi/strapi");
  const jsonData = JSON.parse(fs.readFileSync("./data/persons.json", "utf-8"));

  // console.log(strapi);

  jsonData.forEach((element) => {
    strapi.services.person.create({
      category_id: element.category_id,
      first_name: element.first_name,
      last_name: element.last_name,
      address: element.address,
      city_code: element.city_code,
      city: element.city,
      phone_number: element.phone_number,
      siret: element.siret,
      entreprise_name: element.entreprise_name,
      person_rank: element.person_rank,
      sponsor: element.sponsor,
      is_verified: element.is_verified,
      registered_at: element.registered_at,
      latitude: element.latitude,
      longitude: element.longitude,
      country: element.country,
      obvy_id: element.obvy_id,
      with_tax: element.with_tax,
      tva: element.tva,
      stripe_account_id: element.stripe_account_id,
      is_more_than_an_artisan: element.is_more_than_an_artisan,
      mangopay_user_id: element.mangopay_user_id,
      mangopay_account_created_by_command:
        element.mangopay_account_created_by_command,
    });
    //console.log(element.tva);
  });
};
