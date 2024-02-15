import { CountriesRepository } from "@/modules/countries/application/countries.repository";
import { CountriesLocal } from "@/modules/countries/infrastructure/countries.local";

export type Dependencies = {
  countriesRepository: CountriesRepository;
};

export const dependencies: Dependencies = {
  countriesRepository: CountriesLocal(),
};
