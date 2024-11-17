import { exec } from 'child_process';
import { jest } from '@jest/globals';

jest.mock('child_process');

describe('Build and Start Tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('npm install, build, and start commands run successfully', async () => {
    // Mock successful executions
    exec.mockImplementation((command, callback) => {
      callback(null, 'success', '');
    });

    // Test npm install
    await new Promise((resolve) => {
      exec('npm i --force', (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stdout).toBe('success');
        expect(stderr).toBe('');
        resolve();
      });
    });

    // Test next build
    await new Promise((resolve) => {
      exec('npx next@14 build', (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stdout).toBe('success');
        expect(stderr).toBe('');
        resolve();
      });
    });

    // Test next start
    await new Promise((resolve) => {
      exec('npx next@14 start', (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stdout).toBe('success');
        expect(stderr).toBe('');
        resolve();
      });
    });

    // Verify that all commands were called
    expect(exec).toHaveBeenCalledTimes(3);
    expect(exec).toHaveBeenCalledWith('npm i --force', expect.any(Function));
    expect(exec).toHaveBeenCalledWith('npx next@14 build', expect.any(Function));
    expect(exec).toHaveBeenCalledWith('npx next@14 start', expect.any(Function));
  });
});