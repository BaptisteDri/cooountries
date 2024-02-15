import { CountriesRepository } from "@/modules/countries/application/countries.repository";
import { Country } from "@/modules/countries/domain/country";

export const getFalseAnswers =
  ({ countriesRepository }: { countriesRepository: CountriesRepository }) =>
  async (goodAnswer: Country) => {
    try {
      const countries = await countriesRepository.getCountries();
      const falseAnswers: number[] = [];

      while (falseAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        if (
          randomIndex !==
            countries.findIndex(
              (country: any) => country.name === goodAnswer.name
            ) &&
          !falseAnswers.includes(randomIndex)
        ) {
          falseAnswers.push(randomIndex);
        }
      }

      return falseAnswers.map((index) => countries[index]);
    } catch (error) {
      throw error;
    }
  };
