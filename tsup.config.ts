import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    nextjs: 'src/nextjs/index.ts',
    components: 'src/components/index.ts',
    hooks: 'src/hooks/index.ts',
    core: 'src/core/index.ts',
    database: 'src/database/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  
  // CRITICAL: Exclude Ladle story files from bundle
  exclude: [
    '**/*.stories.tsx',
    '**/*.stories.ts',
    '**/*.test.tsx',
    '**/*.test.ts',
    '**/*.spec.tsx',
    '**/*.spec.ts',
  ],
  
  // External dependencies (provided by consumer)
  external: [
    'react',
    'react-dom',
    'next',
  ],
  
  esbuildOptions(options) {
    options.platform = 'node';
    options.target = 'es2020';
  },
});
