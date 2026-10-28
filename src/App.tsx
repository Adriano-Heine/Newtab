/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  ArrowRight,
  Smartphone,
  QrCode,
  Share2,
  UserPlus,
  SunMoon,
  Layers,
  Clock,
  MessageCircle,
  Instagram,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  ExternalLink,
  Award,
  FileCheck,
  Globe
} from 'lucide-react';

export default function App() {
  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // State for interactive mobile mockup (Day/Night preview)
  const [mockupDarkMode, setMockupDarkMode] = useState<boolean>(true);

  // WhatsApp number & formatted URL helper
  const WHATSAPP_PHONE = '5571991261474';
  const getWhatsAppLink = (text: string) =>
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

  const faqData = [
    {
      question: 'Por que não fazer minha logo com IA?',
      answer:
        'IA gera um desenho; eu entrego um sistema de marca pensado para o seu mercado, com arquivos corretos para impressão e digital, aplicação em todos os pontos de contato e alguém responsável pelo resultado.',
    },
    {
      question: 'O que são as versões da logo?',
      answer:
        'São variações pensadas para que a sua marca nunca perca legibilidade. Você recebe a versão Principal (horizontal completa para cabeçalhos e fachadas), a versão Reduzida/Vertical (para cartões e assinaturas) e o Ícone/Submark (desenho circular compacto perfeito para foto de perfil do WhatsApp, avatar do Instagram e carimbos).',
    },
    {
      question: 'O domínio é meu?',
      answer:
        'Sim, registrado no seu nome e vinculado ao seu CPF ou CNPJ. No pacote Autoridade, cuidamos de todo o processo de registro do domínio .com.br no 1º ano, e a titularidade legal é integralmente sua.',
    },
    {
      question: 'Posso começar pelo pacote Marca e evoluir depois?',
      answer:
        'Sim, o valor pago é abatido ao fazer upgrade. Se você iniciar com o pacote Marca e decidir expandir para a Identidade ou Autoridade posteriormente, você paga apenas a diferença do valor.',
    },
    {
      question: 'Como e quando recebo os arquivos finais?',
      answer:
        'Você recebe uma pasta organizada no Google Drive contendo arquivos em vetor (PDF editável e EPS/SVG para gráficas, bordados e placas de rua sem pixelar) e imagens de altíssima resolução (PNG com fundo transparente e JPG em versões para fundos claro e escuro).',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-gray-100 selection:bg-[#C9A45C]/30 selection:text-[#C9A45C] font-sans pb-16">
      
      {/* =========================================================
          TOP NAVIGATION BAR (Strict 3-zone contract)
         ========================================================= */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0B0C]/90 border-b border-[#222227] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Zone 1: Clean brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-serif tracking-wider text-lg sm:text-xl font-bold whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-full border border-[#C9A45C]/60 flex items-center justify-center text-[#C9A45C] text-xs font-serif font-bold group-hover:border-[#C9A45C] transition-colors">
              JH
            </span>
            <span className="group-hover:text-[#C9A45C] transition-colors">
              JORGE HEINE
            </span>
          </a>

          {/* Zone 2: Navigation Links (hidden on very small screens, visible on md+) */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#pacotes" className="hover:text-[#C9A45C] transition-colors whitespace-nowrap">
              Pacotes
            </a>
            <a href="#cartao-digital" className="hover:text-[#C9A45C] transition-colors whitespace-nowrap">
              Cartão Digital
            </a>
            <a href="#como-funciona" className="hover:text-[#C9A45C] transition-colors whitespace-nowrap">
              Como Funciona
            </a>
            <a href="#faq" className="hover:text-[#C9A45C] transition-colors whitespace-nowrap">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Direct WhatsApp Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink('Olá Jorge! Gostaria de conversar sobre identidade visual.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#0B0B0C] bg-[#C9A45C] hover:bg-[#DFC282] rounded-lg transition-all shadow-sm hover:shadow-[#C9A45C]/20 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* =========================================================
          HERO SECTION (Mobile-first, conversion & bio-link focused)
         ========================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C9A45C]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Designer badge and specialty */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161A] border border-[#27272F] text-xs text-[#C9A45C] mb-6 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Jorge Heine · Identidade Visual para Corretores & Imobiliárias</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 text-balance">
            Sua marca merece ser <span className="gold-gradient-text">vista de longe.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Identidade visual completa para corretores e profissionais liberais.
            Logo, papelaria e cartão digital interativo.
          </p>

          {/* Target Audience Micro-pill notice (clean metadata) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 mb-10">
            <span>Corretores de Imóveis</span>
            <span aria-hidden="true" className="text-[#C9A45C]">·</span>
            <span>Imobiliárias</span>
            <span aria-hidden="true" className="text-[#C9A45C]">·</span>
            <span>Profissionais Liberais</span>
            <span aria-hidden="true" className="text-[#C9A45C]">·</span>
            <span>Escritórios & Consultorias</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#pacotes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-[#0B0B0C] bg-[#C9A45C] hover:bg-[#DFC282] rounded-xl transition-all shadow-lg shadow-[#C9A45C]/15 hover:shadow-[#C9A45C]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Escolher meu pacote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/jorgeheine_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-gray-300 hover:text-white bg-[#141417] hover:bg-[#1C1C22] border border-[#26262D] rounded-xl transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C9A45C]" />
              <span>Ver no Instagram</span>
            </a>
          </div>

          {/* Reassurance points */}
          <div className="mt-12 pt-8 border-t border-[#1F1F24] grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131317] border border-[#22222A] text-left">
              <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">50% no início</p>
                <p className="text-gray-400">e 50% após aprovação</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131317] border border-[#22222A] text-left">
              <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                <FileCheck className="w-4.5 h-4.5" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">Arquivos em Vetor</p>
                <p className="text-gray-400">Pronto para gráfica e web</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131317] border border-[#22222A] text-left">
              <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">Prazos Ágeis</p>
                <p className="text-gray-400">Direto no WhatsApp</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PACOTES (Tabela de Preços - 3 cards, mobile stacked)
         ========================================================= */}
      <section id="pacotes" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold mb-2">
              Investimento Transparente
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">
              Pacotes de Identidade Visual
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Escolha a solução ideal para você. 50% para iniciar e 50% quando estiverem prontos e aprovadas para envio.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* ---------------- CARD 1: MARCA ---------------- */}
            <div className="rounded-2xl bg-[#121215] border border-[#222228] p-6 sm:p-7 flex flex-col justify-between hover:border-[#383842] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Pacote 01
                  </span>
                  <span className="text-xs text-gray-400">Entrada + Saldo</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  MARCA
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Ideal para quem precisa de um logotipo profissional técnico, versátil e pronto para uso digital e impresso.
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-[#222228]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm text-gray-400 font-light">R$</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums font-serif">
                      349,90
                    </span>
                  </div>
                  <p className="text-xs text-[#C9A45C] mt-1.5 font-medium">
                    50% no início + 50% na entrega
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    (2 parcelas de R$ 174,95)
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="space-y-3.5 mb-8 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Logo + versões</strong> (principal, simplificada e ícone para redes sociais)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Arquivos finais</strong> (vetor em PDF/SVG e PNG com transparência, versões para fundos claro e escuro)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Prazo:</strong> 3 a 5 dias úteis</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink('Olá Jorge! Quero o pacote Marca de identidade visual.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1A1A20] hover:bg-[#25252E] border border-[#2D2D38] hover:border-[#C9A45C]/50 transition-all text-center"
              >
                <span>Quero o pacote Marca</span>
                <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
              </a>
            </div>

            {/* ---------------- CARD 2: IDENTIDADE (DESTAQUE DOURADO) ---------------- */}
            <div className="relative rounded-2xl bg-[#141418] border-2 border-[#C9A45C] p-6 sm:p-7 flex flex-col justify-between gold-border-glow hover:shadow-[0_0_35px_rgba(201,164,92,0.25)] transition-all">
              
              {/* Highlight badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9A45C] text-[#0B0B0C] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mais escolhido</span>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                  <span className="text-xs font-semibold tracking-wider text-[#C9A45C] uppercase">
                    Pacote 02 · Completo
                  </span>
                  <span className="text-xs text-[#C9A45C]/80">Mais vendido</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  IDENTIDADE
                </h3>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  Para o corretor ou escritório que deseja padronizar todos os seus pontos de contato no digital e no impresso.
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-[#2B271F]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm text-gray-400 font-light">R$</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums font-serif">
                      790,90
                    </span>
                  </div>
                  <p className="text-xs text-[#C9A45C] mt-1.5 font-semibold">
                    50% no início + 50% na entrega
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    (2 parcelas de R$ 395,45)
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="space-y-3 mb-8 text-xs text-gray-200">
                  <div className="p-2 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 text-[#DFC282] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0" />
                    <span>Tudo incluído do pacote Marca</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Assinatura de e-mail</strong> personalizada para seu Gmail / Outlook</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Pack com 10 ícones</strong> para Destaques do Instagram</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Arte de papel timbrado</strong> para propostas, contratos e fichas</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Arte de placa ou faixa de imóvel</strong> personalizada e com QR Code para o celular</span>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <Clock className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Prazo:</strong> 7 a 10 dias úteis</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink('Olá Jorge! Quero o pacote Identidade de identidade visual.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-[#0B0B0C] bg-[#C9A45C] hover:bg-[#DFC282] transition-all shadow-md shadow-[#C9A45C]/20 text-center hover:scale-[1.01]"
              >
                <span>Quero o pacote Identidade</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* ---------------- CARD 3: AUTORIDADE ---------------- */}
            <div className="rounded-2xl bg-[#121215] border border-[#222228] p-6 sm:p-7 flex flex-col justify-between hover:border-[#383842] transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Pacote 03 · Premium
                  </span>
                  <span className="text-xs text-gray-400">Posicionamento Máximo</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  AUTORIDADE
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  A solução definitiva: identidade visual completa com tecnologia de Cartão Digital Imersivo e domínio próprio.
                </p>

                {/* Price block */}
                <div className="mb-6 pb-6 border-b border-[#222228]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm text-gray-400 font-light">R$</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums font-serif">
                      1.490,90
                    </span>
                  </div>
                  <p className="text-xs text-[#C9A45C] mt-1.5 font-medium">
                    50% no início + 50% na entrega
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    (2 parcelas de R$ 745,45)
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="space-y-3 mb-8 text-xs text-gray-300">
                  <div className="p-2 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 text-[#DFC282] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C9A45C] shrink-0" />
                    <span>Tudo incluído do pacote Identidade</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Cartão Digital Imersivo</strong> (seu link único para bio, WhatsApp e QR Code exclusivo)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Domínio próprio .com.br</strong> no 1º ano registrado diretamente no seu nome / CPF</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Mini manual de marca</strong> (paleta oficial com códigos CMYK/RGB/HEX e tipografia)</span>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <Clock className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Prazo:</strong> 10 a 15 dias úteis</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink('Olá Jorge! Quero o pacote Autoridade de identidade visual.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1A1A20] hover:bg-[#25252E] border border-[#2D2D38] hover:border-[#C9A45C]/50 transition-all text-center"
              >
                <span>Quero o pacote Autoridade</span>
                <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SEÇÃO DESTAQUE: CARTÃO DIGITAL IMERSIVO
          Com Mockup simples de celular em CSS
         ========================================================= */}
      <section id="cartao-digital" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0E0E12] border-y border-[#1C1C24] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy & Feature List */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181820] border border-[#292936] text-xs text-[#C9A45C] mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Inovação no Pacote Autoridade</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
                Seu cartão de visitas acaba de ficar interativo.
              </h2>
              
              <p className="text-lg sm:text-xl text-[#C9A45C] font-serif italic mb-6">
                “Não é só um link. É a sua vitrine.”
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                Esqueça cartões de papel jogados fora ou links genéricos da bio que não refletem seu prestígio. 
                O Cartão Digital Imersivo transforma seu contato em uma experiência interativa, sofisticada e feita sob medida.
              </p>

              {/* 6 Icons & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">Todos os links que quiser</h4>
                    <p className="text-[11px] text-gray-400">WhatsApp, Instagram, site, portfólio e imóveis.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">Instalável como app (PWA)</h4>
                    <p className="text-[11px] text-gray-400">O cliente adiciona à tela inicial com sua marca.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">QR Code exclusivo</h4>
                    <p className="text-[11px] text-gray-400">Grave em placas, pastas ou envie por mensagem.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">Salvar contato com 1 toque</h4>
                    <p className="text-[11px] text-gray-400">Adiciona seu telefone e e-mail direto na agenda.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <SunMoon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">Modo Dia e Noite</h4>
                    <p className="text-[11px] text-gray-400">Visual adaptativo e refinado para o cliente.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#22222B] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">Compartilhamento com foto</h4>
                    <p className="text-[11px] text-gray-400">Prévia impecável ao compartilhar no WhatsApp.</p>
                  </div>
                </div>

              </div>

              {/* Package CTA */}
              <div className="mt-8">
                <a
                  href={getWhatsAppLink('Olá Jorge! Quero conhecer mais sobre o Cartão Digital Imersivo do pacote Autoridade.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A45C] hover:text-[#DFC282] transition-colors group"
                >
                  <span>Pedir pacote com Cartão Digital incluso</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: CSS Smartphone Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Interactive toggle control for day/night mode demonstration */}
              <div className="flex items-center gap-2 mb-4 p-1 rounded-full bg-[#181820] border border-[#272736]">
                <button
                  type="button"
                  onClick={() => setMockupDarkMode(true)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    mockupDarkMode
                      ? 'bg-[#0B0B0C] text-[#C9A45C] border border-[#C9A45C]/40 shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Modo Noite
                </button>
                <button
                  type="button"
                  onClick={() => setMockupDarkMode(false)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    !mockupDarkMode
                      ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Modo Dia
                </button>
              </div>

              {/* Smartphone Frame in CSS */}
              <div className="relative w-[285px] sm:w-[310px] rounded-[42px] p-3 bg-gradient-to-b from-[#2C2C35] via-[#1B1B22] to-[#121217] border-2 border-[#383848] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(201,164,92,0.15)]">
                
                {/* Dynamic island / speaker pill */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-[#151520] border border-[#2A2A38]" />
                </div>

                {/* Inner Screen */}
                <div
                  className={`relative rounded-[32px] overflow-hidden pt-8 pb-6 px-4 transition-colors duration-300 ${
                    mockupDarkMode
                      ? 'bg-[#0F0F12] text-gray-100 border border-[#22222B]'
                      : 'bg-[#F8F9FA] text-gray-900 border border-gray-200'
                  }`}
                >
                  
                  {/* Top Bar inside mockup */}
                  <div className="flex justify-between items-center mb-4 text-[10px] text-gray-400 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* Profile Header in Card */}
                  <div className="text-center mb-5">
                    <div className="relative inline-block mb-2">
                      <div className="w-18 h-18 rounded-full border-2 border-[#C9A45C] p-0.5 mx-auto bg-gradient-to-tr from-[#C9A45C] to-transparent">
                        <div
                          className={`w-full h-full rounded-full flex items-center justify-center text-base font-serif font-bold ${
                            mockupDarkMode ? 'bg-[#1D1D24] text-[#C9A45C]' : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          RM
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#0F0F12]" title="Disponível" />
                    </div>

                    <h4 className="text-sm font-serif font-bold tracking-tight">
                      Ricardo Medeiros
                    </h4>
                    <p className="text-[10px] text-[#C9A45C] font-medium tracking-wide">
                      CRECI 12.345-F · Corretor de Alto Padrão
                    </p>
                    <p className="text-[9px] text-gray-400 mt-0.5">
                      Especialista em Imóveis de Luxo & Alpha
                    </p>
                  </div>

                  {/* Interactive Button Stacks inside Card */}
                  <div className="space-y-2 mb-4">
                    
                    <div
                      className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-medium cursor-pointer transition-transform hover:scale-[1.01] ${
                        mockupDarkMode
                          ? 'bg-[#181820] border border-[#2A2A38] text-white hover:border-[#C9A45C]/50'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                          <MessageCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px]">Chamar no WhatsApp</span>
                      </div>
                      <span className="text-[9px] text-[#25D366] font-semibold bg-[#25D366]/10 px-1.5 py-0.5 rounded">
                        Online
                      </span>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-medium cursor-pointer transition-transform hover:scale-[1.01] ${
                        mockupDarkMode
                          ? 'bg-[#181820] border border-[#2A2A38] text-white hover:border-[#C9A45C]/50'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center">
                          <UserPlus className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px]">Salvar nos Contatos</span>
                      </div>
                      <span className="text-[9px] text-gray-400">1 toque</span>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl flex items-center justify-between text-xs font-medium cursor-pointer transition-transform hover:scale-[1.01] ${
                        mockupDarkMode
                          ? 'bg-[#181820] border border-[#2A2A38] text-white hover:border-[#C9A45C]/50'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#E1306C]/15 text-[#E1306C] flex items-center justify-center">
                          <Instagram className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px]">Ver Imóveis & Portfólio</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>

                  </div>

                  {/* QR Code & Footer tag inside Mockup */}
                  <div className="pt-2 border-t border-gray-800/40 text-center">
                    <div className="inline-flex items-center gap-1.5 text-[9px] text-[#C9A45C] font-medium">
                      <QrCode className="w-3 h-3" />
                      <span>Toque para QR Code & Compartilhar</span>
                    </div>
                  </div>

                </div>

                {/* Home Indicator bar */}
                <div className="w-28 h-1 bg-gray-500 rounded-full mx-auto mt-2" />
              </div>

              <p className="text-[11px] text-gray-400 mt-4 text-center">
                Mockup ilustrativo do Cartão Digital Imersivo (responsivo e adaptativo)
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* =========================================================
          COMO FUNCIONA (4 Passos claros)
         ========================================================= */}
      <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0E0E12] border-y border-[#1C1C24] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold mb-2">
              Processo Transparente
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">
              Como funciona o trabalho
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Sem burocracia ou formulários infinitos. Um fluxo direto e focado no seu resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-[#22222A] relative">
              <span className="text-2xl font-serif font-bold text-[#C9A45C]/40 mb-3 block">
                01
              </span>
              <h3 className="text-base font-serif font-bold text-white mb-2">
                Briefing pelo WhatsApp
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Alinhamento rápido dos seus objetivos, referências estéticas, perfil do seu público-alvo e preferências de cores.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-[#22222A] relative">
              <span className="text-2xl font-serif font-bold text-[#C9A45C]/40 mb-3 block">
                02
              </span>
              <h3 className="text-base font-serif font-bold text-white mb-2">
                Criação & Design
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Desenvolvimento dos conceitos do logotipo, testes de legibilidade e simulações em aplicações reais no mercado imobiliário.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-[#22222A] relative">
              <span className="text-2xl font-serif font-bold text-[#C9A45C]/40 mb-3 block">
                03
              </span>
              <h3 className="text-base font-serif font-bold text-white mb-2">
                Revisões & Ajustes
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Apresentação das opções desenvolvidas. Realizamos as rodadas de ajustes necessárias para que a marca fique impecável.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-[#22222A] relative">
              <span className="text-2xl font-serif font-bold text-[#C9A45C] mb-3 block">
                04
              </span>
              <h3 className="text-base font-serif font-bold text-white mb-2">
                Entrega dos Arquivos
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Envio da pasta completa com arquivos em vetor, formatos para gráfica, PNG transparente e acesso ao Cartão Digital.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PAGAMENTO (Condições Claras)
         ========================================================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#16161C] to-[#101014] border border-[#2B2B38] p-7 sm:p-10 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/25 text-xs text-[#DFC282] font-semibold mb-3">
                <CreditCard className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Condições de Pagamento</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                Pix ou cartão. 50% para iniciar e 50% quando estiverem prontos e aprovadas para envio.
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Os arquivos finais são liberados após o pagamento do saldo. Você tem total segurança de ver seu projeto pronto antes de quitar a segunda parte.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400 justify-center sm:justify-start">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" /> Pix imediato
                </span>
                <span className="text-gray-600">·</span>
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" /> Cartão de Crédito
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <a
                href={getWhatsAppLink('Olá Jorge! Gostaria de tirar dúvidas sobre as formas de pagamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B0B0C] bg-[#C9A45C] hover:bg-[#DFC282] rounded-xl transition-all shadow-md shadow-[#C9A45C]/20 whitespace-nowrap"
              >
                <span>Tirar dúvidas pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PERGUNTAS FREQUENTES (Acordeão)
         ========================================================= */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0E0E12] border-t border-[#1C1C24] relative">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold mb-2">
              Transparência Total
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-sm text-gray-400">
              Respostas claras para as dúvidas mais comuns antes de iniciar seu projeto.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#131317] border border-[#22222A] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#181820] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C9A45C] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1C1C24] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          FECHAMENTO (Chamada Final + Botão Grande WhatsApp + Instagram)
         ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative text-center">
        {/* Ambient glow */}
        <div className="absolute inset-0 max-w-lg mx-auto bg-[#C9A45C]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          
          <div className="w-14 h-14 rounded-full border border-[#C9A45C]/60 flex items-center justify-center text-[#C9A45C] mx-auto mb-6 bg-[#16161B]">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
            Pronto para transformar sua presença de mercado?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Tenha uma marca sólida, respeitada e que transmite credibilidade instantânea em cada conversa ou proposta.
          </p>

          {/* Big WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a
              href={getWhatsAppLink('Olá Jorge! Quero conhecer os pacotes de identidade visual.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-[#0B0B0C] bg-[#C9A45C] hover:bg-[#DFC282] rounded-2xl transition-all shadow-xl shadow-[#C9A45C]/25 hover:shadow-[#C9A45C]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar Jorge no WhatsApp</span>
            </a>
          </div>

          {/* Instagram link & Socials */}
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <span>Acompanhe os bastidores no Instagram:</span>
            <a
              href="https://instagram.com/jorgeheine_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#C9A45C] font-semibold hover:underline"
            >
              <Instagram className="w-4 h-4" />
              <span>@jorgeheine_</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          FOOTER (Quiet & Professional)
         ========================================================= */}
      <footer className="border-t border-[#1C1C24] pt-10 pb-24 sm:pb-12 px-4 sm:px-6 text-center text-xs text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-serif font-bold">
            <span className="w-6 h-6 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] text-[10px]">
              JH
            </span>
            <span>JORGE HEINE · DESIGN DE MARCAS</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#pacotes" className="hover:text-gray-300 transition-colors">
              Pacotes
            </a>
            <a href="#cartao-digital" className="hover:text-gray-300 transition-colors">
              Cartão Digital
            </a>
            <a href="https://instagram.com/jorgeheine_" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A45C] transition-colors">
              Instagram
            </a>
          </div>

          <p className="text-gray-400">
            © {new Date().getFullYear()} Jorge Heine. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* =========================================================
          BOTÃO FLUTUANTE DE WHATSAPP (Discreto & Compacto)
         ========================================================= */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href={getWhatsAppLink('Olá Jorge! Vim pelo link da bio e gostaria de tirar uma dúvida.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Jorge no WhatsApp"
          className="group flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#131317]/90 backdrop-blur-md border border-[#2B2B38] hover:border-[#C9A45C]/60 text-gray-200 hover:text-white shadow-[0_6px_20px_rgba(0,0,0,0.6)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Subtle WhatsApp icon */}
          <svg
            className="w-4 h-4 text-[#25D366] fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Clean concise label */}
          <span className="text-xs font-medium text-gray-200 group-hover:text-white tracking-wide">
            Falar no WhatsApp
          </span>
        </a>
      </div>



    </div>
  );
}
