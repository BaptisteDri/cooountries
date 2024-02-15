import { CountriesRepository } from "@/modules/countries/application/countries.repository";
import countries from "@/modules/countries/infrastructure/countries.json";

export const CountriesLocal = (): CountriesRepository => ({
  getCountries: async () => {
    return countries;
  },
});
