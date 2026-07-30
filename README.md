# AprovaSP — Plataforma de estudos para ENEM e vestibulares

Projeto React + Vite + Tailwind + Supabase. O banco de dados já foi criado e
está funcionando (projeto Supabase `aprova-sp-vestibulares`).

## O que já está pronto

- ✅ Banco de dados completo no Supabase (17 tabelas: perfis, matérias,
  resumos, questões, simulados, flashcards, metas, XP, conquistas,
  favoritos, notificações).
- ✅ Row Level Security (RLS) configurado em todas as tabelas.
- ✅ Cadastro, login, logout e recuperação de senha usando Supabase Auth.
- ✅ Trigger automático: ao cadastrar, o perfil (nome, telefone) é criado
  sozinho no banco.
- ✅ Painel, resumos, flashcards, simulados e perfil já conectados aos
  dados reais (ainda com pouco conteúdo, veja o passo 4).
- ✅ Modo claro/escuro, visual com gradientes roxo→azul, glassmorphism.

## Passo a passo para rodar você mesmo

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
Copie `.env.example` para `.env` — as chaves do seu projeto Supabase já
estão preenchidas nesse arquivo de exemplo, então só renomear já funciona:
```bash
cp .env.example .env
```

### 3. Rodar localmente
```bash
npm run dev
```
Abra `http://localhost:5173`.

### 4. ⚠️ Configuração que só você pode fazer: e-mail de confirmação
Por padrão, o Supabase envia e-mails de confirmação com um domínio de teste
que tem limite de envios e cai em spam. Antes de ir para produção:
1. No painel do Supabase, vá em **Authentication → Emails**.
2. Personalize o template de "Confirm signup" (pode usar nossa identidade
   visual — texto sugerido: "Confirme sua conta AprovaSP").
3. Em **Project Settings → Auth → SMTP Settings**, configure um provedor de
   e-mail próprio (ex: Resend, SendGrid, Amazon SES) para não depender do
   limite gratuito do Supabase.

### 5. ⚠️ Configuração opcional: confirmação por SMS/telefone
O cadastro já pede telefone, mas hoje ele é apenas guardado no perfil — a
confirmação usada é a de e-mail. Para confirmar por SMS de verdade:
1. Crie uma conta em um provedor de SMS (Twilio é o mais usado, tem custo
   por mensagem).
2. No painel do Supabase, vá em **Authentication → Providers → Phone** e
   cole as credenciais do Twilio.
3. Me avise quando tiver feito isso que eu troco o fluxo de cadastro para
   usar `supabase.auth.signInWithOtp({ phone })` em vez de e-mail.

### 6. Subir para o GitHub
```bash
git init
git add .
git commit -m "Primeira versão da plataforma AprovaSP"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```
⚠️ **Importante**: o arquivo `.env` está no `.gitignore` e não será
enviado — isso é proposital, para não vazar suas chaves. Ao fazer deploy
(passo 7), você configura as variáveis de ambiente direto na plataforma de
hospedagem.

### 7. Colocar no ar (deploy)
Recomendo a **Vercel** (gratuita para esse uso):
1. Crie conta em vercel.com e conecte com seu GitHub.
2. Importe o repositório que você acabou de criar.
3. Em "Environment Variables", adicione `VITE_SUPABASE_URL` e
   `VITE_SUPABASE_ANON_KEY` (os mesmos valores do seu `.env`).
4. Clique em Deploy.

### 8. Popular o conteúdo (resumos, questões, simulados)
As tabelas já existem mas estão praticamente vazias — só cadastrei as 8
matérias e as conquistas iniciais para você ver a tela funcionando. Para
o conteúdo de verdade, duas opções:

**Manual (rápido, mas trabalhoso):** inserir direto no editor de tabelas
do Supabase (Table Editor), sem precisar mexer em código.

**Automação com IA (o que você pediu):** posso criar uma rotina que:
1. Busca conteúdo em fontes oficiais (site do INEP/ENEM, editais de
   Unicamp/Fuvest/PUC-SP).
2. Usa IA para organizar em resumos e questões comentadas.
3. Insere automaticamente nas tabelas `resumos` e `questoes` — aparece no
   site sem você tocar em código.

Isso normalmente roda como uma **Supabase Edge Function agendada** (roda
sozinha todo dia, por exemplo). Antes de eu construir essa parte, preciso
que você me diga: quer que eu comece com uma matéria específica primeiro
(ex: Matemática) para você validar a qualidade do conteúdo gerado antes de
eu automatizar para todas?

## Estrutura de pastas
```
src/
  pages/        → cada tela do site
  components/    → peças reutilizáveis (Navbar, botões, etc.)
  context/      → autenticação e tema (claro/escuro)
  lib/          → conexão com Supabase
  styles/       → CSS global e configuração visual
```
