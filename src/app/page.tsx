import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white font-sans relative overflow-hidden">

      {/* Subtle Radial Gradient na parte superior esquerda */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2e1065] rounded-full blur-[150px] opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-40">

        {/* 1. Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
              Higor Germano
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Desenvolvedor Full Stack especializado no ecossistema <span className="text-white font-semibold">.NET</span> e experiências modernas com <span className="text-white font-semibold">React</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/curriculo.pdf"
                download="Curriculo_Higor_Germano.pdf"
                className="px-8 py-3 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                Download CV
              </a>
              <a
                href="#github"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            {/* Pulsing purple glow */}
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-[60px] opacity-30 animate-pulse" />
            {/* Glassmorphism container */}
            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <img 
                src="/perfil.jpg" 
                alt="Higor Germano" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Sobre Mim e Hard Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-bold">Sobre Mim</h2>
            <div className="text-gray-400 leading-relaxed text-lg space-y-4">
              <p>
                Sou aluno do 7º termo de Sistemas de Informação na FIPP/Unoeste, com uma base extremamente forte em <strong>Algoritmos</strong>, <strong>Programação Orientada a Objetos (POO)</strong> e <strong>Estrutura de Dados</strong>.
              </p>
              <p>
                Minha paixão por software engloba todo o espectro do desenvolvimento: desde a criação de simuladores de baixo nível escritos em C puro, manipulando diretamente a memória, até o desenho de arquiteturas para sistemas ERP web modernos e complexos no ecossistema corporativo.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-bold">Hard Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* .NET 9 */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-600 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200">.NET </span>
              </div>
              {/* C# */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200">C#</span>
              </div>
              {/* React */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200">React</span>
              </div>
              {/* SQL Server */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200">SQL Server</span>
              </div>
              {/* Docker */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200">Docker</span>
              </div>
              {/* Java Spring Boot */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200 text-center text-sm">Java Spring</span>
              </div>
              {/* Python */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200 text-center text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200 text-center text-sm">Html</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200 text-center text-sm">Java Script</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                <span className="font-bold text-gray-200 text-center text-sm">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Grid de Projetos */}
        <section className="space-y-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-bold text-center">Projetos de Destaque</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projeto 1: SGEP (Destaque principal, pode ocupar mais espaço se quiser, mas grid-cols-3 fica bom) */}
            <div className="lg:col-span-2 group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">SGEP</h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full uppercase tracking-wider">Em Destaque</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  <strong>Sistema de Gestão de Encomendas e Produção</strong> desenvolvido sob medida para a Panificadora Sabor de Mel. Utilizando C#, .NET e SQL Server para resolver gargalos reais de logística, acompanhamento de pedidos e controle de estoque do negócio.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                Ver no GitHub
              </a>
            </div>

            {/* Projeto 2: SGEI */}
            <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">SGEI</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Sistema de Gestão de Estética Integrado. Desenvolvido com <strong>Blazor</strong> e <strong>.NET 9</strong>, implementando camadas de segurança avançada e autenticação via Claims.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                Ver no GitHub &rarr;
              </a>
            </div>

            {/* Projeto 3: Simulador dBase */}
            <div className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between lg:col-span-1 md:col-span-2">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Simulador dBase</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Um robusto projeto focado em arquitetura de baixo nível, escrito puramente em <strong>C</strong>. Implementa alocação e gerenciamento dinâmico de memória em tempo real.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                Ver no GitHub &rarr;
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 4. Rodapé de Contato (Social Icons) */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

          <p className="text-gray-500 font-medium">
            Desenvolvido com foco em performance e design.
          </p>

          <div className="flex gap-6 items-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5518998207464"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/hiigorgermano"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            {/* Gmail */}
            <a
              href="mailto:higorgermano43@gmail.com"
              className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300"
              aria-label="Gmail"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}