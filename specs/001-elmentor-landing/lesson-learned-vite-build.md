# Lesson Learned: Vite Not Recognized in Build Scripts

## Error

- **Symptom:**
  - Running `npm run build` or `npx vite build` fails with:
    > 'vite' is not recognized as an internal or external command, operable program or batch file.
- **Observed:**
  - Vite is listed in `devDependencies` in `package.json`.
  - `node_modules/.bin/` contains `vite`, `vite.cmd`, and `vite.ps1`.
  - `npm install` completes successfully.
  - `npx vite` and `npm run build` still fail with the same error.

## Root Cause

- The local shell environment (PowerShell) did not resolve the local `node_modules/.bin` directory for scripts, possibly due to a corrupted or non-standard PATH, or a shell-specific issue.
- The global `PATH` variable was not updated or did not include the local `.bin` directory for the current process.

## Solution

- **Workaround:**
  - Directly invoke the local Vite binary using:
    ```
    .\node_modules\.bin\vite build
    ```
  - This bypasses the shell's PATH resolution and uses the local project binary directly.
- **Permanent Fix:**
  - Ensure that `npm install` is run in the project root and completes without errors.
  - If using PowerShell, always use the full path to the binary if PATH issues persist.
  - Optionally, restart the terminal or VS Code to refresh environment variables.

## Deployment

- After building with the direct command, commit and push changes as usual to trigger CI/CD deployment.

## Takeaway

- When a local binary is present but not recognized, always check `node_modules/.bin` and use the direct path as a workaround.
- This is especially important in Windows/PowerShell environments where PATH issues are more common.

---
*Documented on 2025-10-27 after resolving a Vite build issue in the Elmentor landing page project.*
