import { useState } from 'react';
import { Minus, Plus, Check, Undo2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';

interface WorkerScreenProps {
  phase: 'idle' | 'stepped' | 'updated' | 'confirmed';
  onManualUpdate?: () => void;
}

export default function WorkerScreen({ phase, onManualUpdate }: WorkerScreenProps) {
  const data = site.productDemo.scenarios[2];
  const [internalCount, setInternalCount] = useState<number>(data.usedAmount);

  const isStepped = phase === 'stepped' || phase === 'updated' || phase === 'confirmed';
  const isUpdated = phase === 'updated' || phase === 'confirmed';

  return (
    <div className="h-full flex flex-col justify-between p-3 bg-slate-50/50 text-xs select-none relative overflow-hidden">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/80">
          <div>
            <h5 className="font-jakarta font-bold text-ink text-xs">Kitchen Staff Log</h5>
            <p className="text-[9px] text-muted">Role: Employee • Outlet 1</p>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue/10 text-blue font-semibold">
            Quick Log
          </span>
        </div>

        {/* Selected Item Card */}
        <div className="p-2 rounded-xl bg-surface border border-blue/40 shadow-xs mb-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-jakarta font-bold text-ink text-xs">{data.workerItem}</p>
              <p className="text-[9px] text-muted">Chiller Store • {data.unit}</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-muted block">In stock:</span>
              <span className="font-bold text-ink text-xs">
                {isUpdated ? data.initialStock - data.usedAmount : data.initialStock} {data.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Stepper Input */}
        <div className="p-2.5 rounded-xl bg-surface border border-border/80 text-center">
          <p className="text-[10px] text-muted mb-1.5 font-medium">Quantity Used Today</p>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setInternalCount((c) => Math.max(1, c - 1))}
              className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-ink hover:bg-slate-200 transition-colors"
            >
              <Minus size={12} />
            </button>

            <motion.span
              key={isStepped ? internalCount : 0}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="font-jakarta font-extrabold text-lg text-ink tabular-nums w-14 text-center"
            >
              {isStepped ? internalCount : 0} {data.unit}
            </motion.span>

            <button
              type="button"
              onClick={() => setInternalCount((c) => c + 1)}
              className="w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center hover:bg-blue-hover transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action & Confirmation Toast */}
      <div>
        <AnimatePresence>
          {isUpdated && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-2 p-2 rounded-lg bg-green-50 border border-green-200 text-[10px] text-green-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <Check size={12} className="text-green-600" />
                <span className="font-medium">{data.toast}</span>
              </div>
              <button
                type="button"
                className="text-[9px] font-semibold text-green-700 underline flex items-center gap-0.5"
              >
                <Undo2 size={9} /> Undo
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={onManualUpdate}
          id="demo-worker-submit-button"
          className={`w-full py-2 rounded-xl font-jakarta font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isUpdated
              ? 'bg-green-600 text-white'
              : 'bg-blue text-white hover:bg-blue-hover shadow-sm'
          }`}
        >
          {isUpdated ? (
            <>
              <Check size={13} /> Logged Successfully
            </>
          ) : (
            'Record Usage'
          )}
        </button>
      </div>
    </div>
  );
}
