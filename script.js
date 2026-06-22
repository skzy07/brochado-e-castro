  /* ====================================================
   BROCHADO & CASTRO — Main Script
   script.js — Dynamic Catalogue + UI
   Language engine lives in i18n.js
==================================================== */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════
     HERO SLIDER (Home page)
     Cycles hero image + headline/text every 10s.
     Runs first and is self-contained so it is never
     skipped by an error elsewhere in this file.
  ══════════════════════════════════════════════════ */
  try {
    const heroImgs  = document.querySelectorAll('.hero-slide-img');
    const heroTexts = document.querySelectorAll('.hero-slide-text');
    const heroDots  = document.querySelectorAll('.hero-dot');

    if (heroImgs.length > 1) {
      let heroIdx = 0;
      const HERO_INTERVAL = 10000;
      let heroTimer = null;

      const goToSlide = (i) => {
        heroIdx = i;
        heroImgs.forEach((img, n) => img.classList.toggle('active', n === heroIdx));
        heroTexts.forEach((t, n) => t.classList.toggle('active', n === heroIdx));
        heroDots.forEach((d, n) => d.classList.toggle('active', n === heroIdx));
      };

      const nextSlide = () => goToSlide((heroIdx + 1) % heroImgs.length);

      const startHeroTimer = () => {
        clearInterval(heroTimer);
        heroTimer = setInterval(nextSlide, HERO_INTERVAL);
      };

      heroDots.forEach((dot, n) => {
        dot.addEventListener('click', () => {
          goToSlide(n);
          startHeroTimer();
        });
      });

      startHeroTimer();
    }
  } catch (err) {
    console.error('Hero slider failed to initialise:', err);
  }

  /* ══════════════════════════════════════════════════════
     BILINGUAL PRODUCT DATABASE
     To add a language: add an `xx: { ... }` block
     to every product alongside "pt" and "en".
  ══════════════════════════════════════════════════════ */
  const CATALOGO = {
    "1": {
      imagem: "images/product_barriers.png",
      pt: {
        titulo: "Refletores em ABS para Guardas de Segurança",
        ref: "Ref.ª 107",
        descricao: "Fabricado em plástico ABS estrutural de alto impacto. Desenvolvido de raiz com furação e curvatura adequadas para aplicação mecânica direta em guardas e rails metálicos de segurança rodoviária.",
        tabela: [
          ["Material Base", "Plástico ABS de Alta Resistência"],
          ["Cores do Refletor", "Vermelho, Branco e Amarelo"],
          ["Aplicação", "Rails de Segurança / Guardas Rodoviárias"],
          ["Ótica", "Prismática Retrorefletora de alta performance"]
        ]
      },
      en: {
        titulo: "ABS Reflectors for Safety Guardrails",
        ref: "Ref. 107",
        descricao: "Made from high-impact structural ABS plastic. Developed from scratch with appropriate drilling and curvature for direct mechanical application on metal safety guardrails and rails.",
        tabela: [
          ["Base Material", "High-strength ABS Plastic"],
          ["Reflector Colours", "Red, White and Yellow"],
          ["Application", "Safety Rails / Road Guardrails"],
          ["Optics", "High-performance Retroreflective Prismatic"]
        ]
      }
    },
    "2": {
      imagem: "images/product_transport_infrastructure.png",
      pt: {
        titulo: "Nivelador para Guardas de Segurança",
        ref: "Ref.ª 108 / 109",
        descricao: "Elemento de suporte estrutural pesado inteiramente zincado/galvanizado por imersão a quente. Apresenta furação milimétrica padrão ajustável para acoplamento e fixação robusta em prumos de modelo U.",
        tabela: [
          ["Acabamento", "Aço Inteiramente Galvanizado"],
          ["Compatibilidade", "Prumos Viários em U"],
          ["Medidas Ref.ª 108", "330 x 133 x 67 mm"],
          ["Medidas Ref.ª 109", "390 x 133 x 67 mm"]
        ]
      },
      en: {
        titulo: "Guardrail Leveller",
        ref: "Ref. 108 / 109",
        descricao: "Heavy structural support element entirely hot-dip zinc-coated/galvanised. Features standard adjustable millimetric drilling for coupling and robust fastening on U-model posts.",
        tabela: [
          ["Finish", "Fully Galvanised Steel"],
          ["Compatibility", "U-shaped Road Posts"],
          ["Dimensions Ref. 108", "330 x 133 x 67 mm"],
          ["Dimensions Ref. 109", "390 x 133 x 67 mm"]
        ]
      }
    },
    "3": {
      imagem: "images/hero_bg.png",
      pt: {
        titulo: "Baia de Fecho de Via (Barreira)",
        ref: "Ref.ª 200 / 200-A",
        descricao: "Barreira de corte de tráfego zebrada de alta visibilidade. Fabricada em compósito de fibra de vidro com resinas protetoras e tintas especiais estabilizadas contra raios ultravioleta (U.V.), prevenindo o desgaste da cor.",
        tabela: [
          ["Material", "Fibra de Vidro Composta"],
          ["Padrão Visual", "Zebrado Vermelho e Branco (Tinta Anti-U.V.)"],
          ["Comp. Ref.ª 200", "2400 mm — 2600 mm (Espessura: 30 mm)"],
          ["Comp. Ref.ª 200-A", "3300 mm — 3500 mm (Espessura: 30 mm)"]
        ]
      },
      en: {
        titulo: "Lane Closure Barrier",
        ref: "Ref. 200 / 200-A",
        descricao: "High-visibility chevron traffic-cut barrier. Manufactured in fibreglass composite with protective resins and special UV-stabilised paints, preventing colour fading.",
        tabela: [
          ["Material", "Composite Fibreglass"],
          ["Visual Pattern", "Red and White Chevron (UV-resistant paint)"],
          ["Length Ref. 200", "2400 mm — 2600 mm (Thickness: 30 mm)"],
          ["Length Ref. 200-A", "3300 mm — 3500 mm (Thickness: 30 mm)"]
        ]
      }
    },
    "4": {
      imagem: "images/product_transport_infrastructure.png",
      pt: {
        titulo: "Delineador Curto Tipo Meia-Cana",
        ref: "Ref.ª 103",
        descricao: "Baliza delineadora flexível de formato meia-cana (tipo 'BRISA'). Construída em Polipropileno (PP) aditivado na cor branca pura. Integra uma faixa preta texturizada fundida com o próprio corpo do delineador.",
        tabela: [
          ["Material Corpo", "PP Composto Branco (Resistente a U.V.)"],
          ["Marca do Refletor", "GUBELA Premium"],
          ["Dimensões Ótica", "80 x 120 mm"],
          ["Acessório Incluído", "Ferro Galvanizado para as respetivas aplicações"]
        ]
      },
      en: {
        titulo: "Short Half-Round Delineator",
        ref: "Ref. 103",
        descricao: "Flexible half-round delineator marker ('BRISA' type). Built in white-additive polypropylene (PP). Integrates a textured black stripe fused with the delineator body.",
        tabela: [
          ["Body Material", "White Composite PP (UV-resistant)"],
          ["Reflector Brand", "GUBELA Premium"],
          ["Optic Dimensions", "80 x 120 mm"],
          ["Included Accessory", "Galvanised iron for the relevant applications"]
        ]
      }
    },
    "5": {
      imagem: "images/product_barriers.png",
      pt: {
        titulo: "Baia Bidirecional com Lanterna",
        ref: "Ref.ª 203 / 203a / 203b",
        descricao: "Módulo vertical dinâmico de orientação com sinalizador luminoso embutido no topo e base estável. O corpo é moldado em Polietileno (P.E.) composto de alta resistência a impactos.",
        tabela: [
          ["Estrutura Principal", "P.E. Composto de Alta Flexibilidade"],
          ["Padrão de Reflexão", "Preto com Amarelo / Branco com Vermelho"],
          ["Cores da Base", "Preta, Amarela ou Laranja Injetada"],
          ["Iluminação", "Lanterna Superior de Sinalização Integrada"]
        ]
      },
      en: {
        titulo: "Bidirectional Marker with Beacon",
        ref: "Ref. 203 / 203a / 203b",
        descricao: "Dynamic vertical orientation module with a built-in top signal beacon and stable base. The body is moulded in high-impact resistant Polyethylene (P.E.) compound.",
        tabela: [
          ["Main Structure", "High-flexibility Polyethylene Compound"],
          ["Reflection Pattern", "Black with Yellow / White with Red"],
          ["Base Colours", "Black, Yellow or Injected Orange"],
          ["Lighting", "Integrated Top Signal Beacon"]
        ]
      }
    },
    "6": {
      imagem: "images/hero_bg.png",
      pt: {
        titulo: "Baias Fixas de Alinhamento (Unidirecional / Bidirecional)",
        ref: "Ref.ª 201 / 202",
        descricao: "Painéis modulares em Polietileno de alta espessura para fixação definitiva ou temporária no solo. Ideais para sinalização de divergências, curvas perigosas e balizamento geral de trajetórias.",
        tabela: [
          ["Dimensões Totais", "1200 x 300 mm"],
          ["Material", "Polietileno Composto Industrial"],
          ["Ref.ª 201 (Unidirecional)", "Preta com reflexão em Amarelo"],
          ["Ref.ª 202 (Bidirecional)", "Branca com reflexão em Vermelho"]
        ]
      },
      en: {
        titulo: "Fixed Alignment Markers (Unidirectional / Bidirectional)",
        ref: "Ref. 201 / 202",
        descricao: "High-thickness Polyethylene modular panels for permanent or temporary ground mounting. Ideal for divergence signage, dangerous curves, and general path marking.",
        tabela: [
          ["Overall Dimensions", "1200 x 300 mm"],
          ["Material", "Industrial Composite Polyethylene"],
          ["Ref. 201 (Unidirectional)", "Black with Yellow reflection"],
          ["Ref. 202 (Bidirectional)", "White with Red reflection"]
        ]
      }
    },
    "7": {
      imagem: "images/product_barriers.png",
      pt: {
        titulo: "Barreira Anti-Encadeamento B.C.L.",
        ref: "Ref.ª 113 / 114",
        descricao: "Lamelas verticais com desenho proprietário clássico concebidas para anular a projeção de luz encadeante dos faróis em sentidos opostos, minimizando de forma drástica o cansaço visual noturno.",
        tabela: [
          ["Composição", "Polipropileno (P.P.) e Fibra de Vidro"],
          ["Dimensões Unitárias", "Altura: 600 mm | Largura Máxima: 125 mm"],
          ["Peso Técnico", "Aproximadamente 675 g por unidade"],
          ["Aplicações", "Ref.113 (New Jersey) / Ref.114 (Guardas de Segurança)"]
        ]
      },
      en: {
        titulo: "B.C.L. Anti-Glare Barrier",
        ref: "Ref. 113 / 114",
        descricao: "Vertical slats with a classic proprietary design, created to neutralise glare from oncoming headlights, drastically reducing night-time visual fatigue.",
        tabela: [
          ["Composition", "Polypropylene (P.P.) and Fibreglass"],
          ["Unit Dimensions", "Height: 600 mm | Max. Width: 125 mm"],
          ["Technical Weight", "Approx. 675 g per unit"],
          ["Applications", "Ref.113 (New Jersey) / Ref.114 (Safety Guardrails)"]
        ]
      }
    },
    "8": {
      imagem: "images/product_transport_infrastructure.png",
      pt: {
        titulo: "Barreira Anti-Encadeamento PE (Design Reto)",
        ref: "Ref.ª 211 / 212 / 213",
        descricao: "Lâminas retas de desenho sóbrio e simétrico manufaturadas em polietileno avançado. Sistema modular de fácil instalação diretamente ou por suportes dependendo do separador central.",
        tabela: [
          ["Material Base", "Polietileno Composto Técnico"],
          ["Guardas de Segurança", "600mm (Ref.211) | 1000mm (Ref.212) | 1200mm (Ref.213)"],
          ["Barreiras New Jersey", "600mm (Ref.214) | 1000mm (Ref.215)"]
        ]
      },
      en: {
        titulo: "PE Anti-Glare Barrier (Straight Design)",
        ref: "Ref. 211 / 212 / 213",
        descricao: "Straight blades with a sober, symmetrical design manufactured in advanced polyethylene. Modular system easy to install directly or with brackets depending on the central reservation.",
        tabela: [
          ["Base Material", "Technical Composite Polyethylene"],
          ["Safety Guardrails", "600mm (Ref.211) | 1000mm (Ref.212) | 1200mm (Ref.213)"],
          ["New Jersey Barriers", "600mm (Ref.214) | 1000mm (Ref.215)"]
        ]
      }
    },
    "9": {
      imagem: "images/hero_bg.png",
      pt: {
        titulo: "Lamela Anti-Encadeamento Aerodinâmica",
        ref: "Ref.ª 208 / 209 / 210 / 210A",
        descricao: "Gama premium de lâminas aerodinâmicas com topos curvos. Projetadas para otimizar o fluxo de vento através do separador central, mantendo a harmonia estética e funcionalidade.",
        tabela: [
          ["Design Geométrico", "Perfil Arredondado / Diferenciação Estética"],
          ["Material", "Polietileno Composto Premium"],
          ["Guardas de Segurança", "1000mm (Ref.209) | 1200mm (Ref.208)"],
          ["Barreiras New Jersey", "600mm (Ref.210) | 1000mm (Ref.210A)"]
        ]
      },
      en: {
        titulo: "Aerodynamic Anti-Glare Slat",
        ref: "Ref. 208 / 209 / 210 / 210A",
        descricao: "Premium range of aerodynamic blades with curved tops. Designed to optimise airflow through the central reservation while maintaining aesthetic harmony and full functionality.",
        tabela: [
          ["Geometric Design", "Rounded Profile / Aesthetic Differentiation"],
          ["Material", "Premium Composite Polyethylene"],
          ["Safety Guardrails", "1000mm (Ref.209) | 1200mm (Ref.208)"],
          ["New Jersey Barriers", "600mm (Ref.210) | 1000mm (Ref.210A)"]
        ]
      }
    },
    "10": {
      imagem: "images/product_transport_infrastructure.png",
      pt: {
        titulo: "Delineador Comprido Tipo J6",
        ref: "Ref.ª 102-1 / 102-3",
        descricao: "Baliza de berma longa desenvolvida segundo as especificações J.A.E. Produzida em Polietileno branco de alta densidade estável a variações climatéricas com faixa preta em PP.",
        tabela: [
          ["Material do Corpo", "P.E. Composto com Filtros Solares U.V."],
          ["Ótica Refletora", "Refletor GUBELA (40x180 mm ou 50x180 mm)"],
          ["Efeito Bidirecional", "Opção de 2 refletores circulares Ø 60 mm no verso"],
          ["Suporte Base", "Inclui base plástica em P.E. composto"]
        ]
      },
      en: {
        titulo: "Long J6 Delineator",
        ref: "Ref. 102-1 / 102-3",
        descricao: "Long shoulder delineator developed to J.A.E. specifications. Produced in high-density white polyethylene stable under weather variations, with a black PP stripe.",
        tabela: [
          ["Body Material", "Polyethylene Compound with UV Solar Filters"],
          ["Reflective Optic", "GUBELA Reflector (40×180 mm or 50×180 mm)"],
          ["Bidirectional Effect", "Option of 2 circular Ø 60 mm reflectors on the reverse"],
          ["Base Support", "Includes plastic base in Polyethylene compound"]
        ]
      }
    },
    "11": {
      imagem: "images/product_barriers.png",
      pt: {
        titulo: "Delineador Curto Tipo J6",
        ref: "Ref.ª 101-1 / 101-3",
        descricao: "Delineador viário de formato curto para fixação suspensa. Fabricado em polietileno rígido modificado com banda negra e furos adequados para montagem em guardas ou barreiras New Jersey.",
        tabela: [
          ["Fixação Estrutural", "Inclui ferro galvanizado para respetivas aplicações"],
          ["Ótica Principal", "Refletor GUBELA (40x180 mm / 50x180 mm)"],
          ["Verso (Opcional)", "2 refletores circulares de Ø 60 mm na outra face"],
          ["Resistência", "Material Branco aditivado contra radiação U.V."]
        ]
      },
      en: {
        titulo: "Short J6 Delineator",
        ref: "Ref. 101-1 / 101-3",
        descricao: "Short road delineator for suspended mounting. Manufactured in modified rigid polyethylene with a black band and holes suitable for mounting on guardrails or New Jersey barriers.",
        tabela: [
          ["Structural Fixing", "Includes galvanised iron for the relevant applications"],
          ["Main Optics", "GUBELA Reflector (40×180 mm / 50×180 mm)"],
          ["Reverse (Optional)", "2 circular Ø 60 mm reflectors on the other face"],
          ["Resistance", "White material treated against UV radiation"]
        ]
      }
    },
    "12": {
      imagem: "images/hero_bg.png",
      pt: {
        titulo: "Delineador Longo ao Solo Tipo Meia-Cana",
        ref: "Ref.ª 104",
        descricao: "Baliza delineadora vertical de solo longa, desenhada sob a tipologia flexível 'BRISA'. O seu corpo côncavo confere-lhe excelente flexibilidade e memória de forma estrutural.",
        tabela: [
          ["Geometria", "Tipo Meia-Cana / Perfil Alongado"],
          ["Material Principal", "P.P. Composto Branco com proteção U.V."],
          ["Elemento Ótico", "Refletor GUBELA integrado de 80 x 120 mm"],
          ["Instalação", "Pronto para fixação e furação direta ao solo"]
        ]
      },
      en: {
        titulo: "Long Ground Half-Round Delineator",
        ref: "Ref. 104",
        descricao: "Long vertical ground delineator designed in the flexible 'BRISA' style. Its concave body provides excellent flexibility and structural shape memory.",
        tabela: [
          ["Geometry", "Half-Round Type / Elongated Profile"],
          ["Main Material", "White PP Compound with UV Protection"],
          ["Optic Element", "Integrated GUBELA Reflector 80 × 120 mm"],
          ["Installation", "Ready for direct ground mounting and drilling"]
        ]
      }
    }
  };

  /* ══════════════════════════════════════════════════
     PAGE TITLES
     Add a key per language for each page.
  ══════════════════════════════════════════════════ */
  const PAGE_TITLES = {
    "index.html":           { pt: "Brochado & Castro — Início & Contacto",        en: "Brochado & Castro — Home & Contact" },
    "produtos.html":        { pt: "Brochado & Castro — Produtos",                  en: "Brochado & Castro — Products" },
    "servicos.html":        { pt: "Brochado & Castro — Serviços",                  en: "Brochado & Castro — Services" },
    "empresa.html":         { pt: "Brochado & Castro — Empresa",                   en: "Brochado & Castro — Company" },
    "orcamento.html":       { pt: "Brochado & Castro — Pedir Orçamento",           en: "Brochado & Castro — Request a Quote" },
    "produto-detalhe.html": { pt: "Especificações do Produto — Brochado & Castro", en: "Product Specifications — Brochado & Castro" }
  };

  const UI_STRINGS = {
    pt: { desc: "Breve Descrição", specs: "Especificações Técnicas", cta: "Pedir Orçamento Deste Produto",
          notFound: "Produto não encontrado", notFoundSub: "O equipamento solicitado não consta no catálogo ativo.", back: "Voltar ao Catálogo", techDetails: "Detalhes Técnicos" },
    en: { desc: "Brief Description", specs: "Technical Specifications", cta: "Request a Quote for This Product",
          notFound: "Product not found", notFoundSub: "The requested item is not in the active catalogue.", back: "Back to Catalogue", techDetails: "Technical Details" }
  };

  /* ══════════════════════════════════════════════════
     PRODUCT DETAIL PAGE
  ══════════════════════════════════════════════════ */
  const detailContainer = document.getElementById('dynamic-product-content');

  function renderProduct(lang) {
    if (!detailContainer) return;
    const produtoId = new URLSearchParams(window.location.search).get('id');
    const entry = CATALOGO[produtoId];
    const ui = UI_STRINGS[lang] || UI_STRINGS.pt;

    if (!entry || !entry[lang]) {
      detailContainer.innerHTML = `
        <div style="padding:5rem 0;text-align:center;">
          <h2 style="color:var(--grey-800);margin-bottom:1rem;">${ui.notFound}</h2>
          <p style="color:var(--grey-500);margin-bottom:2rem;">${ui.notFoundSub}</p>
          <a href="produtos.html" class="btn-nav-cta" style="display:inline-block;">${ui.back}</a>
        </div>`;
      return;
    }

    const p = entry[lang];
    const rows = p.tabela.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('');

    detailContainer.innerHTML = `
      <div class="detail-grid">
        <div class="detail-media">
          <div class="detail-img-card">
            <img src="${entry.imagem}" alt="${p.titulo}" class="detail-main-img">
          </div>
        </div>
        <div class="detail-info">
          <span class="detail-ref-badge">${p.ref}</span>
          <h1 class="detail-main-title">${p.titulo}</h1>
          <div class="detail-block">
            <h3 class="detail-sec-title">${ui.desc}</h3>
            <p class="detail-text-desc">${p.descricao}</p>
          </div>
          <div class="detail-block">
            <h3 class="detail-sec-title">${ui.specs}</h3>
            <table class="detail-data-table"><tbody>${rows}</tbody></table>
          </div>
          <div class="detail-actions">
            <a href="orcamento.html?ref=${encodeURIComponent(p.ref)}" class="detail-cta-btn">${ui.cta}</a>
          </div>
        </div>
      </div>`;

    document.title = `${p.titulo} — ${ui.techDetails}`;
  }

  /* Listen for language changes fired by i18n.js */
  document.addEventListener('bcl:langChange', (e) => {
    const lang = e.detail.lang;
    /* Update page title (non-detail pages) */
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page !== 'produto-detalhe.html' && PAGE_TITLES[page]) {
      document.title = PAGE_TITLES[page][lang] || document.title;
    }
    /* Re-render product detail */
    if (detailContainer) renderProduct(lang);
  });

  /* Initial render for detail page (i18n.js boots first via DOMContentLoaded) */
  if (detailContainer) {
    document.addEventListener('DOMContentLoaded', () => {
      const lang = window.BCL_i18n ? window.BCL_i18n.getCurrentLang() : 'pt';
      renderProduct(lang);
    });
  }

  /* ══════════════════════════════════════════════════
     GLOBAL UI
  ══════════════════════════════════════════════════ */
  const burger        = document.getElementById('burger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks   = document.querySelectorAll('.mn-link, .mn-cta');
  const btt           = document.getElementById('btt');

  window.addEventListener('scroll', () => {
    if (btt) btt.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  function toggleMenu(force) {
    const open = typeof force === 'boolean' ? force : !burger.classList.contains('open');
    if (burger) burger.classList.toggle('open', open);
    if (mobileOverlay) mobileOverlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', () => toggleMenu());
  mobileLinks.forEach(l => l.addEventListener('click', () => toggleMenu(false)));
  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* Scroll Reveal */
  const revealTargets = document.querySelectorAll('.pcard, .section-head, .detail-img-card, .detail-info, .about-grid, .pillar');
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    const siblings = el.parentElement
      ? [...el.parentElement.children].filter(c => c.classList.contains('reveal'))
      : [];
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 3) el.classList.add(`rd${idx}`);
  });
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  revealTargets.forEach(el => revealObs.observe(el));

  /* Also observe elements that already have .reveal in HTML (e.g. contactos, noticias) */
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

})();
