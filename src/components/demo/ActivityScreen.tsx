import { Activity, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';

interface ActivityScreenProps {
  hasNewActivity: boolean;
}

export default function ActivityScreen({ hasNewActivity }: ActivityScreenProps) {
  const data = site.productDemo.scenarios[2];

  const historicalRows = [
    {
      type: 'Transfer',
      qty: '10 L',
      item: 'Cooking oil',
      outlet: 'Outlet 1 → Outlet 2',
      role: 'Manager',
      time: '14m ago',
      color: 'bg-blue-tint text-blue',
    },
    {
      type: 'Stock usage',
      qty: '-5 kg',
      item: 'Chicken',
      outlet: 'Outlet 1',
      role: 'Employee',
      time: '45m ago',
      color: 'bg-slate-100 text-slate-700',
    },
    {
      type: 'Wastage',
      qty: '-2 kg',
      item: 'Milk',
      outlet: 'Outlet 3',
      role: 'Employee',
      time: '2h ago',
      color: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <div className="h-full flex flex-col p-3 sm:p-4 bg-[#F5F5F7]/50 text-xs overflow-hidden select-none font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue" />
          <h4 className="font-sans font-semibold text-ink text-sm sm:text-base">
            Live Activity Feed
          </h4>
          <span className="text-[10px] text-muted font-medium">All outlets audit trail</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-blue font-semibold bg-blue-tint px-2 py-0.5 rounded-md">
          <Activity size={10} className="animate-pulse" />
          <span>Listening for updates...</span>
        </div>
      </div>

      {/* Real-time status banner */}
      <div className="my-2.5 p-2 rounded-xl bg-surface border border-border flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-tint flex items-center justify-center text-blue">
            <Bell size={12} />
          </div>
          <span className="text-[10px] text-muted font-medium">
            Updates logged by mobile staff appear here in real time.
          </span>
        </div>
        <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold border border-emerald-200/50">
          Synced
        </span>
      </div>

      {/* Feed list */}
      <div className="flex-1 rounded-xl bg-surface border border-border p-2 sm:p-2.5 overflow-hidden flex flex-col shadow-xs">
        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-border/60">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            Recent Movements
          </span>
          <span className="text-[9px] text-muted">Chronological</span>
        </div>

        <div className="space-y-1.5 overflow-y-auto pr-0.5">
          {/* New row sliding in when employee logs on phone */}
          <AnimatePresence>
            {hasNewActivity && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10, backgroundColor: 'rgba(47,107,255,0.08)' }}
                animate={{ opacity: 1, height: 'auto', y: 0, backgroundColor: 'rgba(238,243,255,0.8)' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-2 rounded-lg border border-blue/30 flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue text-white font-semibold text-[9px]">
                    {data.activityFeedRow.type}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">
                      {data.activityFeedRow.qty} {data.activityFeedRow.item}
                    </p>
                    <p className="text-[9px] text-muted">
                      {data.activityFeedRow.outlet} • Role: {data.activityFeedRow.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-semibold text-blue bg-blue-tint px-2 py-0.5 rounded-full inline-block animate-pulse">
                    Just now
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Historical rows */}
          {historicalRows.map((row, i) => (
            <div
              key={i}
              className="p-2 rounded-lg bg-[#F5F5F7] border border-border/50 flex items-center justify-between text-[11px]"
            >
              <div className="flex items-center gap-2">
                <span className={`px-1.5 py-0.5 rounded font-semibold text-[9px] ${row.color}`}>
                  {row.type}
                </span>
                <div>
                  <p className="font-semibold text-ink">
                    {row.qty} {row.item}
                  </p>
                  <p className="text-[9px] text-muted">
                    {row.outlet} • Role: {row.role}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-muted font-mono">{row.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
