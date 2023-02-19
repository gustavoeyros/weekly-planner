# Weekly Planner - Terceiro projeto do Programa de Bolsas da Compass.UOL

## Como preparar o ambiente?

Antes de tudo, é necessário ter o NodeJS e o NPM instalado em seu computador. Basta instalar através desse <a href="https://nodejs.org/en/">link</a>.

---

Abra o terminal no diretório em questão e execute o seguinte comando:

```
npm install
```

Para rodar a aplicação em seu computador, utilize o comando:

```
npm run dev
```

Para rodar os testes unitários, utilize o comando:

```
npm test
```

# Navegando pela aplicação

## Tela de cadastro

<img src="./src/assets/readme/register.png" />

## Tela de login

<img src="./src/assets/readme/login.png" />

## Agenda

<img src="./src/assets/readme/planner.png" />

## Agenda com dados

<img src="./src/assets/readme/plannerWithData.png" />

## Funcionalidades

<ul>
    <li>Redirecionamento para o site da Compass em todas as logos.</li>
    <li>Validação de inputs do registro e login com TS + RegEx.</li>
    <li>Envio dos dados do usuário no registro para API.</li>
    <li>Login através do email + senha que será buscado na API. </li>
    <li>Rota de dashboard protegida com base no token gerado na API através da página de login.</li>
    <li>Horário e data atualizado no dashboard.</li>
    <li>Temperatura atual através do consumo da Weather API, também há uma validação caso a localização não exista.</li>
    <li>Validação dos inputs para adicionar a task.</li>
    <li>Cor do card dinâmico, baseado no dia da semana selecionado.</li>
    <li>Verificação de tasks em conflito (dia e horário iguais) com sinalização visual.</li>
    <li>Cards filtrados através do tempo selecionado no topo.</li>
    <li>Tratamento de erros da API, sinalizados por modal.</li>
    <li>Testes unitários com Vitest.</li>
</ul>

## Tecnologias

<ul>
<li>HTML</li>
<li>CSS</li>
<li>TypeScript</li>
<Li>React</li>
<li>Styled-Components</li>
<li>Vitest</li>
</ul>
