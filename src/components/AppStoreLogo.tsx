import ToteBagIcon from "@/assets/tote-bag-white.svg";

export default function AppStoreLogo() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-black p-3 rounded-[32px] overflow-hidden">
      <div className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-b from-transparent via-slate-800/5 to-transparent backdrop-blur-sm">
        <img src={ToteBagIcon} alt="Diamond" className="w-[112px] h-[112px] mb-4 last:mb-0" />
      </div>
    </div>
  );
}
