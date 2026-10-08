import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';

interface TransferScreenProps {
  phase: 'idle' | 'stepped' | 'confirmed' | 'recorded';
  onManualTransfer?: () => void;
}

export default function TransferScreen({ phase, onManualTransfer }: TransferScreenProps) {
  const data = site.productDemo.scenarios[1];
  const unit = 'L';
  const isTransferred = phase === 'confirmed' || phase === 'recorded';
  const isStepped = phase === 'stepped' || isTransferred;

  const fromQty = isTransferred ? data.finalFrom : data.fromStock;
  const toQty = isTransferred ? data.finalTo : data.toStock;
  const transferQty = isStepped ? data.transferAmount : 0;

  return (
    <div className="h-full flex flex-col p-3 sm:p-4 bg-slate-50/40 text-xs overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-border/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue" />
          <h4 className="font-jakarta font-bold text-ink text-sm sm:text-base">
            Stock Transfer
          </h4>
          <span className="text-[10px] text-muted font-medium">Inter-outlet movement</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-muted bg-white px-2 py-0.5 rounded-md border border-border">
          <RefreshCw size={10} className={isTransferred ? 'animate-spin text-blue' : ''} />
          <span>Real-time sync</span>
        </div>
      </div>

      {/* From and To Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2.5">
        {/* FROM PANEL */}
        <div className="p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-muted mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-slate-500">
              Source (FROM)
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-ink font-semibold">
              {data.fromOutlet}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-ink text-sm">{data.item}</p>
              <p className="text-[10px] text-muted">Cooking store</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted block">Available:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={fromQty}
                  initial={{ scale: 1.2, color: '#2563EB' }}
                  animate={{ scale: 1, color: '#0B1220' }}
                  className="font-jakarta font-extrabold text-sm sm:text-base tabular-nums"
                >
                  {fromQty} {unit}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {isTransferred && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1.5 pt-1.5 border-t border-dashed border-border/80 text-[10px] text-blue-700 font-medium flex items-center justify-between"
            >
              <span>Dispatched</span>
              <span className="font-bold">-{data.transferAmount} {unit}</span>
            </motion.div>
          )}
        </div>

        {/* TO PANEL */}
        <div className="p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-muted mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-slate-500">
              Destination (TO)
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue font-semibold">
              {data.toOutlet}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-ink text-sm">{data.item}</p>
              <p className="text-[10px] text-amber-600 font-medium">Low stock item</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-muted block">Stock level:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={toQty}
                  initial={{ scale: 1.2, color: '#15803D' }}
                  animate={{ scale: 1, color: isTransferred ? '#15803D' : '#B45309' }}
                  className="font-jakarta font-extrabold text-sm sm:text-base tabular-nums"
                >
                  {toQty} {unit}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {isTransferred && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1.5 pt-1.5 border-t border-dashed border-border/80 text-[10px] text-green-700 font-medium flex items-center justify-between"
            >
              <span>Received</span>
              <span className="font-bold">+{data.transferAmount} {unit}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Stepper & Confirm Action Bar */}
      <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border/80 flex items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted font-medium">Transfer quantity:</span>
          <div className="inline-flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-lg border border-border">
            <span className="font-jakarta font-bold text-ink text-xs tabular-nums">
              {transferQty} {unit}
            </span>
          </div>
        </div>

        <button
          type="button"
          id="demo-transfer-button"
          onClick={onManualTransfer}
          className={`px-3 py-1.5 rounded-lg text-xs font-jakarta font-semibold flex items-center gap-1.5 transition-all ${
            isTransferred
              ? 'bg-green-600 text-white'
              : 'bg-blue text-white hover:bg-blue-hover shadow-sm'
          }`}
        >
          {isTransferred ? (
            <>
              <CheckCircle2 size={13} />
              <span>Transferred</span>
            </>
          ) : (
            <>
              <span>Confirm Transfer</span>
              <ArrowRight size={13} />
            </>
          )}
        </button>
      </div>

      {/* Audit Ledger Row */}
      <div className="flex-1 rounded-xl bg-surface border border-border/80 p-2 sm:p-2.5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-border/60">
            <span className="text-[10px] font-jakarta font-bold uppercase tracking-wider text-muted">
              Live Stock Ledger
            </span>
            <span className="text-[9px] text-muted">Auto-audited</span>
          </div>

          <AnimatePresence>
            {phase === 'recorded' || isTransferred ? (
              <motion.div
                initial={{ opacity: 0, y: -8, backgroundColor: 'rgba(37,99,235,0.08)' }}
                animate={{ opacity: 1, y: 0, backgroundColor: 'rgba(255,255,255,1)' }}
                transition={{ duration: 0.35 }}
                className="p-2 rounded-lg border border-blue/30 flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue/10 text-blue font-bold text-[9px]">
                    {data.ledgerRecord.ref}
                  </span>
                  <div>
                    <span className="font-semibold text-ink">{data.ledgerRecord.desc}</span>
                    <span className="text-[9px] text-muted ml-2">by {data.ledgerRecord.role}</span>
                  </div>
                </div>
                <span className="text-[10px] text-muted font-medium">
                  {data.ledgerRecord.time}
                </span>
              </motion.div>
            ) : (
              <div className="text-[11px] text-muted italic text-center py-2">
                Click Confirm Transfer or wait for auto-pilot to record entry...
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
