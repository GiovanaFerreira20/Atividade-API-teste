const request = require('supertest');
const { app, resetarDados } = require('../app');

beforeEach(() => {
  resetarDados();
});

describe('Suíte de Testes da API de Usuários', () => {

  // Teste 1 — Busca (GET /usuarios/:id)
  test('Deve buscar o usuário de id 1 com sucesso', async () => {
    const res = await request(app).get('/usuarios/1');

    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Ana Souza');
    expect(res.body.email).toBe('ana@email.com');
  });

  // Teste 2 — Inserção (POST /usuarios)
  test('Deve inserir um novo usuário e confirmar sua persistência', async () => {
    const novoUsuario = {
      nome: 'João Silva',
      email: 'joao@email.com',
      idade: 25,
    };

    const resPost = await request(app)
      .post('/usuarios')
      .send(novoUsuario);

    expect(resPost.status).toBe(201);
    // id 4 + os mesmos dados enviados (nome, email e idade)
    expect(resPost.body).toEqual({ id: 4, ...novoUsuario });

    // Confirmação via GET
    const resGet = await request(app).get('/usuarios/4');
    expect(resGet.status).toBe(200);
    expect(resGet.body).toEqual({ id: 4, ...novoUsuario });
  });

  // Teste 3 — Alteração (PUT /usuarios/:id)
  test('Deve alterar os dados do usuário de id 2', async () => {
    const dadosAtualizados = {
      nome: 'Bruno Lima Silva',
      email: 'bruno.novo@email.com',
      idade: 31,
    };

    const res = await request(app)
      .put('/usuarios/2')
      .send(dadosAtualizados);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 2, ...dadosAtualizados });
  });

  // Teste 4 — Exclusão (DELETE /usuarios/:id)
  test('Deve excluir o usuário de id 3 e retornar 404 em buscas subsequentes', async () => {
    const resDelete = await request(app).delete('/usuarios/3');
    expect(resDelete.status).toBe(204);
    expect(resDelete.body).toEqual({}); // 204 = sem corpo

    // Confirmação via GET
    const resGet = await request(app).get('/usuarios/3');
    expect(resGet.status).toBe(404);
  });

});
