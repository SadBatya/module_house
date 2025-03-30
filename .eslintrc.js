module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Это включает Prettier в конфигурацию ESLint
  ],
  plugins: ['react', 'import'],
  rules: {
    // Правило для пробела между импортами и компонентами
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Библиотеки и внешние импорты
          ['internal'], // Внутренние импорты
          ['sibling', 'parent'], // Импорты из той же директории и из родительской
        ],
        'newlines-between': 'always', // Обеспечивает пустую строку между группами импортов
      },
    ],
  },
};
