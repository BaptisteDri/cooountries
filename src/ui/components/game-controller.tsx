// @TODO: create a new action to get false answers

import { Country } from "@/modules/countries/domain/country";
import { Button } from "@/ui/components/button";

type Props = {
  goodAnswer?: Country;
  launchGame: () => void;
};

export const GameController = ({ goodAnswer, launchGame }: Props) => {
  return (
    <section className="font-code bg-[#a2a09f] w-fit mx-auto p-4 rounded rounded-br-2xl grid grid-cols-4 gap-4">
      <Button>france</Button>
      <Button intent={"error"}>united states of america</Button>
      <Button intent={"success"}>success</Button>
      <Button intent={"accent"}>play</Button>
    </section>
  );
};
