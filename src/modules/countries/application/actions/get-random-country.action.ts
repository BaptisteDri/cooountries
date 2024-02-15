import { CountriesRepository } from "@/modules/countries/application/countries.repository";

export const getRandomCountry =
  ({ countriesRepository }: { countriesRepository: CountriesRepository }) =>
  async () => {
    try {
      const countries = await countriesRepository.getCountries();

      return countries[Math.floor(Math.random() * countries.length)];
    } catch (error) {
      throw error;
    }
  };
