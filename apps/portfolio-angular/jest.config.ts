export default {
  displayName: 'portfolio-angular',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/portfolio-angular',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  // Couverture désactivée par défaut pour éviter l'échec sans tests
  collectCoverage: false,
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.spec.ts',
    '!src/app/**/index.ts',
    '!src/app/main.ts',
    '!src/app/app.config.ts',
    '!src/app/app.routes.ts',
    '!src/app/nx-welcome.ts', // Exclure le composant de bienvenue Nx
  ],
  coverageReporters: ['html', 'lcov', 'text', 'json'],
  // Timeout pour tests d'intégration
  testTimeout: 10000,
  // Configuration pour tests en parallèle
  maxWorkers: '50%',
  // Autoriser l'absence de tests en CI
  passWithNoTests: true,
  // Cache pour améliorer les performances
  cache: true,
  cacheDirectory: '../../node_modules/.cache/jest',
};
