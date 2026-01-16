const PropertyCard = ({ project }) => {
  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Placeholder */}
      <div className="relative h-64 bg-linear-to-br from-ivory-200 via-ivory-100 to-gold-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-2 border-gold-500/30 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold-500 text-black-900 px-4 py-1.5 rounded-full text-sm font-semibold">
            {project.status}
          </span>
        </div>
        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-black-900/80 text-ivory-200 px-4 py-1.5 rounded-full text-sm">
            {project.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 text-gold-600 text-sm mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {project.location}
        </div>
        <h3 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-gold-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>
        <button className="flex items-center gap-2 text-gold-600 font-semibold group/btn">
          View Project
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard
