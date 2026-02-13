import Image from "next/image";
import { apps } from "@/config/apps.config";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      {/* Header */}
      <header className="w-full max-w-6xl mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Home Apps
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light">
          Your personal media dashboard
        </p>
      </header>

      {/* App Grid */}
      <main className="mt-6 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 ease-out"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white/5 p-2 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* App Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400">
                  {app.name}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base font-light">
                  {app.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>Open App</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Built with Next.js • Click any app to launch</p>
      </footer>
    </div>
  );
}
