import { Suspense } from 'react';
import ExplorerHeader from '../../components/explorer/ExplorerHeader';
import MissionGrid from '../../components/explorer/MissionGrid';
import ExplorerSkeleton from '../../components/explorer/ExplorerSkeleton';

export default function ExplorerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Explorer Title & HUD Header */}
      <ExplorerHeader />

      {/* Filterable Mission Grid with Loading Skeleton Fallback */}
      <Suspense fallback={<ExplorerSkeleton />}>
        <MissionGrid />
      </Suspense>
    </div>
  );
}
