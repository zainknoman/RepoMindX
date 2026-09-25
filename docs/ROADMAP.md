# RepoMindX Roadmap & Implementation Plan

## 1. Objective

Build **RepoMindX** as a focused, production-grade local-first codebase workspace using:

- RepoMind's clearer product workflow and mature UX
- RepoThink's stronger modular intelligence and evidence model

RepoMindX is a new product repository, not a direct continuation of either implementation.

## 2. Product Definition

> **RepoMindX helps developers explore, search, edit, understand, compare, transform, and document software projects locally.**

Primary workflow:

```
Open Repository
      ↓
Dashboard
      ↓
Explore / Search / Edit
      ↓
Analyze
      ↓
Compare / Transform
      ↓
Context / AI
      ↓
Document
```

## 3. Final Navigation Target

```
RepoMindX

Workspace
├── Dashboard
├── Explorer
├── Search
└── Editor

Intelligence
├── Analyze
└── Compare

Create
├── Transform
├── Context
└── Document
```

### Analyze internal sections

```
Analyze
├── Overview
├── Symbols
├── References
├── Dependencies
├── Impact
├── APIs
├── Security
├── Health
└── Advanced
```

Architecture is not a standalone primary tab.

Architecture visualization is surfaced through Dependencies, Impact, and Document.

## 4. Feature Consolidation Rules

| Existing capability | RepoMindX destination |
|---|---|
| Overview / summary | Dashboard |
| Directory structure | Dashboard + Explorer |
| Explorer | Explorer |
| Search | Search |
| File content | Editor |
| Code Ingest | Context |
| Symbols | Analyze → Symbols |
| References | Analyze → References |
| Dependencies | Analyze → Dependencies |
| Architecture | Dependencies / Impact / Document |
| Impact | Analyze → Impact |
| API discovery | Analyze → APIs |
| Security | Analyze → Security |
| Health | Analyze → Health |
| Framework analyzers | Analyze → Advanced |
| Git intelligence | Dashboard / Analyze |
| Diff | Compare |
| Transform | Transform |
| Reports | Document |
| Markdown viewer/editor | Document |
| AI | Context / Document / AI workflow |
| MCP | Integration capability, not primary navigation |

## 5. Explicitly Removed

- Temenos
- T24 Log Analyzer
- OFS Generator
- Engineering Tools
- generic Developer Tools
- JSON Formatter
- Base64
- JWT Decoder
- UUID
- Timestamp
- generic text cleanup
- standalone Markdown utility as a separate top-level destination
- standalone Architecture destination
- legacy FastAPI/Codebase Workbench backend

## 6. Phase Plan

### Phase 1 — Foundation & RepoMind Baseline

**Goal:** Establish a clean, maintainable RepoMindX base before adding new intelligence.

#### Work

- Audit RepoMind source and current E2E suite.
- Establish RepoMindX application structure.
- Migrate only relevant RepoMind functionality.
- Remove Temenos/OFS/T24 functionality.
- Remove Engineering/Developer utilities.
- Remove legacy backend.
- Remove duplicate Code Ingest screens.
- Create Dashboard shell.
- Create Analyze shell.
- Create Compare shell.
- Create Transform shell.
- Create Context shell.
- Create Document shell.
- Establish shared repository state.
- Establish test/build scripts.
- Establish Playwright E2E baseline.
- Add CI workflow.

#### Acceptance

- Application starts cleanly.
- Repository can be opened locally.
- Primary navigation works.
- Removed features are absent.
- No dead primary navigation entries.
- Production build succeeds.
- Existing migrated E2E scenarios pass.
- New primary-shell E2E scenarios pass.

**Phase push gate:** Unit/integration + full Playwright E2E + production build.

---

### Phase 2 — Workspace Experience

**Goal:** Make the everyday developer workflow excellent.

#### Dashboard

Show:

- repository name
- file count
- language statistics
- framework/package signals
- symbol/reference/dependency counts
- health summary
- recent/opened files
- quick actions
- local-first status

Dashboard absorbs the useful summary previously exposed by Code Ingest.

#### Explorer

- repository tree
- filtering
- file type/language filtering
- source navigation
- search integration
- ignore generated/dependency folders

#### Search

- source-text search
- line/occurrence results
- symbol search
- file search
- dependency-aware ranking
- result → Editor navigation

#### Editor

- read/edit source
- line numbers
- find/replace
- copy
- save back to local file where supported
- unsaved-change handling
- source navigation from all intelligence features

#### Acceptance

A user must be able to:

1. open a folder,
2. see the Dashboard,
3. browse Explorer,
4. search code,
5. open a result,
6. edit a file,
7. save it,
8. return to the repository workflow.

**Phase push gate:** Complete workspace E2E suite + production build.

---

### Phase 3 — Code Intelligence

**Goal:** Make Analyze the authoritative repository intelligence workspace.

#### Index

- files
- languages
- AST
- symbols
- definitions
- references
- imports
- exports
- dependencies
- dependents
- unresolved imports
- parser errors

#### Symbols / References

- symbol listing
- definition navigation
- reference navigation
- callers
- callees
- enclosing symbol context

#### Dependencies

- direct dependencies
- dependents
- cycles
- hotspots
- dependency graph
- optional Mermaid export

#### Impact

```
Changed File
    ↓
Changed Symbol
    ↓
References
    ↓
Callers / Callees
    ↓
Dependents
    ↓
APIs
    ↓
Tests
```

Every impact result should provide evidence and source navigation.

#### APIs

Support useful heuristic discovery for:

- Express
- NestJS
- FastAPI
- Flask
- Spring
- ASP.NET

API result should include:

- HTTP method
- route
- framework
- file
- line
- source navigation

