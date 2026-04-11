// jest.config.mjs
export default {
  testEnvironment: 'node', // roda os testes no ambiente Node
  transform: {
    '^.+\\.js$': 'babel-jest', // transforma todos os arquivos .js usando Babel
  },
  moduleFileExtensions: ['js', 'json', 'node'], // extensões suportadas
  roots: ['<rootDir>/tests'], // pasta onde estão os testes
};
