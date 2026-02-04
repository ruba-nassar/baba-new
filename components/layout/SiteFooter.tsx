export default function SiteFooter() {
  return (
    <footer className="bg-[#2f2f2f] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="text-sm tracking-wide">
            
          </div>

          {/* RIGHT */}
          <div className="text-sm leading-7">
            <h4 className="font-bold text-white tracking-wide mb-3">
              JORDAN
            </h4>

            <p>
              AMMAN – QUEEN RANIA STREET,  BLDG NO. 362
            </p>
            <p>
              P.O. BOX 332 – AMMAN 11118, JORDAN
            </p>
            <p>
              TEL.: +962 6 552 7742
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © Nature Horizon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
