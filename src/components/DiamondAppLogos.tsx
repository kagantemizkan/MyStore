import { useMemo } from "react";
import { apps } from "@/data/apps";

export default function DiamondAppLogos() {
  const diamondApps = useMemo(() => {
    const appsCycle = [...apps, ...apps.slice(0, 10), ...apps.slice(0, 3)];

    return {
      row1: appsCycle.slice(0, 1), // 1 app
      row2: appsCycle.slice(1, 3), // 2 apps
      row3: appsCycle.slice(3, 6), // 3 apps
      row4: appsCycle.slice(6, 10), // 4 apps
      row5: appsCycle.slice(10, 13), // 3 apps
      row6: appsCycle.slice(13, 17), // 3 apps
      row7: appsCycle.slice(16, 19), // 3 apps
      row8: appsCycle.slice(19, 21), // 2 apps
      row9: appsCycle.slice(21, 22), // 1 app
    };
  }, []);

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 mt-[-8rem] sm:mt-[-10rem] md:mt-[-14rem] lg:mt-[-16rem]">
      {/* Column 1 - 1 logo */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row1.map((app, index) => (
          <div
            key={`col1-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 2 - 2 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row2.map((app, index) => (
          <div
            key={`col2-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 3 - 3 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row3.map((app, index) => (
          <div
            key={`col3-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 4 - 4 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row4.map((app, index) => (
          <div
            key={`col4-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 5 - 3 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row5.map((app, index) => (
          <div
            key={`col5-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 6 - 4 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row6.map((app, index) => (
          <div
            key={`col6-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 7 - 3 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row7.map((app, index) => (
          <div
            key={`col7-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 8 - 2 logos */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row8.map((app, index) => (
          <div
            key={`col8-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Column 9 - 1 logo */}
      <div className="flex flex-col justify-center items-center">
        {diamondApps.row9.map((app, index) => (
          <div
            key={`col9-${index}`}
            className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[112px] lg:h-[112px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 last:mb-0"
          >
            <img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
