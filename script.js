const projects = {
  rh: {
    number: "01 / 05", category: "Gestão de pessoas", title: "RH Control",
    description: "Um centro de controle para transformar registros dispersos de RH em informação clara e acionável.",
    challenge: "Organizar colaboradores, faltas, atestados, advertências, suspensões e vencimentos de ASO sem perder o histórico de cada pessoa.",
    solution: "Aplicação full stack com autenticação, dashboards, filtros, calendário, anexos, auditoria, exclusão lógica e exportação de dados.",
    tags: ["React", "Tailwind", "FastAPI", "PostgreSQL"], url: "https://github.com/iannvictor1/rh-control"
  },
  bonus: {
    number: "02 / 05", category: "Performance", title: "Bonificação",
    description: "Gestão transparente de metas, frequência e bonificações para equipes operacionais.",
    challenge: "Substituir cálculos manuais e planilhas isoladas por um processo centralizado, rastreável e fácil de conferir.",
    solution: "Sistema com cadastros, lançamentos semanais, regras de negócio configuráveis, dashboard, frequência, fechamento e exportação para Excel.",
    tags: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL"], url: "https://github.com/iannvictor1/sistema"
  },
  peso: {
    number: "03 / 05", category: "Automação industrial", title: "PesoCtrl",
    description: "Um fluxo automatizado e resiliente para controlar pesagens e pallets em tempo real.",
    challenge: "Capturar dados gerados por múltiplas impressoras de etiquetas, evitando digitação repetitiva e erros durante a operação.",
    solution: "Monitoramento de arquivos com filas seguras, extração por padrões, controle independente de impressoras e geração automática de planilhas e históricos.",
    tags: ["Python", "Streamlit", "Pandas", "Watchdog"], url: "https://github.com/iannvictor1/pesoctrl"
  },
  produtos: {
    number: "04 / 05", category: "Catálogo & vendas", title: "Catálogo de Produtos",
    description: "Da busca pelo produto à ficha comercial completa, com fotos e preços, em poucos cliques.",
    challenge: "Acelerar a montagem de apresentações comerciais e reduzir a procura manual de imagens, códigos e informações dos produtos.",
    solution: "Catálogo pesquisável com perfis de acesso, indexação automática de fotos e geração de arquivo Excel com resumo e ficha individual por produto.",
    tags: ["React", "FastAPI", "OpenPyXL", "Pillow"], url: "https://github.com/iannvictor1/Preenchedor_de_planilha_produtos"
  },
  recibos: {
    number: "05 / 05", category: "Financeiro", title: "Gestor de Recibos",
    description: "Documentos financeiros padronizados, organizados e prontos para compartilhar.",
    challenge: "Tornar a emissão de recibos mais rápida e manter um histórico pesquisável, sem depender de documentos editados manualmente.",
    solution: "Formulário guiado, histórico com filtros, edição e exclusão, geração de PDF, exportação Excel e compartilhamento por WhatsApp.",
    tags: ["React", "Django REST", "PostgreSQL", "PDF"], url: "https://github.com/iannvictor1/recibos_sistema"
  }
};

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".site-header nav a").forEach((link) => link.addEventListener("click", () => {
  header.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const modal = document.querySelector(".project-modal");
document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-link").addEventListener("click", () => {
    const project = projects[card.dataset.project];
    modal.querySelector(".modal-number").textContent = project.number;
    modal.querySelector(".modal-category").textContent = project.category;
    modal.querySelector("#modal-title").textContent = project.title;
    modal.querySelector(".modal-description").textContent = project.description;
    modal.querySelector(".modal-challenge").textContent = project.challenge;
    modal.querySelector(".modal-solution").textContent = project.solution;
    modal.querySelector(".modal-tags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    modal.querySelector(".modal-github").href = project.url;
    modal.showModal();
  });
});
modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
document.querySelectorAll(".gallery-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.querySelector(".lightbox-caption > span").textContent = String(index + 1).padStart(2, "0");
    lightbox.querySelector("#lightbox-title").textContent = item.dataset.title;
    lightbox.querySelector(".lightbox-caption p").textContent = item.dataset.caption;
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  const rect = lightbox.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) lightbox.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
