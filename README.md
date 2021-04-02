# Cadastro de carro

**Requisitos funcionais**
Deve ser possível cadastrar um novo carro.

**RegrasDeNegócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.  

# Listagem de carros

**Requisitos funcionais**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RegrasDeNegócio**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**Requisitos funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.


**RegrasDeNegócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RequisitoNãoFuncional**
Utilizar o multer para upload dos arquivos.

**RegrasDeNegócio**
O usuário deve poder cadastar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um admnistrador.

# Aluguel

**Requisitos funcionais**
Deve ser possível cadastrar um aluguel

**RegrasDeNegócio**
O aluguel deve ter duração mínima de 1 hora.