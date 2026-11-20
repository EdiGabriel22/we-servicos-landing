# WE Serviços Gerais — Landing Page

Landing page da WE Serviços Gerais (logística e apoio operacional), feita em [Astro](https://astro.build) a partir do layout do Figma.

**Site:** https://edigabriel22.github.io/we-servicos-landing/

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321/we-servicos-landing/
npm run build    # gera o site estático em dist/
```

## Estrutura

- `src/pages/index.astro` — monta a página
- `src/components/` — uma seção por componente (Header, Hero, Serviços, Diferenciais, Sobre, Como Funciona, Depoimentos, CTA, Contato, Footer)
- `src/styles/global.css` — tokens de cor/tipografia e estilos base
- `src/lib.ts` — helper de caminho (base path do GitHub Pages) e número do WhatsApp
- `public/` — imagens e ícones exportados do Figma

## Personalizar

- **WhatsApp:** altere `WHATSAPP_NUMBER` em `src/lib.ts`. O formulário de orçamento abre o WhatsApp com a mensagem preenchida.
- **Telefone / e-mail:** em `src/components/Contato.astro` e `src/components/Footer.astro`.
- **Redes sociais:** links em `src/components/Footer.astro`.

## Deploy

Todo push na `main` publica no GitHub Pages pelo workflow `.github/workflows/deploy.yml`.
