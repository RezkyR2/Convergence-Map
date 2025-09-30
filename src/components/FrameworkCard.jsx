// src/components/FrameworkCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRightCircle } from 'lucide-react'; // Tambahkan ArrowRightCircle
import { getSeverityColor } from './convergenceData';
import clsx from 'clsx';

const StatBar = ({ label, value, colorClass }) => (
    // ... (kode StatBar tidak berubah)
);

const FrameworkCard = ({ framework, isPinned, onPin, onShowDetail }) => { // Tambahkan prop onShowDetail
    const severity = getSeverityColor(framework.severity);
    
    return (
        <motion.div
            layout
            // ... (properti motion lainnya tidak berubah)
            className={clsx(
                "bg-gray-800 rounded-lg p-5 border-2 transition-all duration-300 relative cursor-pointer",
                isPinned ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-700 hover:border-red-500'
            )}
            onClick={(e) => {
                e.stopPropagation();
                // Logika baru: panggil fungsi yang sesuai
                if (framework.hasDetailView) {
                    onShowDetail();
                } else {
                    onPin();
                }
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white pr-4">{framework.name}</h3>
                <span className={`text-2xl font-black ${severity.text}`}>{framework.peak}</span>
            </div>
            
            {/* ... (bagian Cycle & Range, Description, Stats tidak berubah) ... */}
            
            {/* Source dan Indikator Detail */}
            <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center">
                <p className="text-xs text-gray-500 truncate">Source: {framework.source}</p>
                {framework.hasDetailView && (
                    <div className="flex items-center gap-1 text-blue-400">
                        <span className="text-xs font-semibold">Detail</span>
                        <ArrowRightCircle className="w-4 h-4" />
                    </div>
                )}
            </div>

            {/* Pinned Indicator */}
            {isPinned && !framework.hasDetailView && <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full" />}
        </motion.div>
    );
};

export default FrameworkCard;
