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
      setAnswers(undefined);
    }, 1500);
  }, [answerStatus, launchGame]);

  return (
    <section className="font-code  flex justify-center w-fit mx-auto py-8 px-16 rounded-sm rounded-br-2xl">
      {answers ? (
        <div className="w-fit grid grid-cols-2 gap-4">
          {answers.map((country, index) => (
            <Button
              key={index}
              intent={answeredCountry === country ? answerStatus : "default"}
              onClick={() => {
                setAnsweredCountry(country);
                setAnswerStatus(country === goodAnswer ? "success" : "error");
              }}
            >
              <span className="line-clamp-3">{country.name}</span>
            </Button>
          ))}
        </div>
      ) : (
        <Button intent={"accent"} onClick={launchGame}>
          play
        </Button>
      )}
    </section>
  );
};
