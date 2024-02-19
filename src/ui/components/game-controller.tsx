// @TODO: create a new action to get false answers

import { actions } from "@/config/actions";
import { dependencies } from "@/config/dependencies";
import { Country } from "@/modules/countries/domain/country";
import { Button } from "@/ui/components/button";
import { SuccessRate } from "@/ui/components/success-rate";
import { useEffect, useState } from "react";

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
  const [goodAnswersAmount, setGoodAnswersAmount] = useState<number>(0);
  const [totalAnswers, setTotalAnswers] = useState<number>(0);
  const [successRate, setSuccessRate] = useState<number>(0);

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

  const setAnswersAmounts = (success: boolean) => {
    if (success) {
      setGoodAnswersAmount((prev) => prev + 1);
    }

    setTotalAnswers((totalAnswers) => totalAnswers + 1);
  };

  useEffect(() => {
    if (!answerStatus) return;

    setTimeout(() => {
      launchGame();
      setAnswerStatus(undefined);
    }, 1500);
  }, [answerStatus, launchGame]);

  useEffect(() => {
    if (!goodAnswersAmount || !totalAnswers) return;

    setSuccessRate(Math.round((goodAnswersAmount / totalAnswers) * 100));
  }, [goodAnswersAmount, totalAnswers]);

  return (
    <div className="space-y-3">
      {answers ? (
        <>
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
                  setAnswersAmounts(country === goodAnswer);
                }}
              >
                {country.name}
              </Button>
            ))}
          </div>
          <SuccessRate successRate={successRate} totalAnswers={totalAnswers} />
        </>
      ) : (
        <Button onClick={launchGame}>Guess the country!</Button>
      )}
    </div>
  );
};
