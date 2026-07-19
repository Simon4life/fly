export default function HistoryContent() {
  return (
    <div className="space-y-16">
      {/* Section: Today */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] text-tertiary uppercase">
            Today
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* History Card 1 */}
          <div className="glass-panel group relative rounded-xl overflow-hidden shadow-2xl shadow-black/20 p-5 border-t border-l border-white/5 transition-all hover:translate-y-[-4px]">

            <div className="h-48 rounded-lg overflow-hidden mb-4 relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6jBZlUSX5xexCHCrx96Ouh6j97tjsWHRUNy7eMIttQE5EcXpHNO2eZpj48cTL_VADzocxwy66vM_7GMKzH4ZPn9XjjUEoqGq4Rb-timnKuA16QHCsgdV0dIF_Xmkb_4CjsCJKQqwrqp3xKizV8FIZQ4XgvsPV-f76z8Cp6P9WkyXEEmuUcGAHTyIjQDZiE7CVuOH_sPL6_MlrI6m6-Dr4ouEZB52rZpbcqNCHjjgzjrZukVHHrCIWzk12wMTaUaGf135s49ZhSltu"
                alt="Quantum computer processor"
              />

              <span className="absolute top-3 left-3 bg-tertiary text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                Tech
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-outline uppercase font-semibold">
                  The Verge • 2m read
                </span>

                <span className="text-[10px] text-outline">
                  10:45 AM
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                Quantum Supremacy: The Next Frontier of Computing
              </h3>

              <p className="text-sm text-on-surface-variant line-clamp-2">
                Exploring the latest breakthroughs in sub-zero processing and
                the implications for global cybersecurity infrastructures.
              </p>
            </div>
          </div>

          {/* History Card 2 */}
          <div className="bg-surface-container-low group rounded-xl overflow-hidden p-5 transition-all hover:bg-surface-container">
            {/* ... */}
          </div>

          {/* History Card 3 */}
          <div className="bg-surface-container-low group rounded-xl overflow-hidden p-5 transition-all hover:bg-surface-container">
            {/* ... */}
          </div>

        </div>
      </section>

      {/* Section: Last Week */}
      <section>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase">
            Last Week
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
        </div>

        <div className="space-y-4">

          {/* List Item 1 */}
          <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-6 hover:bg-surface-container transition-colors group">
            {/* ... */}
          </div>

          {/* List Item 2 */}
          <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-6 hover:bg-surface-container transition-colors group">
            {/* ... */}
          </div>

        </div>
      </section>
    </div>
  );
}