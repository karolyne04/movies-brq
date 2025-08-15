# MoviesBRQ

Aplicativo mobile para exibir filmes populares, buscar detalhes e marcar favoritos, desenvolvido com **React Native** e **Expo**. O app integra a **TMDb API** para listar os filmes.

---

## 📝 Descrição

O **MoviesBRQ** permite que usuários:

- Efetuar login fake (`user / 123`) com validação de campos obrigatórios e senha numérica.
- Visualizar filmes populares do momento.
- Ver detalhes de cada filme (sinopse, gênero, avaliação).
- Marcar filmes como favoritos.
- Navegar entre abas conforme o protótipo.
- Lidar com erros de API ou indisponibilidade de internet.

O projeto foi desenvolvido com foco em boas práticas de **arquitetura**, **testes unitários** (para vagas PL/SR) e uso correto de **variáveis de ambiente** para proteger a chave da API.

---

## 💻 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [TMDb API](https://www.themoviedb.org/settings/api)
- [TypeScript](https://www.typescriptlang.org/) (opcional)
- Gerenciamento de estado (ex.: Zustand)
- Testes unitários: [Jest](https://jestjs.io/) e [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- Ambiente: pastas nativas geradas pelo Expo (`expo prebuild`)

---

## 🚀 Funcionalidades

1. **Login fake**  
   - Somente aceita `user / 123`.  
   - Campos obrigatórios.  
   - Senha deve conter apenas números.

2. **Tela de Filmes com 2 abas**  
   - Aba “Populares” e “Favoritos”.  
   - Botão de favorito (plus).

3. **Detalhes do Filme**  
   - Sinopse, gênero, avaliação.



4. **Tratamento de erros**  
   - Falha na API ou internet indisponível.

5. **Boas práticas**  
   - Código limpo e organizado.  
 
   - Uso de `.env` para API Key.

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/moviesbrq.git
