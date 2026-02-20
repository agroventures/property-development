import React, { useState } from "react";
import { Map, MapPin, Grid3X3, View } from "lucide-react";

const PropertyTabs = ({ property }) => {
    const [activeTab, setActiveTab] = useState("location");

    const tabs = [
        { id: "location", label: "Location", icon: <MapPin size={18} /> },
        { id: "roadmap", label: "Road Map", icon: <Map size={18} /> },
        { id: "blocking", label: "Blocking Plan", icon: <Grid3X3 size={18} /> },
        { id: "view360", label: "360° View", icon: <View size={18} /> },
    ];

    return (
        <section className="mt-16 bg-ivory-50 rounded-3xl shadow-gold border border-border-muted/60 overflow-hidden">

            {/* ───────── TAB NAVIGATION ───────── */}
            <div className="flex flex-wrap border-b border-border-muted bg-ivory-100">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2
                ${isActive
                                    ? "border-gold-500 text-gold-600 bg-ivory-50"
                                    : "border-transparent text-text-secondary hover:text-black-800 hover:bg-ivory-200"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* ───────── TAB CONTENT ───────── */}
            <div className="p-4 md:p-8 min-h-112.5">
                {/* LOCATION */}
                {activeTab === "location" && (
                    <div className="animate-fade-in h-112.5 w-full rounded-2xl overflow-hidden shadow-gold">
                        {property?.map ? (
                            <iframe 
                                src={property.map} 
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="360° View"
                            />
                        ) : (
                            <p className="text-ivory-300">Map is not available</p>
                        )}
                    </div>
                )}

                {/* ROAD MAP */}
                {activeTab === "roadmap" && (
                    <div className="animate-fade-in flex flex-col items-center">
                        <img
                            src="https://www.araliyalands.com/storage/lands/la-roma-homagama/road_map.jpg"
                            alt="Road Map"
                            className="max-h-125 w-auto rounded-2xl shadow-gold"
                        />
                        <p className="mt-5 text-text-secondary text-sm">
                            Main access routes to La' Roma Homagama
                        </p>
                    </div>
                )}

                {/* BLOCKING PLAN */}
                {activeTab === "blocking" && (
                    <div className="animate-fade-in flex flex-col items-center">
                        <img
                            src={property.blockingOutPlan}
                            alt={property.title}
                            className="max-h-150 w-auto rounded-2xl shadow-gold"
                        />
                        <p className="mt-5 text-text-secondary text-sm">
                            Available lots and plot dimensions
                        </p>
                    </div>
                )}

                {/* 360 VIEW */}
                {activeTab === "view360" && (
                    <div className="animate-fade-in h-112.5 flex items-center justify-center bg-gradient-dark rounded-2xl relative overflow-hidden shadow-gold-lg">
                        {property?.view360 ? (
                            <iframe 
                                src={property.view360} 
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="360° View"
                            />
                        ) : (
                            <p className="text-ivory-300">360° view not available</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PropertyTabs;