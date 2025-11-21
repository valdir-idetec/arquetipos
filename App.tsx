import React, { useState } from 'react';
import { Palette, MessageCircle, Search, Lightbulb } from 'lucide-react';
import { ARCHETYPES } from './constants';
import { Archetype } from './types';

const App = () => {
  const [selectedId, setSelectedId] = useState<string>('innocent');

  // Default to the first one if not found (safety check)
  const activeArchetype: Archetype = ARCHETYPES.find(a => a.id === selectedId) || ARCHETYPES[0];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 pt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Bússola de Arquétipos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Selecione um arquétipo abaixo para visualizar sua aplicação prática: 
            cores, tom de voz e ideias de conteúdo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Selection Grid */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Escolha o Perfil
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {ARCHETYPES.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedId(arch.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 border cursor-pointer
                      ${selectedId === arch.id 
                        ? 'bg-indigo-50 border-indigo-500 shadow-md scale-105 ring-1 ring-indigo-500' 
                        : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:scale-105 hover:shadow-sm'
                      }`}
                    title={arch.name}
                  >
                    <div className={`transition-colors duration-300 ${selectedId === arch.id ? 'text-indigo-600' : 'text-gray-500'}`}>
                      {/* Clone icon to adjust size nicely */}
                      <div className="scale-75 sm:scale-90">{arch.icon}</div>
                    </div>
                    <span className={`text-[10px] sm:text-xs font-medium mt-2 text-center leading-tight ${selectedId === arch.id ? 'text-indigo-900' : 'text-gray-500'}`}>
                      {arch.name}
                    </span>
                  </button>
                ))}
              </div>
              {/* Mobile Hint */}
              <p className="text-center text-xs text-gray-400 mt-4 lg:hidden">
                Toque nos ícones acima para ver os detalhes
              </p>
            </div>
          </div>

          {/* Right Column: Detail View */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[600px] flex flex-col transition-all duration-500 ease-in-out">
              
              {/* Card Header */}
              <div className={`p-8 ${activeArchetype.groupColor.replace('bg-', 'bg-opacity-20 bg-')} relative overflow-hidden`}>
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 shadow-sm bg-white/60 backdrop-blur-sm ${activeArchetype.groupColor.split(' ')[1] || 'text-gray-800'}`}>
                      {activeArchetype.group}
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 font-serif tracking-tight">
                      {activeArchetype.name}
                    </h2>
                    <p className="text-xl font-serif italic opacity-80">"{activeArchetype.motto}"</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg text-gray-800 hidden sm:block transform transition-transform duration-500 hover:rotate-12">
                     {React.cloneElement(activeArchetype.icon as React.ReactElement, { className: "w-12 h-12" })}
                  </div>
                </div>
                
                {/* Decorative Background Circle */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-current opacity-10 rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 space-y-8 flex-grow">
                
                {/* Section 1: Visual Identity */}
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold text-lg border-b border-gray-100 pb-2">
                    <Palette className="w-5 h-5 text-indigo-500" />
                    <h3>Identidade Visual</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activeArchetype.colors.map((color, idx) => {
                      const hex = color.split(' ')[0];
                      return (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200" 
                            style={{ backgroundColor: hex }}
                          ></div>
                          <span className="text-sm font-medium text-gray-700">{color.split('(')[1].replace(')', '')}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Section 2: Tone of Voice */}
                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <div className="flex items-center gap-2 mb-3 text-indigo-900 font-bold">
                      <MessageCircle className="w-5 h-5" />
                      <h3>Tom de Voz</h3>
                    </div>
                    <p className="text-indigo-900/80 leading-relaxed font-medium">
                      {activeArchetype.voice}
                    </p>
                  </div>

                  {/* Section 3: Focus */}
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-3 text-gray-900 font-bold">
                      <Search className="w-5 h-5 text-gray-500" />
                      <h3>Foco Principal</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {activeArchetype.focus}
                    </p>
                  </div>
                </div>

                {/* Section 4: Content Strategy */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold text-lg border-b border-gray-100 pb-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <h3>O que postar (Ideias Práticas)</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeArchetype.contentIdeas.map((idea, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 bg-white p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors">
                        <span className="text-green-500 mt-0.5 font-bold">✓</span>
                        <span className="text-sm leading-snug">{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer: Brand Examples */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                   <p className="text-sm text-gray-400 text-center bg-gray-50 rounded-full py-2 px-4 inline-block w-full">
                     Marcas famosas que usam: <span className="font-bold text-gray-700 ml-1">{activeArchetype.brand}</span>
                   </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;