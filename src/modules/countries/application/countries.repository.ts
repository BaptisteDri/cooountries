import { Country } from "@/modules/countries/domain/country";

export type CountriesRepository = {
  getCountries: () => Promise<Country[]>;
};
