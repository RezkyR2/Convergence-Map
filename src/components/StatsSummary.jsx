// src/components/StatsSummary.jsx
import React, { useMemo } from 'react';

const StatBox = ({ value, label, colorClass }) => (
    <div className="bg-gray-800 p-4 rounded-lg text-center">
        <div className={`text-3xl font-bold ${colorClass}`}>{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
    </div>
);

const StatsSummary = ({ frameworks }) => {
    const stats = useMemo(() => {
        if (!frameworks || frameworks.length === 0) {
            return { total: 0, critical: 0, highConfidence: 0, avgSeverity: 0 };
        }
        const total = frameworks.length;
        const critical = frameworks.filter(f => f.severity >= 90).length;
        const highConfidence = frameworks.filter(f => f.confidence >= 85).length;
        const avgSeverity = Math.round(frameworks.reduce((sum, f) => sum + f.severity, 0) / total);
        return { total, critical, highConfidence, avgSeverity };
    }, [frameworks]);

    return (
        <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox value={stats.total} label="Total Frameworks" colorClass="text-blue-400" />
            <StatBox value={stats.critical} label="Severity 90+" colorClass="text-red-400" />
            <StatBox value={stats.highConfidence} label="Confidence 85+" colorClass="text-green-400" />
            <StatBox value={`${stats.avgSeverity}%`} label="Avg. Severity" colorClass="text-orange-400" />
        </section>
    );
};

export default StatsSummary;
