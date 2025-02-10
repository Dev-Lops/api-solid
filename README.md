# **App - Gympass Style**

## **RFs (Requisitos Funcionais)**

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas com filtros opcionais (cidade, bairro, categoria);
- [ ] Deve ser possível o usuário buscar academias pelo nome e ordenar os resultados por proximidade ou avaliação;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;
- [ ] Deve ser possível um administrador excluir ou editar academias cadastradas;
- [ ] Deve ser possível o usuário avaliar uma academia, atribuindo uma nota e um comentário;
- [ ] Deve ser possível o usuário recuperar sua senha caso esqueça;
- [ ] O usuário deve receber notificações sobre check-ins pendentes, promoções ou novas academias próximas;
- [ ] O sistema deve permitir autenticação via redes sociais (Google, Facebook, Apple ID).

## **RNs (Regras de Negócio)**

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;
- [ ] O usuário não pode avaliar uma academia sem ter realizado pelo menos um check-in nela;
- [ ] O usuário pode editar ou excluir suas próprias avaliações;
- [ ] O sistema deve registrar logs de ações administrativas (exclusão de academias, validação de check-ins, etc.);
- [ ] O sistema deve aplicar um limite de requisições por minuto (rate limit) para evitar abuso da API;
- [ ] O sistema deve permitir check-ins offline, armazenando a tentativa e sincronizando quando a internet voltar.

## **RNFs (Requisitos Não-Funcionais)**

- [x] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco **PostgreSQL**;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um **JWT (JSON Web Token)**;
- [ ] O sistema deve suportar autenticação via **OAuth** para login com redes sociais;
- [ ] Deve haver um sistema de **cache (Redis)** para otimizar buscas frequentes de academias;
- [ ] Deve haver um sistema de **logs (LogRocket, Datadog, Winston, etc.)** para monitoramento;
- [ ] A API deve implementar um **Rate Limit** para evitar abuso de requisições;
- [ ] A infraestrutura deve ser escalável para suportar um grande número de usuários simultâneos;
- [ ] O sistema deve enviar notificações push para usuários frequentes (Firebase Cloud Messaging ou OneSignal).
