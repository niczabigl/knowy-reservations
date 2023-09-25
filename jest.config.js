module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
        '^.+\\.ts?$': 'jest-preset-angular'
    },
    transformIgnorePatterns: [],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        "@components/(.*)": "<rootDir>/src/app/components/$1",
        "@pages/(.*)": "<rootDir>/src/app/pages/$1",
        "@services/(.*)": "<rootDir>/src/app/services/$1",
        "@models/(.*)": "<rootDir>/src/app/models/$1",
        "@store/(.*)": "<rootDir>/src/app/store/$1"
    }
};
