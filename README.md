# MoviesBRQ

App de Filmes
Um aplicativo móvel construído com React Native e Expo para descobrir e navegar por filmes. Este projeto utiliza uma pilha de tecnologia moderna para proporcionar uma experiência de usuário fluida e multiplataforma, com gerenciamento de estado via Zustand e um tratamento robusto de API com Axios.

Principais Recursos
Descoberta de Filmes: Navegue por uma seleção de filmes obtidos de uma API remota.

Navegação Intuitiva: Mova-se facilmente entre as diferentes seções do aplicativo usando @react-navigation.

Gerenciamento de Estado: Gerenciamento de estado eficiente e previsível com Zustand.

Fontes Personalizadas: Usa as Google Fonts (Nunito e Roboto) para uma aparência limpa e profissional.

Suporte Offline: Verifica a conectividade de rede usando @react-native-community/netinfo para proporcionar uma melhor experiência de usuário.

Qualidade do Código: Garante um estilo de código e formatação consistentes usando Biome.

Primeiros Passos
Para rodar este projeto localmente, siga estes passos:

Pré-requisitos
Certifique-se de ter o Node.js e o Expo CLI instalados em sua máquina.

Instalação
Clone o repositório:

git clone git@github.com:karolyne04/movies-brq.git
cd movies-brq

Instale as dependências:

yarn

Crie um arquivo .env na raiz do seu projeto e adicione a sua chave de API para o banco de dados de filmes.

# Substitua pela sua chave de API real
EXPO_PUBLIC_MOVIE_API_KEY=your_api_key_here

Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes comandos:


No diretório do projeto, você pode rodar os seguintes comandos:

yarn start: Inicia o servidor de desenvolvimento do Expo.

yarn android: Compila e executa o aplicativo em um dispositivo ou emulador Android conectado.

yarn ios: Compila e executa o aplicativo em um dispositivo ou simulador iOS conectado.

yarn web: Executa o aplicativo em um navegador web.

yarn lint: Verifica o código em busca de erros de linting usando Biome.

yarn lint:fix: Corrige erros de linting e formatação automaticamente.

Tecnologias Utilizadas
Framework: React Native, Expo

Linguagem: TypeScript

Gerenciamento de Estado: Zustand

Cliente de API: Axios

Navegação: React Navigation

Linting & Formatação: Biome