#### Security

Keep this explicitly heuristic.

Detect likely:

- API keys
- passwords
- secrets
- tokens
- private keys
- connection strings
- suspicious credential environment variables

Never present heuristic findings as confirmed vulnerabilities.

#### Health

Surface:

- unresolved imports
- unresolved references
- parser errors
- dependency cycles
- structural hotspots

#### Advanced

Possible signals:

- complexity
- duplicate code
- dead code
- test discovery
- framework analyzers

These should support analysis without becoming separate primary screens.

#### Acceptance

All major intelligence screens must operate on the same repository index and provide source navigation.

**Phase push gate:** Intelligence regression suite + full Playwright E2E + production build.

---

### Phase 4 — Compare, Transform & Context

**Goal:** Make repository manipulation and comparison coherent.

#### Compare

- file-to-file comparison
- repository/file changes where applicable
- line-level diff
- additions/deletions
- side-by-side and/or unified view
- source navigation

#### Transform

Retain repository-focused operations:

- combine
- split
- copy
- download
- ZIP
- selected-file operations

Do not turn Transform into a generic developer toolbox.

#### Context

Replace the old Code Ingest concept.

Context should allow:

- file selection
- directory selection
- dependency expansion
- dependent expansion
- repository summary
- directory structure
- source content
- token estimate
- copy
- Markdown download
- text download

#### Acceptance

The user can select a meaningful subset of a repository and generate portable AI/review context without duplicating Explorer or Editor functionality.

**Phase push gate:** Compare/Transform/Context E2E + production build.

---

### Phase 5 — Documentation & AI

**Goal:** Turn repository understanding into useful outputs.

#### Document

- project documentation
- module documentation
- API documentation
- dependency/architecture documentation
- security report
- health report
- Markdown editor/viewer
- Markdown preview
- Mermaid rendering where applicable
- copy/download

#### AI

AI must be evidence-first.

Flow:

```
Question
   ↓
Repository Search
   ↓
Symbol Resolution
   ↓
Dependency / Impact Traversal
   ↓
Evidence Selection
   ↓
Context Construction
   ↓
LLM
   ↓
Answer + Evidence
```

AI should:

- show relevant files/lines
- distinguish evidence from assumptions
- state when evidence is insufficient
- allow local/provider configuration
- avoid automatically sending the whole repository

#### MCP / integrations

Keep MCP as an integration layer rather than a primary UI destination.

Potential tools:

- search
- symbol
- definition
- references
- callers
- callees
- dependencies
- impact
- tests
- architecture
- context
- health
- explain

#### Acceptance

Documentation generated from the same repository index must be consistent with Analyze results.

AI answers must show repository evidence.

Markdown viewing/editing must work independently of AI.

**Phase push gate:** Documentation + AI + Markdown E2E + production build.

---

### Phase 6 — Production Hardening

**Goal:** Make RepoMindX release-ready.

#### Performance

- indexing progress
- incremental indexing where practical
- IndexedDB caching
- avoid unnecessary re-parsing
- large-repository safeguards
- lazy loading for heavy features

#### Reliability

- file access failures
- parser failures
- unsupported languages
- stale cache handling
- index invalidation
- malformed repositories
- graceful empty states

#### UX

- keyboard navigation
- loading states
- empty states
- error states
- responsive layouts
- accessible controls
- consistent notifications
- consistent source navigation

#### Security / Privacy

- local-first defaults
- explicit external AI configuration
- no silent repository upload
- safe handling of local credentials
- clear external-provider boundaries

#### Testing

Maintain:

- unit tests
- intelligence regression tests
- Playwright E2E
- production build
- smoke tests

#### Documentation

- README
- architecture documentation
- feature documentation
- development guide
- test guide
- privacy/local-first behavior
- roadmap

#### Acceptance

Full regression and E2E suite passes on the complete application.

**Phase push gate:** Full test suite + full Playwright E2E + production build + release checklist.

## 7. Branch & Push Strategy

We will deliberately avoid branch explosion.

### Planning

The initial README and roadmap are established first.

### Development

Use at most one active development branch per phase:

```
main
 ├── phase/1-foundation
 ├── phase/2-workspace
 ├── phase/3-intelligence
 ├── phase/4-compare-transform-context
 ├── phase/5-document-ai
 └── phase/6-hardening
```

Do not create branches for individual components or checklist items.

### Push / merge rule

Do not push every development task.

For each phase:

1. create the phase branch,
2. implement all related work,
3. run unit/integration tests,
4. run the full Playwright E2E suite,
5. run the production build,
6. fix failures,
7. push the completed phase,
8. create one PR,
9. merge after validation.

A phase can contain multiple local commits while development is in progress, but the GitHub repository should receive the completed phase as a single grouped delivery where practical.

## 8. Definition of Done

A feature is not considered complete merely because its UI exists.

It must have:

- real functionality,
- real repository data,
- source navigation where applicable,
- loading/error/empty states,
- tests,
- E2E coverage where user-facing,
- no duplicate primary workflow,
- production build success.

## 9. Current Status

| Phase | Status |
|---|---|
| Planning / Documentation | In progress |
| Phase 1 — Foundation | Not started |
| Phase 2 — Workspace | Not started |
| Phase 3 — Intelligence | Not started |
| Phase 4 — Compare/Transform/Context | Not started |
| Phase 5 — Document/AI | Not started |
| Phase 6 — Hardening | Not started |

## 10. Reference Repositories

RepoMind and RepoThink are reference implementations.

RepoMind provides the primary product/UX baseline.

RepoThink provides selected intelligence and architectural patterns.

RepoMindX should not inherit unrelated features simply because they exist in either reference repository.
