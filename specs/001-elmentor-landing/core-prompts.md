# Core Prompts Used for Building the Elmentor Landing Page (Spec-Driven, Reproducible)

This document collects the exact prompts used at each major phase of the project, with a brief description of their function. These can be reused to reproduce the workflow or adapt it for similar projects.

---

## 1. Specification Phase
**Prompt:**
> "Write a detailed product specification for the Elmentor Program landing page, including all user stories, features, and acceptance criteria. Use clear, structured markdown."

**Function:**
- Establishes the product vision, requirements, and user stories in a reproducible, structured format.

---

## 2. Planning Phase
**Prompt:**
> "Break down the work into clear, incremental tasks for building the Elmentor Program landing page, organized by phase and user story. Output as a markdown checklist."

**Function:**
- Converts the specification into actionable, trackable tasks for implementation.

---

## 3. Task Breakdown (Speckit)
**Prompt:**
> "Using the above specification, generate a detailed tasks.md file following the speckit.tasks.prompt.md format, with phases, user stories, and acceptance criteria."

**Function:**
- Produces a granular, phase-based task list for the project, suitable for tracking and automation.

---

## 4. Implementation Phase
**Prompt:**
> "Execute the defined tasks to build the Elmentor Program landing page, following the plan and tasks.md. Use Vite 5, vanilla JavaScript (ES2023), and ensure all acceptance criteria are met."

**Function:**
- Drives the actual coding and file creation, ensuring the implementation matches the plan and requirements.

---

## 5. Deferring Features (e.g., Contact Form)
**Prompt:**
> "For the form, skip it for now and add as a future task. Replace the join section with a placeholder and document the deferred feature in FUTURE_TASKS.md."

**Function:**
- Documents and manages scope changes, ensuring deferred features are tracked for future work.

---

## 6. Remote Repository Creation & Deployment
**Prompt:**
> "Create a remote GitHub repository for this project, push all code, and set up GitHub Actions for deployment to GitHub Pages. Provide final deployment instructions."

**Function:**
- Automates repository creation, code push, and deployment setup for reproducible CI/CD.

---

## Usage
Each prompt above can be reused in a spec-driven workflow to:
- Generate specs, plans, and tasks for new projects
- Guide implementation and track progress
- Manage scope and deferred features
- Automate repository setup and deployment

---

## 7. Navigation Bar Feature (Extensible)
**Prompt:**
> "Add an extensible navigation bar to the landing page, with links to all major sections. The nav should be modular, support i18n, and allow easy addition of new sections. Update the spec, plan, and tasks accordingly."

**Function:**
- Adds a modular, extensible navigation bar to the site, ensuring future-proof navigation and i18n support. Documents the feature in all relevant project files for reproducibility.

---

*This file is auto-generated for reproducibility and onboarding. Update as new core prompts are added to the workflow.*
