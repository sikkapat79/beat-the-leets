# Beat the Leets

A TypeScript + Jest template for learning Test-Driven Development (TDD) with LeetCode problems and context engineering.

## Overview

This project provides a structured template for practicing TDD on LeetCode-style problems. Each problem is organized in its own folder with:

- **README.md**: Problem statement and examples
- **CONTEXT.md**: Context engineering frame for Cursor (structured prompts)
- **solution.ts**: Implementation
- **solution.test.ts**: Tests written using TDD
- **NOTES.md**: Implementation notes, decisions, and complexity analysis

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Available Scripts

- `pnpm test` - Run all tests once
- `pnpm test:watch` - Run tests in watch mode (great for TDD)
- `pnpm typecheck` - Type-check TypeScript code without emitting files

## Workflow

### Adding a New Problem

1. **Copy the template**:
   ```bash
   cp -r src/problems/_template src/problems/your-problem-name
   ```

2. **Fill in README.md**:
   - Paste the LeetCode problem link and statement
   - Add examples and constraints

3. **Fill in CONTEXT.md**:
   - Complete the context engineering frame
   - Define inputs/outputs, constraints, and test plan
   - This helps structure your Cursor prompts

4. **Write your first test** in `solution.test.ts`:
   - Start with the simplest case
   - Run `pnpm test:watch` to see it fail (red)

5. **Implement minimal code** in `solution.ts`:
   - Write just enough to make the test pass (green)

6. **Refactor and repeat**:
   - Add more tests incrementally
   - Refactor code as needed
   - Document decisions in NOTES.md

### Using with Cursor

1. Open the problem folder in Cursor
2. Copy the contents of `CONTEXT.md` into a Cursor chat
3. Use the structured prompt to guide implementation
4. Follow TDD: write tests first, then implement

## Example Problem

See `src/problems/two-sum/` for a complete example demonstrating:
- Problem statement
- Context engineering frame
- TDD test suite
- Implementation with complexity analysis
- Implementation notes

## Project Structure

```
.
├── src/
│   ├── problems/
│   │   ├── _template/          # Template for new problems
│   │   │   ├── README.md
│   │   │   ├── CONTEXT.md
│   │   │   ├── NOTES.md
│   │   │   ├── solution.ts
│   │   │   └── solution.test.ts
│   │   └── two-sum/            # Example problem
│   │       └── ...
└── ...
```

## TypeScript Configuration

This project uses strict TypeScript settings for type safety:
- Strict mode enabled
- No unused locals/parameters
- No implicit returns
- Source maps enabled for debugging

## Testing

Tests are written using Jest with TypeScript support (ts-jest). Tests follow the Arrange-Act-Assert pattern and are organized from simplest to most complex.

## License

MIT