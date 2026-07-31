// Static export has no server/middleware, so the bare "/" URL needs a plain
// HTML redirect to the default locale. Runs after `next build`.
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DEFAULT_LOCALE = 'sv';
const target = `/${DEFAULT_LOCALE}/`;
const outFile = join(process.cwd(), 'out', 'index.html');

const html = `<!doctype html>
<html lang="${DEFAULT_LOCALE}">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${target}" />
    <meta name="robots" content="noindex" />
    <title>Sasa Ristic</title>
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <a href="${target}">Fortsätt till sidan / Continue to the site</a>
  </body>
</html>
`;

await writeFile(outFile, html, 'utf8');
console.log(`Wrote root redirect -> ${target}`);
