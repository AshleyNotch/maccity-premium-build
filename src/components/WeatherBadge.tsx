import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, CloudFog, CloudLightning } from "lucide-react";

type W = { temp: number; code: number };

const describe = (code: number): { label: string; Icon: typeof Cloud } => {
  if (code === 0) return { label: "Clear", Icon: Sun };
  if ([1, 2].includes(code)) return { label: "Partly cloudy", Icon: Cloud };
  if (code === 3) return { label: "Overcast", Icon: Cloud };
  if ([45, 48].includes(code)) return { label: "Fog", Icon: CloudFog };
  if (code >= 51 && code <= 67) return { label: "Rain", Icon: CloudRain };
  if (code >= 71 && code <= 77) return { label: "Snow", Icon: CloudSnow };
  if (code >= 80 && code <= 82) return { label: "Showers", Icon: CloudRain };
  if (code >= 95) return { label: "Thunderstorm", Icon: CloudLightning };
  return { label: "—", Icon: Cloud };
};

export function WeatherBadge() {
  const [w, setW] = useState<W | null>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-38.00&longitude=145.22&current=temperature_2m,weather_code&timezone=Australia%2FMelbourne",
    )
      .then((r) => r.json())
      .then((d) =>
        setW({ temp: Math.round(d.current.temperature_2m), code: d.current.weather_code }),
      )
      .catch(() => {});
  }, []);

  const today = new Date().toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const { label, Icon } = describe(w?.code ?? 3);

  return (
    <div className="pointer-events-none hidden rounded-xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-md sm:block">
      <div className="text-[10px] uppercase tracking-widest text-white/50">
        Dandenong South, VIC
      </div>
      <div className="mt-1 flex items-center gap-3">
        <div className="text-lg font-semibold leading-none text-white">{label}</div>
        <div className="flex items-center gap-1.5 text-lg font-semibold leading-none text-white">
          {w ? `${w.temp}°C` : "--°"}
          <Icon className="h-4 w-4 text-white/50" />
        </div>
      </div>
      <div className="mt-1 text-[11px] text-white/50">{today}</div>
    </div>
  );
}
