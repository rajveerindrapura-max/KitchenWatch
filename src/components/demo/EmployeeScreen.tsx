import { useState } from 'react';
import { Minus, Plus, Check, Undo2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';

interface EmployeeScreenProps {
  phase: 'idle' | 'stepped' | 'updated' | 'confirmed';
  onManualUpdate?: () => void;
}

export default function EmployeeScreen({ phase, onManualUpdate }: EmployeeScreenProps) {
  const data = site.productDemo.scenarios[2];
  const [internalCount, setInternalCount] = useState<number>(data.usedAmount);

  const isStepped = phase === 'stepped' || phase === 'updated' || phase === 'confirmed';
  const isUpdated = phase === 'updated' || phase === 'confirmed';

  return (
    <div className="h-full flex flex-col justify-between p-3.5 bg-[#F5F5F7] text-xs select-none relative overflow-hidden font-sans">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#E4E7EC]">
          <div>
            <h5 className="font-semibold text-ink text-xs">Kitchen Staff Log</h5>
            <p className="text-[10px] text-muted">Role: Employee • Outlet 1</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-tint text-blue font-medium">
            Quick Log
          </span>
        </div>

        {/* Selected Item Card */}
        <div className="p-2.5 rounded-xl bg-surface border border-[#E4E7EC] shadow-subtle mb-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-ink text-xs">{data.employeeItem}</p>
              <p className="text-[10px] text-muted">Chiller Store • {data.unit}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted block">In stock:</span>
              <span className="font-bold text-ink text-xs font-mono">
                {isUpdated ? data.initialStock - data.usedAmount : data.initialStock} {data.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Stepper Input */}
        <div className="p-3 rounded-xl bg-surface border border-[#E4E7EC] text-center shadow-subtle">
          <p className="text-[11px] text-muted mb-2 font-medium">Quantity Used Today</p>

          <div className="flex items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setInternalCount((c) => Math.max(1, c - 1))}
              className="w-8 h-8 rounded-full bg-[#F5F5F7] border border-[#E4E7EC] flex items-center justify-center text-ink hover:bg-[#E4E7EC] transition-colors"
            >
              <Minus size={13} strokeWidth={1.5} />
            </button>

            <motion.span
              key={isStepped ? internalCount : 0}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="font-bold text-lg text-ink font-mono tabular-nums w-14 text-center"
            >
              {isStepped ? internalCount : 0} {data.unit}
            </motion.span>

            <button
              type="button"
              onClick={() => setInternalCount((c) => c + 1)}
              className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center hover:bg-blue-hover transition-colors shadow-sm"
            >
              <Plus size={13} strokeWidth={1.5} />
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
              className="mb-2.5 p-2.5 rounded-xl bg-green-tint border border-green/20 text-[11px] text-green flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <Check size={13} strokeWidth={2} className="text-green" />
                <span className="font-medium">{data.toast}</span>
              </div>
              <button
                type="button"
                className="text-[10px] font-semibold text-green underline flex items-center gap-0.5 cursor-pointer"
              >
                <Undo2 size={10} strokeWidth={1.5} /> Undo
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={onManualUpdate}
          id="demo-employee-submit-button"
          className={`w-full py-2.5 rounded-full font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            isUpdated
              ? 'bg-green text-white shadow-sm'
              : 'bg-blue text-white hover:bg-blue-hover shadow-sm'
          }`}
        >
          {isUpdated ? (
            <>
              <Check size={13} strokeWidth={2} />
              <span>Usage Recorded</span>
            </>
          ) : (
            <span>Log Usage</span>
          )}
        </button>
      </div>
    </div>
  );
}
