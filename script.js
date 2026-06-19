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

  const LANGUAGE_STORAGE_KEY = 'bcl-lang';
  const TRANSLATIONS_EN = {
    "Brochado & Castro — Início & Contacto": "Brochado & Castro — Home & Contact",
    "Brochado & Castro — Produtos": "Brochado & Castro — Products",
    "Brochado & Castro — Serviços": "Brochado & Castro — Services",
    "Brochado & Castro — Empresa": "Brochado & Castro — Company",
    "Brochado & Castro — Pedir Orçamento": "Brochado & Castro — Request a Quote",
    "Especificações do Produto — Brochado & Castro": "Product Specifications — Brochado & Castro",
    "Início": "Home",
    "Produtos": "Products",
    "Serviços": "Services",
    "Empresa": "Company",
    "Pedir Orçamento": "Request Quote",
    "Fale Connosco": "Talk to Us",
    "CONTACTE A NOSSA": "CONTACT OUR",
    "EQUIPA": "TEAM",
    "Estamos disponíveis para esclarecer qualquer dúvida sobre os nossos produtos e serviços.": "We are available to answer any questions about our products and services.",
    "Nome Completo *": "Full Name *",
    "E-mail *": "Email *",
    "Sua Mensagem *": "Your Message *",
    "O seu nome...": "Your name...",
    "o-seu-email@exemplo.pt": "your-email@example.com",
    "Como o podemos ajudar?": "How can we help you?",
    "Enviar Mensagem": "Send Message",
    "Onde Estamos": "Where We Are",
    "Visite as nossas instalações em Matosinhos.": "Visit our facilities in Matosinhos.",
    "Fonte Velha, 474, 4460-729.": "Fonte Velha, 474, 4460-729.",
    "Visite as nossas instalações em Matosinhos.\nFonte Velha, 474, 4460-729.": "Visit our facilities in Matosinhos.\nFonte Velha, 474, 4460-729.",
    "Abrir no Google Maps →": "Open in Google Maps →",
    "Contactos & Localização": "Contacts & Location",
    "Horário de Funcionamento": "Opening Hours",
    "Segunda – Sexta": "Monday – Friday",
    "Sábado e Domingo": "Saturday & Sunday",
    "Encerrado": "Closed",
    "© 2026 Brochado & Castro, Lda. Todos os direitos reservados.": "© 2026 Brochado & Castro, Lda. All rights reserved.",
    "Especialistas em segurança rodoviária desde 1973. Soluções robustas de moldagem e engenharia em Matosinhos.": "Road safety specialists since 1973. Robust molding and engineering solutions in Matosinhos.",
    "O Nosso Catálogo": "Our Catalog",
    "Fabricação robusta de componentes plásticos e artigos para": "Robust manufacturing of plastic components and products for",
    "infraestruturas de transporte em Matosinhos.": "transport infrastructure in Matosinhos.",
    "Ver Produtos": "View Products",
    "Ver Detalhes": "View Details",
    "Painel de alinhamento com sinalização ótica superior e base termoplástica injetada estável.": "Alignment panel with top optical signaling and stable injection-molded thermoplastic base.",
    "Placas verticais sinalizadoras para solo em versões unidirecionais ou bidirecionais.": "Vertical ground signaling panels in unidirectional or bidirectional versions.",
    "Lamelas clássicas em Polipropileno e fibra de vidro para bloqueio de faróis opostos.": "Classic polypropylene and fiberglass slats for opposing headlight glare blocking.",
    "Sistema modular reto fabricado em Polietileno com múltiplos tamanhos para separadores centrais.": "Straight modular system made of polyethylene with multiple sizes for central dividers.",
    "Variante aerodinâmica com perfil arredondado de alto rendimento estético e funcional.": "Aerodynamic variant with rounded profile for high aesthetic and functional performance.",
    "Baliza vertical de solo longa (tipo J.A.E.) com faixa preta em PP e refletores de alta precisão.": "Long vertical ground delineator (J.A.E. type) with black PP stripe and high-precision reflectors.",
    "Delineador compacto com suporte metálico galvanizado para fixação em guardas viárias.": "Compact delineator with galvanized metal support for mounting on road guards.",
    "Baliza flexível de solo longa (tipo BRISA) com furação integrada para fixação mecânica direta.": "Long flexible ground delineator (BRISA type) with integrated drilling for direct mechanical mounting.",
    "EQUIPAMENTO DE": "HIGH RESILIENCE EQUIPMENT",
    "ALTA RESISTÊNCIA": "HIGH RESILIENCE",
    "PROTEGER ESTRADAS.": "PROTECT ROADS.",
    "SALVAR VIDAS.": "SAVE LIVES.",
    "Soluções robustas e certificadas para a sinalização e segurança das vias rodoviárias.": "Robust, certified solutions for road signaling and safety.",
    "Ver Produto": "View Product",
    "Refletores em ABS para Guardas": "ABS Reflectors for Guards",
    "Refletores prismáticos de alta performance para aplicação direta em rails de segurança.": "High-performance prismatic reflectors for direct application on safety rails.",
    "Nivelador para Guardas": "Guard Leveler",
    "Peça metálica inteiramente galvanizada para suporte estrutural e fixação em prumos modelo U.": "Fully galvanized metal piece for structural support and fastening on U-model posts.",
    "Baia de Fecho de Via": "Road Closure Barrier",
    "Barreira zebrada em fibra de vidro para bloqueio, corte ou delimitação visual ativa de vias.": "Zebra fiberglass barrier for active road blocking, closure, or visual delimitation.",
    "Delineador Curto Meia-Cana": "Short Half-Round Delineator",
    "Delineador Curto Tipo Meia-Cana": "Short Half-Round Delineator",
    "Delineador Curto Tipo Meia-Cana — Detalhes Técnicos": "Short Half-Round Delineator — Technical Details",
    "Barreira Anti-Encadeamento BCL": "BCL Anti-Glare Barrier",
    "Delineador flexível tipo \"BRISA\" ideal para barreiras New Jersey e guardas metálicas.": "Flexible 'BRISA' style delineator ideal for New Jersey barriers and metal guards.",
    "Baia Bidirecional com Lanterna": "Bidirectional Barrier with Lantern",
    "Baias Fixas de Alinhamento": "Fixed Alignment Barriers",
    "Módulo vertical dinâmico de orientação com sinalizador luminoso embutido no topo e base estável. O corpo é moldado em Polietileno (P.E.) composto de alta resistência a impactos.": "Dynamic vertical orientation module with built-in top signal light and stable base. The body is molded in high-impact resistant Polyethylene (P.E.) compound.",
    "Barreira Anti-Encadeamento PE": "PE Anti-Glare Barrier",
    "Baias Fixas de Alinhamento (Unidirecional / Bidirecional)": "Fixed Alignment Barriers (Unidirectional / Bidirectional)",
    "Painéis modulares em Polietileno de alta espessura para fixação definitiva ou temporária no solo. Ideais para sinalização de divergências, curvas perigosas e balizamento geral de trajetórias.": "Modular high-thickness polyethylene panels for permanent or temporary ground mounting. Ideal for divergence signage, dangerous curves, and general path marking.",
    "Barreira Anti-Encadeamento B.C.L.": "B.C.L. Anti-Glare Barrier",
    "Lamelas verticais com desenho proprietário clássico concebidas para anular a projeção de luz encadeante dos faróis em sentidos opostos, minimizando de forma drástica o cansaço visual noturno.": "Vertical slats with a classic proprietary design created to cancel headlight glare from opposing directions, drastically reducing nighttime visual fatigue.",
    "Barreira Anti-Encadeamento PE (Design Reto)": "PE Anti-Glare Barrier (Straight Design)",
    "Lâminas retas de desenho sóbrio e simétrico manufaturadas em polietileno avançado. Sistema modular de fácil instalação diretamente ou por suportes dependendo do separador central.": "Straight blades with a sober, symmetrical design manufactured in advanced polyethylene. Modular system easy to install directly or with supports depending on the central divider.",
    "Lamela Anti-Encadeamento": "Anti-Glare Slat",
    "Lamela Anti-Encadeamento Aerodinâmica": "Aerodynamic Anti-Glare Slat",
    "Gama premium de lâminas aerodinâmicas com topos curvos (Lamela Antiacatamento). Projetadas para otimizar o fluxo de vento através do separador central, mantendo a harmonia estética e funcionalidade.": "Premium range of aerodynamic slats with curved tops (Anti-Glare Slat). Designed to optimize airflow through the central divider while maintaining aesthetic harmony and functionality.",
    "Delineador Comprido J6": "Long J6 Delineator",
    "Delineador Curto Tipo J6": "Short J6 Delineator",
    "Baliza de berma longa desenvolvida segundo as especificações J.A.E. Produzida em Polietileno branco de alta densidade estável a variações climatéricas com faixa preta em PP.": "Long shoulder delineator developed to J.A.E. specifications. Produced in high-density white polyethylene stable under weather variations with a black PP stripe.",
    "Delineador Curto J6": "Short J6 Delineator",
    "Delineador Longo Meia-Cana": "Long Half-Round Delineator",
    "Delineador viário de formato curto para fixação suspensa. Fabricado em polietileno rígido modificado com banda negra e furos adequados para montagem em guardas ou barreiras New Jersey.": "Short road delineator for suspended mounting. Manufactured in modified rigid polyethylene with a black band and holes for mounting on guards or New Jersey barriers.",
    "Delineador Longo ao Solo Tipo Meia-Cana": "Long Ground Half-Round Delineator",
    "Baliza delineadora vertical de solo longa, desenhada sob a tipologia flexível 'BRISA'. O seu corpo côncavo confere-lhe excelente flexibilidade e memória de forma estrutural.": "Long vertical ground delineator designed in the flexible 'BRISA' style. Its concave body provides excellent flexibility and structural shape memory.",
    "Breve Descrição": "Short Description",
    "Especificações Técnicas": "Technical Specifications",
    "Pedir Orçamento Deste Produto": "Request a Quote for This Product",
    "Voltar ao Catálogo": "Back to Catalog",
    "Produto não encontrado": "Product not found",
    "O equipamento solicitado não consta no catálogo ativo.": "The requested equipment is not currently in the active catalog.",
    "Refletores em ABS para Guardas de Segurança — Detalhes Técnicos": "ABS Reflectors for Guards — Technical Details",
    "Nivelador para Guardas de Segurança — Detalhes Técnicos": "Guard Leveler — Technical Details",
    "Baia de Fecho de Via (Barreira) — Detalhes Técnicos": "Road Closure Barrier — Technical Details",
    "Delineador Curto Tipo Meia-Cana — Detalhes Técnicos": "Short Half-Round Delineator — Technical Details",
    "Baia Bidirecional com Lanterna — Detalhes Técnicos": "Bidirectional Barrier with Lantern — Technical Details",
    "Baias Fixas de Alinhamento (Unidirecional / Bidirecional) — Detalhes Técnicos": "Fixed Alignment Barriers (Unidirectional / Bidirectional) — Technical Details",
    "Barreira Anti-Encadeamento B.C.L. — Detalhes Técnicos": "B.C.L. Anti-Glare Barrier — Technical Details",
    "Barreira Anti-Encadeamento PE (Design Reto) — Detalhes Técnicos": "PE Anti-Glare Barrier (Straight Design) — Technical Details",
    "Lamela Anti-Encadeamento Aerodinâmica — Detalhes Técnicos": "Aerodynamic Anti-Glare Slat — Technical Details",
    "Delineador Comprido Tipo J6 — Detalhes Técnicos": "Long J6 Delineator — Technical Details",
    "Delineador Curto Tipo J6 — Detalhes Técnicos": "Short J6 Delineator — Technical Details",
    "Delineador Longo ao Solo Tipo Meia-Cana — Detalhes Técnicos": "Long Ground Half-Round Delineator — Technical Details",
    "Cotação Técnica": "Technical Quote",
    "PEÇA O SEU": "REQUEST YOUR",
    "ORÇAMENTO": "QUOTE",
    "Preencha o formulário detalhado para receber uma proposta personalizada da nossa equipa técnica.": "Fill out the detailed form to receive a personalized proposal from our technical team.",
    "Empresa / Entidade": "Company / Organization",
    "Telefone *": "Phone *",
    "Tipo de Produto / Serviço *": "Product / Service Type *",
    "Selecione uma opção...": "Select an option...",
    "Barreiras de Separação": "Separation Barriers",
    "Sinalização e Cones": "Signaling and Cones",
    "Marcações no Pavimento": "Pavement Markings",
    "Serviços Técnicos / Moldagem": "Technical Services / Molding",
    "Outros Projetos": "Other Projects",
    "Detalhes do Pedido (Quantidades, Local, Prazos) *": "Request Details (Quantities, Location, Deadlines) *",
    "Descreva brevemente as suas necessidades técnicos...": "Briefly describe your technical needs...",
    "Submeter Pedido de Cotação": "Submit Quote Request",
    "Especialização Técnica": "Technical Expertise",
    "SERVIÇOS DE": "SERVICES OF",
    "ENGENHARIA E IMPLEMENTAÇÃO": "ENGINEERING AND IMPLEMENTATION",
    "Soluções completas para infraestruturas críticas, desde o projeto à manutenção no terreno.": "Complete solutions for critical infrastructures, from design to field maintenance.",
    "Planeamento e": "Planning and",
    "Consultoria": "Consulting",
    "Apoiamos municípios e entidades privadas no planeamento estratégico de sinalização rodoviária, garantindo a máxima segurança e conformidade normativa.": "We support municipalities and private entities in strategic road signage planning, ensuring maximum safety and regulatory compliance.",
    "Estudos de impacto e fluxo de tráfego.": "Traffic impact and flow studies.",
    "Projetos de sinalização vertical e horizontal certificados.": "Certified vertical and horizontal signage projects.",
    "Consultoria em segurança passiva e barreiras de proteção.": "Consulting in passive safety and protective barriers.",
    "Solicitar Estudo Técnico": "Request Technical Study",
    "Manutenção e": "Maintenance and",
    "Instalação": "Installation",
    "Equipas especializadas para a instalação e manutenção rigorosa de todos os elementos de segurança rodoviária, assegurando durabilidade e visibilidade.": "Specialized teams for the installation and rigorous maintenance of all road safety elements, ensuring durability and visibility.",
    "Aplicação de marcas rodoviárias com tintas de alta performance.": "Application of road markings with high-performance paints.",
    "Montagem de sistemas de barreiras e sinalização fixa.": "Installation of barrier systems and fixed signaling.",
    "Manutenção preventiva e corretiva de equipamentos.": "Preventive and corrective maintenance of equipment.",
    "Pedir Manutenção": "Request Maintenance",
    "Moldagem por": "Molding by",
    "Injeção": "Injection",
    "Utilizamos tecnologia de ponta para a moldagem personalizada de componentes plásticos técnicos, adaptados às necessidades específicas de cada projeto.": "We use cutting-edge technology for customized molding of technical plastic components, tailored to the specific needs of each project.",
    "Desenvolvimento de moldes à medida.": "Custom mold development.",
    "Produção em larga escala com controlo de qualidade rigoroso.": "Large-scale production with rigorous quality control.",
    "Utilização de polímeros de alta resistência e durabilidade.": "Use of high-strength, durable polymers.",
    "Orçamento de Moldagem": "Molding Quote",
    "Sobre Nós": "About Us",
    "MEIO SÉCULO DE": "HALF A CENTURY OF",
    "ENGENHARIA NACIONAL": "NATIONAL ENGINEERING",
    "Fundada em 1973, a Brochado & Castro, Lda. consolidou-se como uma referência em Portugal no setor de moldagem de plásticos e engenharia técnica. Com sede em Matosinhos, combinamos tradição industrial com as mais avançadas tecnologias de produção.": "Founded in 1973, Brochado & Castro, Lda. became a reference in Portugal in plastic molding and technical engineering. Based in Matosinhos, we combine industrial tradition with the most advanced production technologies.",
    "Unidade Industrial Certificada": "Certified Industrial Unit",
    "Anos de\nLiderança": "Years of\nLeadership",
    "Qualidade Certificada": "Certified Quality",
    "Produção rigorosa seguindo as normas ISO 9001 e normas CE.": "Rigorous production following ISO 9001 and CE standards.",
    "Inovação Rodoviária": "Road Innovation",
    "Desenvolvimento constante de novos artigos para a segurança nas estradas.": "Continuous development of new products for road safety.",
    "Principais" : "Main",
    "Sem texto correspondente": "No matching text"
  };

  // Additional translations for card specs, hero and form placeholders
  Object.assign(TRANSLATIONS_EN, {
    "Segurança Rodoviária · Desde 1973": "Road Safety · Since 1973",
    "Fabricação robusta de componentes plásticos e artigos para infraestruturas de transporte em Matosinhos.": "Robust manufacturing of plastic components and products for transport infrastructure in Matosinhos.",
    "Ver Produtos": "View Products",
    "Ver Produto": "View Product",
    "Ver Detalhes": "View Details",

    "Plástico ABS de alta resistência": "High-strength ABS plastic",
    "Três cores de reflexão": "Three reflector colors",
    "Aço com galvanização integral": "Steel with full galvanization",
    "Furação padrão de alta precisão": "High-precision standard drilling",
    "Fibra de vidro aditivada contra raios U.V.": "Fiberglass with UV-resistant additives",
    "Disponível em vários comprimentos": "Available in multiple lengths",
    "Refletor GUBELA integrado": "Integrated GUBELA reflector",
    "Fixação por ferro galvanizado": "Galvanized iron mounting",
    "Material P.E. composto robusto": "Robust P.E. compound material",
    "Base disponível em 3 cores": "Base available in 3 colors",
    "Dimensões de 1200x300 mm": "Dimensions 1200x300 mm",
    "Filmes retrorefletores de alto contraste": "High-contrast retroreflective films",
    "Elimina a fadiga visual noturna": "Eliminates nighttime visual fatigue",
    "Para betão ou guardas metálicas": "For concrete or metal guards",
    "Instalação rápida e adaptável": "Quick and adaptable installation",
    "Alturas até 1200 mm": "Heights up to 1200 mm",
    "Polietileno composto premium": "Premium polyethylene composite",
    "Excelente comportamento ao vento": "Excellent wind performance",
    "Refletor GUBELA retangular": "GUBELA rectangular reflector",
    "Opção de refletores circulares no verso": "Option for circular reflectors on reverse",
    "Polietileno branco com proteção U.V.": "White polyethylene with UV protection",
    "Baliza de berma longa desenvolvida segundo as especificações J.A.E. Produzida em Polietileno branco de alta densidade estável a variações climatéricas com faixa preta em PP.": "Long shoulder delineator developed according to J.A.E. specifications. Produced in high-density white polyethylene stable under weather variations with a black PP stripe.",
    "Delineador viário de formato curto para fixação suspensa. Fabricado em polietileno rígido modificado com banda negra e furos adequados para montagem em guardas ou barreiras New Jersey.": "Short road delineator for suspended mounting. Manufactured in modified rigid polyethylene with a black band and holes suitable for mounting on guards or New Jersey barriers.",
    "Baliza delineadora vertical de solo longa, desenhada sob a tipologia flexível 'BRISA'. O seu corpo côncavo confere-lhe excelente flexibilidade e memória de forma estrutural.": "Long vertical ground delineator designed in the flexible 'BRISA' style. Its concave body provides excellent flexibility and structural shape memory.",
    "Efeito opcional bidirecional": "Optional bidirectional effect",
    "Faixa moldada a preto em PP": "Black molded PP stripe",
    "Refletor de alta visibilidade 80x120mm": "High-visibility reflector 80x120 mm",

    "Fabricado em plástico ABS estrutural de alto impacto. Desenvolvido de raiz com furação e curvatura adequadas para aplicação mecânica direta em guardas e rails metálicos de segurança rodoviária.": "Manufactured in high-impact structural ABS plastic. Developed from scratch with proper drilling and curvature for direct mechanical application to metal safety guards and rails.",
    "Elemento de suporte estrutural pesado inteiramente zincado/galvanizado por imersão a quente. Apresenta furação milimétrica padrão ajustável para acoplamento e fixação robusta em prumos de modelo U.": "Heavy structural support element entirely hot-dip zinc-coated/galvanized. It features standard adjustable millimetric drilling for coupling and robust fastening on U-model posts.",
    "Barreira de corte de tráfego zebrada de alta visibilidade. Fabricada em compósito de fibra de vidro com resinas protetoras e tintas especiais estabilizadas contra raios ultravioleta (U.V.), prevenindo o desgaste da cor.": "High-visibility zebra traffic-cut barrier. Manufactured in fiberglass composite with protective resins and special UV-stabilized paints, preventing color fading.",
    "Baliza delineadora flexível de formato meia-cana (Nota: tipo 'BRISA'). Construída em Polipropileno (PP) aditivado na cor branca pura. Integra uma faixa preta texturizada fundida com o próprio corpo do delineador.": "Flexible half-round delineator marker (Note: 'BRISA' type). Constructed in white-additive polypropylene (PP). It integrates a textured black stripe fused with the delineator body.",
    "Módulo vertical dinâmico de orientação com sinalizador luminoso embutido no topo e base estável. O corpo é moldado em Polietileno (P.E.) composto de alta resistência a impactos.": "Dynamic vertical orientation module with a built-in top signal light and stable base. The body is molded in high-impact resistant polyethylene (P.E.) compound.",
    "Painéis modulares em Polietileno de alta espessura para fixação definitiva ou temporária no solo. Ideais para sinalização de divergências, curvas perigosas e balizamento geral de trajetórias.": "High-thickness polyethylene modular panels for permanent or temporary ground mounting. Ideal for divergence signage, dangerous curves, and general path marking.",
    "Lamelas verticais com desenho proprietário clássico concebidas para anular a projeção de luz encadeante dos faróis em sentidos opostos, minimizando de forma drástica o cansaço visual noturno.": "Vertical slats with a classic proprietary design intended to neutralize headlight glare from opposite directions, drastically reducing nighttime visual fatigue.",
    "Lâminas retas de desenho sóbrio e simétrico manufaturadas em polietileno avançado. Sistema modular de fácil instalação diretamente ou por suportes dependendo do separador central.": "Straight blades with a sober, symmetrical design manufactured in advanced polyethylene. Modular system easy to install directly or with supports depending on the central divider.",
    "Gama premium de lâminas aerodinâmicas com topos curvos (Lamela Antiacatamento). Projetadas para otimizar o fluxo de vento através do separador central, mantendo a harmonia estética e funcionalidade.": "Premium range of aerodynamic blades with curved tops (Anti-Glare Slat). Designed to optimize airflow through the central divider while maintaining aesthetic harmony and functionality.",
    "Detalhes Técnicos": "Technical Details",
    "Voltar ao Catálogo de Produtos": "Back to Product Catalog",
    "ORÇAMENTO": "QUOTE",
    "Material Base": "Base Material",
    "Plástico ABS de Alta Resistência": "High-strength ABS plastic",
    "Cores do Refletor": "Reflector Colors",
    "Vermelho, Branco e Amarelo": "Red, White and Yellow",
    "Aplicação": "Application",
    "Rails de Segurança / Guardas Rodoviárias": "Safety Rails / Road Guards",
    "Ótica": "Optics",
    "Prismática Retrorefletora de alta performance": "High-performance retroreflective prism optics",
    "Acabamento": "Finish",
    "Aço Inteiramente Galvanizado": "Fully galvanized steel",
    "Compatibilidade": "Compatibility",
    "Prumos Viários em U": "U-shaped road posts",
    "Medidas Ref.ª 108": "Dimensions Ref.ª 108",
    "Medidas Ref.ª 109": "Dimensions Ref.ª 109",
    "Fibra de Vidro Composta": "Composite fiberglass",
    "Padrão Visual": "Visual Pattern",
    "Zebrado Vermelho e Branco (Tinta Anti-U.V.)": "Red and White Zebra Pattern (UV-resistant paint)",
    "Comp. Ref.ª 200": "Dimensions Ref.ª 200",
    "Comp. Ref.ª 200-A": "Dimensions Ref.ª 200-A",
    "Material Corpo": "Body Material",
    "PP Composto Branco (Resistente a U.V.)": "White Composite PP (UV-resistant)",
    "Marca do Refletor": "Reflector Brand",
    "Dimensões Ótica": "Optic Dimensions",
    "Acessório Incluído": "Included Accessory",
    "Ferro Galvanizado para as respetivas aplicações": "Galvanized iron for the relevant applications",
    "Estrutura Principal": "Main Structure",
    "P.E. Composto de Alta Flexibilidade": "High-flexibility polyethylene compound",
    "Padrão de Reflexão": "Reflection Pattern",
    "Preto com Amarelo / Branco com Vermelho": "Black with Yellow / White with Red",
    "Cores da Base": "Base Colors",
    "Preta, Amarela ou Laranja Injetada": "Black, Yellow or Injected Orange",
    "Iluminação": "Lighting",
    "Lanterna Superior de Sinalização Integrada": "Integrated top signal lantern",
    "Dimensões Totais": "Overall Dimensions",
    "Polietileno Composto Industrial": "Industrial composite polyethylene",
    "Ref.ª 201 (Unidirecional)": "Ref.ª 201 (Unidirectional)",
    "Preta com reflexão em Amarelo": "Black with yellow reflection",
    "Ref.ª 202 (Bidirecional)": "Ref.ª 202 (Bidirectional)",
    "Branca com reflexão em Vermelho": "White with red reflection",
    "Composição": "Composition",
    "Polipropileno (P.P.) e Fibra de Vidro": "Polypropylene (P.P.) and fiberglass",
    "Dimensões Unitárias": "Unit Dimensions",
    "Altura: 600 mm | Largura Máxima: 125 mm": "Height: 600 mm | Maximum Width: 125 mm",
    "Peso Técnico": "Technical Weight",
    "Aproximadamente 675 g por unidade": "Approximately 675 g per unit",
    "Aplicações": "Applications",
    "Ref.113 (New Jersey) / Ref.114 (Guardas de Segurança)": "Ref.113 (New Jersey) / Ref.114 (Safety Guards)",
    "Polietileno Composto Técnico": "Technical composite polyethylene",
    "Guardas de Segurança": "Safety Guards",
    "Barreiras New Jersey": "New Jersey Barriers",
    "Design Geométrico": "Geometric Design",
    "Perfil Arredondado / Diferenciação Estética": "Rounded profile / aesthetic differentiation",
    "Polietileno Composto Premium": "Premium composite polyethylene",
    "Material do Corpo": "Body Material",
    "P.E. Composto com Filtros Solares U.V.": "Polyethylene compound with UV solar filters",
    "Ótica Refletora": "Reflector Optic",
    "Refletor GUBELA (40x180 mm ou 50x180 mm)": "GUBELA Reflector (40x180 mm or 50x180 mm)",
    "Efeito Bidirecional": "Bidirectional Effect",
    "Opção de 2 refletores circulares Ø 60 mm no verso": "Option of 2 circular Ø 60 mm reflectors on the reverse",
    "Suporte Base": "Base Support",
    "Inclui base plástica em P.E. composto": "Includes plastic base in polyethylene compound",
    "Inclui ferro galvanizado para respetivas aplicações": "Includes galvanized iron for the relevant applications",
    "Fixação Estrutural": "Structural Fastening",
    "Ótica Principal": "Main Optics",
    "Verso (Opcional)": "Reverse (Optional)",
    "2 refletores circulares de Ø 60 mm na outra face": "2 circular Ø 60 mm reflectors on the other face",
    "Resistência": "Resistance",
    "Material Branco aditivado contra radiação U.V.": "White material treated against UV radiation",
    "Pronto para fixação e furação direta ao solo": "Ready for direct ground mounting and drilling",
    "Geometria": "Geometry",
    "Tipo Meia-Cana / Perfil Alongado": "Half-round type / elongated profile",
    "Material Principal": "Main Material",
    "P.P. Composto Branco com proteção U.V.": "White PP compound with UV protection",
    "Elemento Ótico": "Optic Element",
    "Instalação": "Installation",

    "Ex: João Silva": "Ex: John Smith",
    "Nome da sua organização": "Name of your organization",
    "email@empresa.pt": "email@company.com",
    "+351 --- --- ---": "+351 --- --- ---",
    "Descreva brevemente as suas necessidades técnicos...": "Briefly describe your technical needs...",
    "Segunda – Sexta": "Monday – Friday",
    "Sábado e Domingo": "Saturday & Sunday"
  });

  const KEYS_SORTED = Object.keys(TRANSLATIONS_EN).sort((a,b) => b.length - a.length);
  const NORMALIZED_MAP = (function(){
    const m = {};
    function normalizeKey(s){ return s ? String(s).trim().replace(/\s+/g,' ') : '' }
    Object.keys(TRANSLATIONS_EN).forEach(k => m[normalizeKey(k)] = TRANSLATIONS_EN[k]);
    return m;
  })();

  const PAGE_TITLE_MAP = {
    "index.html": { pt: "Brochado & Castro — Início & Contacto", en: "Brochado & Castro — Home & Contact" },
    "produtos.html": { pt: "Brochado & Castro — Produtos", en: "Brochado & Castro — Products" },
    "servicos.html": { pt: "Brochado & Castro — Serviços", en: "Brochado & Castro — Services" },
    "empresa.html": { pt: "Brochado & Castro — Empresa", en: "Brochado & Castro — Company" },
    "orcamento.html": { pt: "Brochado & Castro — Pedir Orçamento", en: "Brochado & Castro — Request a Quote" },
    "produto-detalhe.html": { pt: "Especificações do Produto — Brochado & Castro", en: "Product Specifications — Brochado & Castro" }
  };

  let translatableTextNodes = [];
  let translatableElements = [];
  let currentLang = 'pt';

  function normalizeKey(s){ return s ? String(s).trim().replace(/\s+/g,' ') : '' }

  function getTranslation(text, lang) {
    if (lang !== 'en') return text;
    if (!text) return text;

    // direct exact match
    if (TRANSLATIONS_EN[text]) return TRANSLATIONS_EN[text];

    // normalized exact match
    const nk = normalizeKey(text);
    if (NORMALIZED_MAP[nk]) return NORMALIZED_MAP[nk];

    // try partial/contains matches (longer keys first)
    for (let i = 0; i < KEYS_SORTED.length; i++) {
      const key = KEYS_SORTED[i];
      const nkey = normalizeKey(key);
      if (!nkey) continue;
      if (nk.indexOf(nkey) !== -1) {
        return TRANSLATIONS_EN[key];
      }
    }

    return text;
  }

  function storeOriginalText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      if (!text) return;
      if (!node.__origText) node.__origText = node.textContent;
      translatableTextNodes.push(node);
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const attrs = ['placeholder', 'title', 'alt', 'value'];
      attrs.forEach((attr) => {
        if (node.hasAttribute(attr)) {
          node.__origAttr = node.__origAttr || {};
          if (!Object.prototype.hasOwnProperty.call(node.__origAttr, attr)) {
            node.__origAttr[attr] = node.getAttribute(attr);
          }
          translatableElements.push(node);
        }
      });
    }

    node.childNodes.forEach(storeOriginalText);
  }

  function collectTranslatables() {
    translatableTextNodes = [];
    translatableElements = [];
    storeOriginalText(document.body);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    translatableTextNodes.forEach((node) => {
      if (!node.__origText) return;
      const original = node.__origText;
      node.textContent = getTranslation(original, lang);
    });

    translatableElements.forEach((el) => {
      if (!el.__origAttr) return;
      Object.keys(el.__origAttr).forEach((attr) => {
        el.setAttribute(attr, getTranslation(el.__origAttr[attr], lang));
      });
    });

    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === 'produto-detalhe.html') {
      document.title = getTranslation(document.title, lang);
      return;
    }

    const titleMap = PAGE_TITLE_MAP[page];
    if (titleMap) {
      document.title = lang === 'en' ? titleMap.en : titleMap.pt;
    }
  }

  function initLanguageSwitcher() {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    currentLang = savedLang === 'en' ? 'en' : 'pt';

    const langSelect = document.getElementById('lang-select');
    const mobileLangSelect = document.getElementById('mobile-lang-select');

    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener('change', (event) => {
        const newLang = event.target.value === 'en' ? 'en' : 'pt';
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
        applyLanguage(newLang);
        if (mobileLangSelect) mobileLangSelect.value = newLang;
      });
    }

    if (mobileLangSelect) {
      mobileLangSelect.value = currentLang;
      mobileLangSelect.addEventListener('change', (event) => {
        const newLang = event.target.value === 'en' ? 'en' : 'pt';
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
        applyLanguage(newLang);
        if (langSelect) langSelect.value = newLang;
      });
    }

    applyLanguage(currentLang);
  }

  function refreshTranslations() {
    collectTranslatables();
    applyLanguage(currentLang);
  }

  /* ── LOGICA DE REDIRECIONAMENTO E CARREGAMENTO DA PAGINA DE DETALHE ── */
  const detailContainer = document.getElementById('dynamic-product-content');
  if (detailContainer) {
    // Captura o "?id=X" do link/URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    const produto = CATALOGO_PRODUTOS[produtoId];

    if (produto) {
      // Altera o título da janela do navegador (usa tradução se disponível)
      document.title = `${getTranslation(produto.titulo, currentLang)} — ${getTranslation('Detalhes Técnicos', currentLang)}`;

      // Monta as linhas da tabela de especificações (traduzindo chaves e valores)
      let tabelaHTML = '';
      produto.tabela.forEach(linha => {
        const chave = getTranslation(linha[0], currentLang);
        const valor = getTranslation(linha[1], currentLang);
        tabelaHTML += `<tr><th>${chave}</th><td>${valor}</td></tr>`;
      });

      // Injeta a estrutura inteira na página estilo e-commerce (com traduções)
      detailContainer.innerHTML = `
        <div class="detail-grid">
          <div class="detail-media">
            <div class="detail-img-card">
              <img src="${produto.imagem}" alt="${getTranslation(produto.titulo, currentLang)}" class="detail-main-img">
            </div>
          </div>
          <div class="detail-info">
            <span class="detail-ref-badge">${getTranslation(produto.ref, currentLang)}</span>
            <h1 class="detail-main-title">${getTranslation(produto.titulo, currentLang)}</h1>
            
            <div class="detail-block">
              <h3 class="detail-sec-title">${getTranslation('Breve Descrição', currentLang)}</h3>
              <p class="detail-text-desc">${getTranslation(produto.descricao, currentLang)}</p>
            </div>

            <div class="detail-block">
              <h3 class="detail-sec-title">${getTranslation('Especificações Técnicas', currentLang)}</h3>
              <table class="detail-data-table">
                <tbody>${tabelaHTML}</tbody>
              </table>
            </div>

            <div class="detail-actions">
              <a href="orcamento.html?ref=${encodeURIComponent(produto.ref)}" class="detail-cta-btn">${getTranslation('Pedir Orçamento Deste Produto', currentLang)}</a>
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

  refreshTranslations();
  initLanguageSwitcher();

})();