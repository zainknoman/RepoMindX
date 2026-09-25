export const demoFiles=[
{path:'src/main.js',name:'main.js',size:210,language:'JavaScript',text:"import { createApp } from './app.js';\ncreateApp();"},
{path:'src/app.js',name:'app.js',size:420,language:'JavaScript',text:"import { router } from './router.js';\nimport { health } from './health.js';\nexport function createApp() {\n  router.get('/health', health);\n  return router;\n}"},
{path:'src/router.js',name:'router.js',size:310,language:'JavaScript',text:"export const router = {\n  get(path, handler) { return { path, handler }; },\n  post(path, handler) { return { path, handler }; }\n};"},
{path:'src/health.js',name:'health.js',size:180,language:'JavaScript',text:"export function health() { return { status: 'ok' }; }"},
{path:'README.md',name:'README.md',size:260,language:'Markdown',text:"# Demo Service\n\nA small RepoMindX demo repository.\n\n## API\n\nGET /health"}];