// @TODO: create a new action to get false answers

import { actions } from "@/config/actions";
import { dependencies } from "@/config/dependencies";
import { Country } from "@/modules/countries/domain/country";
import { Button } from "@/ui/components/button";
import { use, useEffect, useState } from "react";

type Props = {
  goodAnswer?: Country;
  launchGame: () => void;
};

export const GameController = ({ goodAnswer, launchGame }: Props) => {
  const [answers, setAnswers] = useState<Country[]>();
  const [answeredCountry, setAnsweredCountry] = useState<Country>();
  const [answerStatus, setAnswerStatus] = useState<
    "success" | "error" | undefined
  >();

  const getFalseAnswers = async (goodAnswer: Country) => {
    const falseAnswers = await actions.countries.getFalseAnswers(dependencies)(
      goodAnswer
    );
    setAnswers([...falseAnswers, goodAnswer].sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    if (!goodAnswer) return;

    getFalseAnswers(goodAnswer);
  }, [goodAnswer]);

  useEffect(() => {
    if (!answerStatus) return;

    setTimeout(() => {
      launchGame();
      setAnswerStatus(undefined);
    }, 1500);
  }, [answerStatus, launchGame]);

  return answers ? (
    <div className="grid grid-cols-2 gap-4">
      {answers.map((country, index) => (
        <Button
          key={index}
          intent={
            answerStatus && country === goodAnswer
              ? "success"
              : answeredCountry === country
              ? answerStatus
              : "primary"
          }
          onClick={() => {
            setAnsweredCountry(country);
            setAnswerStatus(country === goodAnswer ? "success" : "error");
          }}
        >
          {country.name}
        </Button>
      ))}
    </div>
  ) : (
    <Button onClick={launchGame}>Play</Button>
  );
};
