import { getFalseAnswers } from "@/modules/countries/application/actions/get-false-answers.action";
import { getRandomCountry } from "@/modules/countries/application/actions/get-random-country.action";

export const actions = {
  countries: {
    getRandomCountry,
    getFalseAnswers,
  },
};
