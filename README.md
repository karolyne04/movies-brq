# MoviesBRQ

Aplicativo móvel construído com **React Native** e **Expo** para descobrir e navegar por filmes.  
Este projeto utiliza uma pilha de tecnologia moderna para proporcionar uma experiência fluida e multiplataforma, com gerenciamento de estado via **Zustand** e integração com API usando **Axios**.

---

##  Principais Recursos
- **Descoberta de Filmes** → Navegue por uma seleção de filmes obtidos da API.
- **Navegação Intuitiva** → Implementada com **React Navigation**.
- **Gerenciamento de Estado** → Simples e eficiente com **Zustand**.
- **Fontes Personalizadas** → Google Fonts (Nunito e Roboto).
- **O aplicativo utiliza o pacote [`expo-network`](https://docs.expo.dev/versions/latest/sdk/network/) para verificar se o usuário possui conexão com a internet, garantindo uma experiência melhor em ambientes offline.
- **Qualidade do Código** → Linting e formatação padronizados com **Biome**.

---

## 🛠️ Tecnologias Utilizadas
- **Framework**: React Native + Expo  
- **Linguagem**: TypeScript  
- **Estado Global**: Zustand  
- **Cliente HTTP**: Axios  
- **Navegação**: React Navigation  
- **Linting & Formatação**: Biome  

---

## 📦 Primeiros Passos

### 🔹 Pré-requisitos
- [Node.js](https://nodejs.org/) (>= 18)  
- [Yarn](https://yarnpkg.com/)  
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (`npm install -g expo-cli`)  

➡️ Para rodar **nativamente** no Android/iOS:  
- **Android**: [Android Studio](https://developer.android.com/studio) (SDK + Emulator configurado) ou dispositivo físico com depuração USB.  
- **iOS**: [Xcode](https://developer.apple.com/xcode/) (somente em macOS).  

---

### 🔹 Instalação
```bash
git clone git@github.com:karolyne04/movies-brq.git
cd movies-brq
yarn


Crie um arquivo .env na raiz do seu projeto e adicione a sua chave de API para o banco de dados de filmes.

# Substitua pela sua chave de API real
EXPO_PUBLIC_MOVIE_API_KEY=your_api_key_here

Scripts Disponíveis

yarn start → inicia o servidor Expo (modo recomendado para rodar no Expo Go).

yarn android → compila e executa o app nativamente no Android (requer Android Studio configurado).

yarn ios → compila e executa o app no iOS (requer Mac + Xcode).

yarn web → executa o app no navegador.

yarn lint → verifica erros de lint com Biome.

yarn lint:fix → corrige erros de lint automaticamente.

 Como Rodar
Modo Expo (mais simples, sem build nativo)
yarn start


Escaneie o QR Code com o Expo Go (Android/iOS).

Pressione a para abrir no emulador Android (se configurado).

Pressione w para abrir no navegador.

 Modo Nativo (Android/iOS)
yarn android   # precisa do Android Studio configurado
yarn ios       # apenas em macOS com Xcode

 Notas

O projeto já possui pastas nativas (android/ e ios/) geradas via Expo Prebuild.

Se você quiser rodar apenas no Expo Go, não precisa dessas pastas.

Para builds nativos, garanta que o ambiente Android/iOS esteja configurado corretamente.

Recomendação : yarn start 
