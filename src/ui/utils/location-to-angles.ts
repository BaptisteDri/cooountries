type Location = {
  latitude: number;
  longitude: number;
};

export const locationToAngles = ({
  latitude,
  longitude,
}: Location): [number, number] => [
  Math.PI - ((longitude * Math.PI) / 180 - Math.PI / 2),
  (latitude * Math.PI) / 180,
];
