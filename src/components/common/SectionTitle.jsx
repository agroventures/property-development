import React from 'react'

function SectionTitle({ title }) {
    return (
        <div className="flex justify-center w-full mb-6">
            <span className="
                inline-flex items-center justify-center 
                border-2 border-gold-500 rounded-full 
                px-4 py-2 
                text-gold-500 font-semibold tracking-widest uppercase text-sm"
            >
                {title}
            </span>
        </div>
    )
}

export default SectionTitle