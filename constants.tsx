import React from 'react';
import { 
  Crown, Heart, Shield, 
  Smile, BookOpen, Map, 
  Users, Flame, Wand2, 
  Lightbulb 
} from 'lucide-react';
import { Archetype } from './types';

export const ARCHETYPES: Archetype[] = [
  // --- LIBERDADE (Espiritualidade) ---
  {
    id: 'innocent',
    group: 'Liberdade e Espiritualidade',
    groupColor: 'bg-yellow-100 text-yellow-800',
    name: 'O Inocente',
    icon: <Smile className="w-8 h-8" />,
    motto: "A vida é simples e bela",
    focus: "Otimismo, pureza, nostalgia",
    colors: ["#FFFFFF (Branco)", "#AEEEEE (Pastel)", "#FFD700 (Amarelo Suave)"],
    voice: "Simples, honesta, otimista, sem jargões complexos.",
    contentIdeas: [
      "Bastidores felizes da equipe",
      "Fotos com iluminação natural e 'clean'",
      "Mensagens de positividade e esperança",
      "Depoimentos reais e transparentes"
    ],
    brand: "Coca-Cola, Dove"
  },
  {
    id: 'sage',
    group: 'Liberdade e Espiritualidade',
    groupColor: 'bg-yellow-100 text-yellow-800',
    name: 'O Sábio',
    icon: <BookOpen className="w-8 h-8" />,
    motto: "A verdade liberta",
    focus: "Conhecimento, análise, verdade",
    colors: ["#808080 (Cinza)", "#000080 (Azul Marinho)", "#FFFFFF (Branco)"],
    voice: "Culto, analítico, confiável, professor.",
    contentIdeas: [
      "Infográficos com dados e estatísticas",
      "Artigos de 'Como funciona'",
      "Análises de tendências de mercado",
      "Curadoria de notícias confiáveis"
    ],
    brand: "Google, CNN, Audi"
  },
  {
    id: 'explorer',
    group: 'Liberdade e Espiritualidade',
    groupColor: 'bg-yellow-100 text-yellow-800',
    name: 'O Explorador',
    icon: <Map className="w-8 h-8" />,
    motto: "Sem cercas à minha volta",
    focus: "Liberdade, aventura, autodescoberta",
    colors: ["#556B2F (Verde Oliva)", "#8B4513 (Marrom Terra)", "#87CEEB (Azul Céu)"],
    voice: "Aventureiro, corajoso, aberto a novas experiências.",
    contentIdeas: [
      "Fotos de paisagens e natureza",
      "Histórias de viagens ou desafios superados",
      "Perguntas que instigam a curiosidade",
      "Produtos sendo usados ao ar livre"
    ],
    brand: "Jeep, North Face"
  },

  // --- ORDEM (Estrutura) ---
  {
    id: 'ruler',
    group: 'Ordem e Estrutura',
    groupColor: 'bg-blue-100 text-blue-800',
    name: 'O Governante',
    icon: <Crown className="w-8 h-8" />,
    motto: "O poder é tudo",
    focus: "Liderança, status, controle",
    colors: ["#000000 (Preto)", "#D4AF37 (Dourado)", "#000080 (Azul Real)"],
    voice: "Autoritário, refinado, articulado, líder.",
    contentIdeas: [
      "Imagens de alta qualidade e luxo",
      "Casos de sucesso e liderança de mercado",
      "Discurso sobre excelência e exclusividade",
      "Design minimalista e sofisticado"
    ],
    brand: "Rolex, Mercedes-Benz"
  },
  {
    id: 'caregiver',
    group: 'Ordem e Estrutura',
    groupColor: 'bg-blue-100 text-blue-800',
    name: 'O Cuidador',
    icon: <Heart className="w-8 h-8" />,
    motto: "Ame o próximo",
    focus: "Serviço, proteção, altruísmo",
    colors: ["#40E0D0 (Turquesa)", "#90EE90 (Verde Claro)", "#FFFFFF (Branco)"],
    voice: "Carinhoso, acolhedor, gentil, maternal.",
    contentIdeas: [
      "Dicas de bem-estar e segurança",
      "Ações de responsabilidade social",
      "Foco no 'nós cuidamos de você'",
      "Histórias emocionantes de ajuda"
    ],
    brand: "Volvo, Johnson & Johnson"
  },
  {
    id: 'creator',
    group: 'Ordem e Estrutura',
    groupColor: 'bg-blue-100 text-blue-800',
    name: 'O Criador',
    icon: <Lightbulb className="w-8 h-8" />,
    motto: "Se imagine, faça",
    focus: "Inovação, arte, criatividade",
    colors: ["#FF00FF (Magenta)", "#00CED1 (Ciano)", "#FFFF00 (Amarelo Vivo)"],
    voice: "Expressivo, poético, original, visionário.",
    contentIdeas: [
      "Processos criativos (bastidores da criação)",
      "Design visualmente impactante",
      "Celebração da autoexpressão",
      "Produtos como ferramentas de arte"
    ],
    brand: "Lego, Apple, Adobe"
  },

  // --- SOCIAL (Conexão) ---
  {
    id: 'jester',
    group: 'Conexão Social',
    groupColor: 'bg-pink-100 text-pink-800',
    name: 'O Bobo da Corte',
    icon: <Smile className="w-8 h-8" />, 
    motto: "Só se vive uma vez",
    focus: "Diversão, humor, viver o agora",
    colors: ["#FF4500 (Laranja)", "#FFFF00 (Amarelo)", "#FF0000 (Vermelho)"],
    voice: "Engraçado, irônico, brincalhão, informal.",
    contentIdeas: [
      "Memes e vídeos virais",
      "Cores vibrantes e contrastantes",
      "Sátiras do cotidiano",
      "Interações leves e sem formalidade"
    ],
    brand: "M&M's, Netflix (redes), Skol"
  },
  {
    id: 'lover',
    group: 'Conexão Social',
    groupColor: 'bg-pink-100 text-pink-800',
    name: 'O Amante',
    icon: <Heart className="w-8 h-8" />,
    motto: "Tenho olhos só pra você",
    focus: "Intimidade, prazer, estética",
    colors: ["#8B0000 (Vinho)", "#FF1493 (Rosa Profundo)", "#D4AF37 (Dourado)"],
    voice: "Sedutor, apaixonado, adjetivos sensoriais.",
    contentIdeas: [
      "Fotos com apelo sensorial (textura, sabor)",
      "Foco na experiência de luxo/prazer",
      "Linguagem que valoriza a beleza",
      "Depoimentos sobre 'amor' à marca"
    ],
    brand: "Magnum, Chanel, Dior"
  },
  {
    id: 'everyman',
    group: 'Conexão Social',
    groupColor: 'bg-pink-100 text-pink-800',
    name: 'O Cara Comum',
    icon: <Users className="w-8 h-8" />,
    motto: "Somos todos iguais",
    focus: "Pertencimento, realismo, humildade",
    colors: ["#0000CD (Azul Médio)", "#8B4513 (Marrom)", "#BEBEBE (Cinza)"],
    voice: "Amigável, pé no chão, 'gente como a gente'.",
    contentIdeas: [
      "Situações reais do dia a dia",
      "Preços acessíveis e custo-benefício",
      "Linguagem sem frescura",
      "Foco na utilidade prática"
    ],
    brand: "Havaianas, IKEA"
  },

  // --- EGO (Risco/Maestria) ---
  {
    id: 'hero',
    group: 'Risco e Maestria',
    groupColor: 'bg-red-100 text-red-800',
    name: 'O Herói',
    icon: <Shield className="w-8 h-8" />,
    motto: "Onde há vontade...",
    focus: "Coragem, competência, ação",
    colors: ["#FF0000 (Vermelho)", "#000000 (Preto)", "#FFA500 (Laranja)"],
    voice: "Motivador, direto, desafiador, energético.",
    contentIdeas: [
      "Desafios e superação de limites",
      "Frases motivacionais de impacto",
      "Imagens de alta energia/esporte",
      "Foco no resultado final"
    ],
    brand: "Nike, Gatorade"
  },
  {
    id: 'outlaw',
    group: 'Risco e Maestria',
    groupColor: 'bg-red-100 text-red-800',
    name: 'O Rebelde',
    icon: <Flame className="w-8 h-8" />,
    motto: "Regras existem pra quebrar",
    focus: "Revolução, liberdade, choque",
    colors: ["#000000 (Preto)", "#FF0000 (Vermelho Sangue)", "#32CD32 (Neon)"],
    voice: "Provocador, rebelde, gírias de tribo, direto.",
    contentIdeas: [
      "Opiniões polêmicas ou impopulares",
      "Estética 'grunge' ou disruptiva",
      "Manifestos contra o status quo",
      "Humor ácido"
    ],
    brand: "Harley-Davidson, Uber (início)"
  },
  {
    id: 'magician',
    group: 'Risco e Maestria',
    groupColor: 'bg-red-100 text-red-800',
    name: 'O Mago',
    icon: <Wand2 className="w-8 h-8" />,
    motto: "Tudo é possível",
    focus: "Transformação, visão, mistério",
    colors: ["#800080 (Roxo)", "#4B0082 (Índigo)", "#C0C0C0 (Prata)"],
    voice: "Inspirador, visionário, carismático, misterioso.",
    contentIdeas: [
      "Histórias de transformação (Antes/Depois)",
      "Momentos 'uau' e surpresas",
      "Foco na visão de futuro",
      "Tecnologia que parece mágica"
    ],
    brand: "Disney, Red Bull, Apple"
  }
];