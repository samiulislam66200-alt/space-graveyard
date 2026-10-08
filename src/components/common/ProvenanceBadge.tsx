import { FactType } from '../../types/mission';
import { ShieldCheck, Database, BookOpen, AlertCircle } from 'lucide-react';

interface ProvenanceBadgeProps {
  type: FactType;
  showTooltip?: boolean;
}

export default function ProvenanceBadge({ type, showTooltip = true }: ProvenanceBadgeProps) {
  const configs: Record<FactType, { label: string; bg: string; text: string; border: string; icon: any; desc: string }> = {
    FACT: {
      label: 'FACT',
      bg: 'bg-emerald-950/80',
      text: 'text-emerald-300',
      border: 'border-emerald-700/60',
      icon: ShieldCheck,
      desc: 'Officially supported by NASA / authoritative source'
    },
    DATA: {
      label: 'DATA',
      bg: 'bg-cyan-950/80',
      text: 'text-cyan-300',
      border: 'border-cyan-700/60',
      icon: Database,
      desc: 'Measured or recorded numerical mission telemetry'
    },
    INTERPRETATION: {
      label: 'INTERPRETATION',
      bg: 'bg-amber-950/80',
      text: 'text-amber-300',
      border: 'border-amber-700/60',
      icon: BookOpen,
      desc: 'Scientific synthesis or explanation based on available evidence'
    },
    SPECULATION: {
      label: 'SPECULATION',
      bg: 'bg-purple-950/80',
      text: 'text-purple-300',
      border: 'border-purple-700/60',
      icon: AlertCircle,
      desc: 'Clearly identified inference or uninspected hardware state'
    }
  };

  const cfg = configs[type] || configs.FACT;
  const Icon = cfg.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[10px] font-bold border tracking-wider uppercase ${cfg.bg} ${cfg.text} ${cfg.border} shadow-sm group relative cursor-help`}
      title={showTooltip ? `${cfg.label}: ${cfg.desc}` : undefined}
    >
      <Icon className="w-3 h-3 shrink-0" />
      <span>{cfg.label}</span>
    </span>
  );
}
