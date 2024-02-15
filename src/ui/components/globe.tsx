"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { locationToAngles } from "@/ui/utils/location-to-angles";
import { Country } from "@/modules/countries/domain/country";
import { actions } from "@/config/actions";
import { dependencies } from "@/config/dependencies";

export const Globe = () => {
  const canvasRef = useRef<any>();
  const focusRef = useRef([0, 0]);
  const locationRef = useRef([0, 0]);

  const [randomCountry, setRandomCountry] = useState<Country>();

  const getRandomCountry = async () => {
    const country = await actions.countries.getRandomCountry(dependencies)();

    const { latitude, longitude } = country;

    setRandomCountry(country);

    locationRef.current = [latitude, longitude];

    focusRef.current = locationToAngles({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;

    const doublePi = Math.PI * 2;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 80000,
      mapBrightness: 1,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        {
          location: [0, 0],
          size: 0.05,
        },
      ],
      opacity: 0.9,
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;

        state.markers = [
          {
            location: locationRef.current,
            size: 0.05,
          },
        ];
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"));

    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[80dvh] aspect-square relative m-auto">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
      <div className="space-y-4 flex flex-col justify-center">
        <div className="text-center">
          {randomCountry?.name || "Select country"}
        </div>
        <button
          onClick={() => {
            getRandomCountry();
          }}
        >
          Go to random country
        </button>
      </div>
    </div>
  );
};
