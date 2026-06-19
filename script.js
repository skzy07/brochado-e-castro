/* ====================================================
   BROCHADO & CASTRO — Road Safety
   script.js — Catálogo Dinâmico Estilo E-commerce
==================================================== */

(function () {
  'use strict';

  /* ── BASE DE DADOS DOS PRODUTOS (Imagens Catalogo) ── */
  const CATALOGO_PRODUTOS = {
    "1": {
      titulo: "Refletores em ABS para Guardas de Segurança",
      ref: "Ref.ª 107",
      imagem: "images/product_barriers.png",
      descricao: "Fabricado em plástico ABS estrutural de alto impacto. Desenvolvido de raiz com furação e curvatura adequadas para aplicação mecânica direta em guardas e rails metálicos de segurança rodoviária.",
      tabela: [
        ["Material Base", "Plástico ABS de Alta Resistência"],
        ["Cores do Refletor", "Vermelho, Branco e Amarelo"],
        ["Aplicação", "Rails de Segurança / Guardas Rodoviárias"],
        ["Ótica", "Prismática Retrorefletora de alta performance"]
      ]
    },
    "2": {
      titulo: "Nivelador para Guardas de Segurança",
      ref: "Ref.ª 108 / 109",
      imagem: "images/product_transport_infrastructure.png",
      descricao: "Elemento de suporte estrutural pesado inteiramente zincado/galvanizado por imersão a quente. Apresenta furação milimétrica padrão ajustável para acoplamento e fixação robusta em prumos de modelo U.",
      tabela: [
        ["Acabamento", "Aço Inteiramente Galvanizado"],
        ["Compatibilidade", "Prumos Viários em U"],
        ["Medidas Ref.ª 108", "330 x 133 x 67 mm"],
        ["Medidas Ref.ª 109", "390 x 133 x 67 mm"]
      ]
    },
    "3": {
      titulo: "Baia de Fecho de Via (Barreira)",
      ref: "Ref.ª 200 / 200-A",
      imagem: "images/hero_bg.png",
      descricao: "Barreira de corte de tráfego zebrada de alta visibilidade. Fabricada em compósito de fibra de vidro com resinas protetoras e tintas especiais estabilizadas contra raios ultravioleta (U.V.), prevenindo o desgaste da cor.",
      tabela: [
        ["Material", "Fibra de Vidro Composta"],
        ["Padrão Visual", "Zebrado Vermelho e Branco (Tinta Anti-U.V.)"],
        ["Comp. Ref.ª 200", "2400 mm — 2600 mm (Espessura: 30 mm)"],
        ["Comp. Ref.ª 200-A", "3300 mm — 3500 mm (Espessura: 30 mm)"]
      ]
    },
    "4": {
      titulo: "Delineador Curto Tipo Meia-Cana",
      ref: "Ref.ª 103",
      imagem: "images/product_transport_infrastructure.png",
      descricao: "Baliza delineadora flexível de formato meia-cana (Nota: tipo 'BRISA'). Construída em Polipropileno (PP) aditivado na cor branca pura. Integra uma faixa preta texturizada fundida com o próprio corpo do delineador.",
      tabela: [
        ["Material Corpo", "PP Composto Branco (Resistente a U.V.)"],
        ["Marca do Refletor", "GUBELA Premium"],
        ["Dimensões Ótica", "80 x 120 mm"],
        ["Acessório Incluído", "Ferro Galvanizado para as respetivas aplicações"]
      ]
    },
    "5": {
      titulo: "Baia Bidirecional com Lanterna",
      ref: "Ref.ª 203 / 203a / 203b",
      imagem: "images/product_barriers.png",
      descricao: "Módulo vertical dinâmico de orientação com sinalizador luminoso embutido no topo e base estável. O corpo é moldado em Polietileno (P.E.) composto de alta resistência a impactos.",
      tabela: [
        ["Estrutura Principal", "P.E. Composto de Alta Flexibilidade"],
        ["Padrão de Reflexão", "Preto com Amarelo / Branco com Vermelho"],
        ["Cores da Base", "Preta, Amarela ou Laranja Injetada"],
        ["Iluminação", "Lanterna Superior de Sinalização Integrada"]
      ]
    },
    "6": {
      titulo: "Baias Fixas de Alinhamento (Unidirecional / Bidirecional)",
      ref: "Ref.ª 201 / 202",
      imagem: "images/hero_bg.png",
      descricao: "Painéis modulares em Polietileno de alta espessura para fixação definitiva ou temporária no solo. Ideais para sinalização de divergências, curvas perigosas e balizamento geral de trajetórias.",
      tabela: [
        ["Dimensões Totais", "1200 x 300 mm"],
        ["Material", "Polietileno Composto Industrial"],
        ["Ref.ª 201 (Unidirecional)", "Preta com reflexão em Amarelo"],
        ["Ref.ª 202 (Bidirecional)", "Branca com reflexão em Vermelho"]
      ]
    },
    "7": {
      titulo: "Barreira Anti-Encadeamento B.C.L.",
      ref: "Ref.ª 113 / 114",
      imagem: "images/product_barriers.png",
      descricao: "Lamelas verticais com desenho proprietário clássico concebidas para anular a projeção de luz encadeante dos faróis em sentidos opostos, minimizando de forma drástica o cansaço visual noturno.",
      tabela: [
        ["Composição", "Polipropileno (P.P.) e Fibra de Vidro"],
        ["Dimensões Unitárias", "Altura: 600 mm | Largura Máxima: 125 mm"],
        ["Peso Técnico", "Aproximadamente 675 g por unidade"],
        ["Aplicações", "Ref.113 (New Jersey) / Ref.114 (Guardas de Segurança)"]
      ]
    },
    "8": {
      titulo: "Barreira Anti-Encadeamento PE (Design Reto)",
      ref: "Ref.ª 211 / 212 / 213",
      imagem: "images/product_transport_infrastructure.png",
      descricao: "Lâminas retas de desenho sóbrio e simétrico manufaturadas em polietileno avançado. Sistema modular de fácil instalação diretamente ou por suportes dependendo do separador central.",
      tabela: [
        ["Material Base", "Polietileno Composto Técnico"],
        ["Guardas de Segurança", "600mm (Ref.211) | 1000mm (Ref.212) | 1200mm (Ref.213)"],
        ["Barreiras New Jersey", "600mm (Ref.214) | 1000mm (Ref.215)"]
      ]
    },
    "9": {
      titulo: "Lamela Anti-Encadeamento Aerodinâmica",
      ref: "Ref.ª 208 / 209 / 210 / 210A",
      imagem: "images/hero_bg.png",
      descricao: "Gama premium de lâminas aerodinâmicas com topos curvos (Lamela Antiacatamento). Projetadas para otimizar o fluxo de vento através do separador central, mantendo a harmonia estética e funcionalidade.",
      tabela: [
        ["Design Geométrico", "Perfil Arredondado / Diferenciação Estética"],
        ["Material", "Polietileno Composto Premium"],
        ["Guardas de Segurança", "1000mm (Ref.209) | 1200mm (Ref.208)"],
        ["Barreiras New Jersey", "600mm (Ref.210) | 1000mm (Ref.210A)"]
      ]
    },
    "10": {
      titulo: "Delineador Comprido Tipo J6",
      ref: "Ref.ª 102-1 / 102-3",
      imagem: "images/product_transport_infrastructure.png",
      descricao: "Baliza de berma longa desenvolvida segundo as especificações J.A.E. Produzida em Polietileno branco de alta densidade estável a variações climatéricas com faixa preta em PP.",
      tabela: [
        ["Material do Corpo", "P.E. Composto com Filtros Solares U.V."],
        ["Ótica Refletora", "Refletor GUBELA (40x180 mm ou 50x180 mm)"],
        ["Efeito Bidirecional", "Opção de 2 refletores circulares Ø 60 mm no verso"],
        ["Suporte Base", "Inclui base plástica em P.E. composto"]
      ]
    },
    "11": {
      titulo: "Delineador Curto Tipo J6",
      ref: "Ref.ª 101-1 / 101-3",
      imagem: "images/product_barriers.png",
      descricao: "Delineador viário de formato curto para fixação suspensa. Fabricado em polietileno rígido modificado com banda negra e furos adequados para montagem em guardas ou barreiras New Jersey.",
      tabela: [
        ["Fixação Estrutural", "Inclui ferro galvanizado para respetivas aplicações"],
        ["Ótica Principal", "Refletor GUBELA (40x180 mm / 50x180 mm)"],
        ["Verso (Opcional)", "2 refletores circulares de Ø 60 mm na outra face"],
        ["Resistência", "Material Branco aditivado contra radiação U.V."]
      ]
    },
    "12": {
      titulo: "Delineador Longo ao Solo Tipo Meia-Cana",
      ref: "Ref.ª 104",
      imagem: "images/hero_bg.png",
      descricao: "Baliza delineadora vertical de solo longa, desenhada sob a tipologia flexível 'BRISA'. O seu corpo côncavo confere-lhe excelente flexibilidade e memória de forma estrutural.",
      tabela: [
        ["Geometria", "Tipo Meia-Cana / Perfil Alongado"],
        ["Material Principal", "P.P. Composto Branco com proteção U.V."],
        ["Elemento Ótico", "Refletor GUBELA integrado de 80 x 120 mm"],
        ["Instalação", "Pronto para fixação e furação direta ao solo"]
      ]
    }
  };

  /* ── LOGICA DE REDIRECIONAMENTO E CARREGAMENTO DA PAGINA DE DETALHE ── */
  const detailContainer = document.getElementById('dynamic-product-content');
  if (detailContainer) {
    // Captura o "?id=X" do link/URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    const produto = CATALOGO_PRODUTOS[produtoId];

    if (produto) {
      // Altera o título da janela do navegador
      document.title = `${produto.titulo} — Detalhes Técnicos`;

      // Monta as linhas da tabela de especificações
      let tabelaHTML = '';
      produto.tabela.forEach(linha => {
        tabelaHTML += `<tr><th>${linha[0]}</th><td>${linha[1]}</td></tr>`;
      });

      // Injeta a estrutura inteira na página estilo e-commerce
      detailContainer.innerHTML = `
        <div class="detail-grid">
          <div class="detail-media">
            <div class="detail-img-card">
              <img src="${produto.imagem}" alt="${produto.titulo}" class="detail-main-img">
            </div>
          </div>
          <div class="detail-info">
            <span class="detail-ref-badge">${produto.ref}</span>
            <h1 class="detail-main-title">${produto.titulo}</h1>
            
            <div class="detail-block">
              <h3 class="detail-sec-title">Breve Descrição</h3>
              <p class="detail-text-desc">${produto.descricao}</p>
            </div>

            <div class="detail-block">
              <h3 class="detail-sec-title">Especificações Técnicas</h3>
              <table class="detail-data-table">
                <tbody>${tabelaHTML}</tbody>
              </table>
            </div>

            <div class="detail-actions">
              <a href="orcamento.html?ref=${encodeURIComponent(produto.ref)}" class="detail-cta-btn">Pedir Orçamento Deste Produto</a>
            </div>
          </div>
        </div>
      `;
    } else {
      detailContainer.innerHTML = `
        <div style="padding: 5rem 0; text-align: center;">
          <h2 style="color: var(--grey-800); margin-bottom: 1rem;">Produto não encontrado</h2>
          <p style="color: var(--grey-500); margin-bottom: 2rem;">O equipamento solicitado não consta no catálogo ativo.</p>
          <a href="produtos.html" class="btn-nav-cta" style="display:inline-block;">Voltar ao Catálogo</a>
        </div>
      `;
    }
  }

  /* ── COMPONENTES GLOBAIS (Navbar, Burger, Scroll Reveal) ── */
  const burger        = document.getElementById('burger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks   = document.querySelectorAll('.mn-link, .mn-cta');
  const btt           = document.getElementById('btt');
  const cform         = document.getElementById('cform');

  function handleScroll () {
    if (btt) btt.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', () => requestAnimationFrame(handleScroll), { passive: true });
  handleScroll();

  function toggleMenu (force) {
    const open = typeof force === 'boolean' ? force : !burger.classList.contains('open');
    if(burger) burger.classList.toggle('open', open);
    if(mobileOverlay) mobileOverlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', () => toggleMenu());
  mobileLinks.forEach(l => l.addEventListener('click', () => toggleMenu(false)));

  if (btt) {
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Scroll Reveal Animation ── */
  const revealTargets = document.querySelectorAll('.pcard, .section-head, .detail-img-card, .detail-info');
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    const siblings = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('reveal')) : [];
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 3) el.classList.add(`rd${idx}`);
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  revealTargets.forEach(el => revealObs.observe(el));

})();