# Portfólio — Iann Victor

Portfólio estático com projetos desenvolvidos para solucionar desafios reais. Não exige instalação ou build.

## Visualizar

Abra `index.html` no navegador ou execute um servidor local:

```powershell
python -m http.server 5500
```

Depois acesse `http://localhost:5500`.

## Publicar no GitHub Pages

Envie os arquivos da raiz para um repositório e, em **Settings → Pages**, selecione a branch principal como fonte de publicação.

Os dados e links dos projetos ficam no objeto `projects`, no início de `script.js`. Os textos exibidos nos cards ficam em `index.html`.

As capturas reais estão na seção **Projetos em tela**. Para trocar uma imagem, substitua o arquivo correspondente na raiz mantendo o mesmo nome ou altere os atributos `src` e `data-image` em `index.html`.
