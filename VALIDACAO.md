# Revisão da implementação

Validação da versão simplificada realizada em 6 de outubro de 2026, com Chromium (Chrome) via Playwright.

- Build de produção e verificação estrita do TypeScript concluídos.
- Larguras verificadas: 320, 375, 390, 430, 768, 1024, 1440 e 1920 px. Sem overflow horizontal.
- Texto ampliado para 200% em 320 px: sem overflow horizontal.
- Menu mobile: abertura, fechamento, Escape, navegação por âncoras, ciclo de foco e retorno do foco ao botão.
- Conteúdo: quatro seções no conteúdo principal e um rodapé; apenas um botão no hero.
- Equipe: cinco integrantes, dez links sociais e somente uma especialidade definida exibida.
- Links externos: URLs conferidas com o briefing, nova aba e atributos `noopener noreferrer`. A disponibilidade dos serviços externos não é garantida pelo site.
- Âncoras internas: todos os destinos existem.
- Logos HOP e PLOUTY e foto de Marcris: carregamento confirmado e enquadramento com `object-fit: contain`.
- Falha de imagens simulada: nomes dos dois projetos e iniciais dos cinco integrantes continuam visíveis.
- Remoção confirmada de dashboard, progresso, estatísticas e seções Sobre/Contato.
- `prefers-reduced-motion` respeitado nas animações.
- Axe: nenhuma violação automática WCAG A/AA encontrada nas verificações mobile e desktop. Isso não substitui uma auditoria manual completa.
- Console do navegador: sem erros na navegação verificada.

O script e o relatório desta versão ficam em `.qa/minimal.mjs` e `.qa/minimal-report.json`. A pasta `.qa/` é local, ignorada pelo Git e separada das dependências da aplicação. Os scripts antigos dessa pasta correspondem à versão anterior.
