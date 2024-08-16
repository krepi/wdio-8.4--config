# WebdriverIO
# 

## Project Description

This repository contains a test automation environment based on WebdriverIO using the Mocha framework. It is intended for end-to-end (E2E) test automation. The repository includes essential configuration files and scripts to run your tests.

## Prerequisites

- Node.js (recommended version: 16.x or later)
- NPM (or Yarn) for package management

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd 
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running Tests

### 1. Run Full E2E Tests

To run all end-to-end tests, use the following command:

```bash
npm run e2e
```

### 2. Run Tests with a Specific Configuration File

If you want to run the tests using a specific configuration file, use this command:

```bash
npm run wdio
```

## Configuration

The main project configuration is located in the `wdio.conf.ts` file. Adjust settings as needed, such as browser options, test file paths, reporting, etc.

### Project Structure

- `test/specs/` - This is where your test files should be located.

## Additional Information

- The project uses TypeScript, so ensure that your test files are compliant with TypeScript.
- You can customize the `wdio.conf.ts` file to fit your needs, such as changing paths, browser configurations, or adding services.

## Author

[Your Name or Team Name]

## License

This project is licensed under the ISC License.
