# RepoMindX

> **Local-first codebase intelligence workspace for developers.**

RepoMindX is the next-generation evolution of RepoMind: a focused local development workspace for exploring, searching, editing, understanding, comparing, transforming, and documenting software repositories.

The product combines the usability and workflow clarity of RepoMind with the stronger code-intelligence architecture developed in RepoThink.

## Product Vision

RepoMindX should help a developer answer:

- What is in this repository?
- Where is the code I need?
- How is it connected?
- What will be affected if I change it?
- Where are the APIs, symbols, dependencies, and security signals?
- How can I prepare useful repository context for AI?
- How can I compare, transform, and document the project?

The core principle is:

> **Understand the repository first. Then change, compare, transform, or document it.**

## Product Scope

### Workspace

- Dashboard
- Explorer
- Search
- Editor

### Intelligence

- Analyze
  - Overview
  - Symbols
  - References
  - Dependencies
  - Impact
  - APIs
  - Security
  - Health
  - Advanced analysis
- Compare

### Create

- Transform
- Context
- Document
  - Project documentation
  - Module documentation
  - Markdown editor/viewer
  - Generated reports

## Intentionally Removed

RepoMindX is not a generic developer utility collection.

The following are out of scope:

- Temenos / T24 tools
- OFS Generator
- T24 Log Analyzer
- Engineering utilities
- JSON formatter
- Base64 / JWT / UUID / Timestamp utilities
- Generic text-cleanup utilities
- Standalone generic transform utilities unrelated to repository workflows
- Legacy Codebase Workbench / FastAPI backend
- Separate Code Ingest directory-summary and file-content screens when the same information is already available through Dashboard, Explorer, Editor, Transform, and Context

## Repository Context

The previous RepoMind Code Ingest concept is retained as a **Context** capability.

Context generation can combine selected repository files with:

- repository summary
- directory structure
- source content
- dependencies
- dependents
- token estimates
- copy/download output

This keeps repository-context generation useful without duplicating Explorer, Dashboard, or Editor.

## Architecture Visualization

RepoMindX does not expose a standalone Architecture product tab.

Architecture information is surfaced where it is useful:

- Dependencies show relationships and graphs.
- Impact shows affected files/symbols/APIs/tests.
- Dashboard summarizes repository structure.
- Document can generate architecture documentation.
- Mermaid can be used as a visualization/export format.

## Local-first Model

Repository indexing and normal project exploration happen locally in the browser.

The application should not upload a repository merely because it was opened.

External AI providers are optional and explicitly configured by the user. AI features must use repository evidence and clearly distinguish evidence from inference.

## Technology Direction

The implementation should remain modular and browser-first.

Expected foundations include:

- React
- Vite
- JavaScript
- Babel/parser-based AST analysis where appropriate
- IndexedDB for local index caching
- browser File System Access APIs where available
- Mermaid for optional diagrams
- local Git metadata inspection where available
- Playwright E2E coverage

The exact dependency set will be finalized during Phase 1 after the RepoMind baseline is audited.

## Design Principles

1. **RepoMind UX first**
   - Clear workflow.
   - Few primary destinations.
   - No intelligence terminology unless it helps the user.

2. **RepoThink intelligence where it adds real value**
   - Better indexing.
   - Hybrid search.
   - References.
   - Callers/callees.
   - Impact.
   - Evidence-backed context.
   - AI evidence.
   - MCP/integration foundations.

3. **One source of truth**
   - Dashboard, Search, Analyze, Context, AI, Compare, and Document should use the same repository index.

4. **No duplicate screens**
   - Summary belongs in Dashboard.
   - Directory browsing belongs in Explorer.
   - Source viewing/editing belongs in Editor.
   - Repository context generation belongs in Context.
   - Architecture visualization belongs with Dependencies/Impact.

5. **Evidence over guesswork**
   - Analysis results should link back to source files and lines whenever possible.

6. **Feature complete means tested**
   - Each phase must have functional validation.
   - Each phase must pass the relevant unit/integration tests.
   - Each phase must pass the complete Playwright E2E suite before its phase is pushed/merged.

## Development Strategy

RepoMindX will be developed in **6 major phases**.

We will not create a branch for every small development task.

Each phase gets one development branch, and related work is completed on that branch. The phase is pushed/merged only after:

1. implementation is complete,
2. unit/integration tests pass,
3. Playwright E2E tests pass,
4. the production build succeeds,
5. the phase acceptance checklist is satisfied.

### Phase 1 — Foundation & RepoMind Baseline

Establish the new repository from the proven RepoMind baseline, remove irrelevant product areas, restructure the application shell, and establish the test/build foundation.

### Phase 2 — Workspace Experience

Build Dashboard, Explorer, Search, and Editor into one coherent local repository workflow.

### Phase 3 — Code Intelligence

Integrate the strongest RepoMind/RepoThink indexing, symbols, references, dependencies, API discovery, security, health, and impact capabilities.

### Phase 4 — Compare, Transform & Context

Build Compare, Transform, and Context as first-class repository workflows without duplicating other screens.

### Phase 5 — Documentation & AI

Build Document/Markdown, repository reports, evidence-backed AI, and repository-context workflows.

### Phase 6 — Production Hardening

Complete performance, caching, error handling, accessibility, responsive behavior, security boundaries, E2E coverage, documentation, and release validation.

## Quality Gate

No phase is considered complete until its E2E suite is green.

The project should maintain:

- unit/regression tests for intelligence
- Playwright E2E tests for user workflows
- production build validation
- no broken primary navigation
- no dead primary tabs
- no placeholder functionality presented as complete

## Repository Status

RepoMindX starts as a clean product repository.

The existing RepoMind and RepoThink repositories are treated as reference implementations. Code is migrated selectively based on product value and maintainability rather than copied wholesale.

See:

- [docs/ROADMAP.md](docs/ROADMAP.md)

for the implementation plan and acceptance criteria.
