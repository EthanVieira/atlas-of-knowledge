# Contributing to the Atlas of Knowledge

Thank you for helping chart the map of human knowledge. This project is
**crowd-sourced**: every course, prerequisite and learning resource in the atlas
comes from people who know their field. You don't need to be a web developer to
contribute — if you can edit a text file, you can improve the atlas.

> **TL;DR** — All the knowledge lives in plain data files under
> [`js/data/`](js/data/): a lightweight **node** in the field file, and its rich
> card content in a small per-course **detail** file under
> [`js/data/details/`](js/data/details/). To add or fix something you edit those
> files, run `node scripts/validate.js`, and open a pull request.

---

## What you can contribute

Anything that makes the map more accurate, more complete, or more useful:

- **📚 Learning resources** — add a great free or paid book, course, lecture
  series or set of notes to a subject you know.
- **✍️ Descriptions & topics** — improve a subject's one-line description or the
  list of topics it covers.
- **🧩 New courses** — add a subject that's missing, with its prerequisites.
- **🌳 New fields** — add a whole discipline that isn't represented yet.
- **🔗 Prerequisites** — fix a dependency that's wrong, missing, or too strict.
- **🐛 Corrections** — fix typos, dead links, mis-attributed authors, etc.

**Domain expertise is the most valuable thing you can bring.** We would rather
have five carefully chosen resources from someone who has actually studied a
field than fifty from a web search.

---

## Three ways to contribute (easiest first)

### 1. Open an issue (no coding at all)
Not comfortable editing files? Just
[open an issue](../../issues/new/choose) describing what you'd add or change —
the subject, the resource, the prerequisite — and a maintainer will fold it in.
This is a perfectly good way to contribute.

### 2. Edit on the GitHub website
1. Open the field file you want to change under [`js/data/`](js/data/)
   (e.g. `physics.js`).
2. Click the ✏️ **pencil icon** to edit it in your browser.
3. Make your change (see the [schema](#the-data-model) below).
4. At the bottom, choose **"Create a new branch and start a pull request."**

GitHub will run the validator on your change automatically.

### 3. Work locally (best for larger contributions)
```bash
git clone https://github.com/EthanVieira/atlas-of-knowledge.git
cd atlas-of-knowledge
# edit files under js/data/ ...
node scripts/validate.js      # check your work (needs Node.js; no install step)
# then open index.html in a browser to see it live
```
There is **no build step and no dependencies** — the site is plain HTML/CSS/JS.
Just open `index.html` in any browser.

---

## The data model

Everything is in [`js/data/`](js/data/):

```
js/data/_config.js               fields (label, abbr, family, hue) + the registry
js/data/<field>.js               one file per field — the course nodes you edit
js/data/details/_detail.js       the detail runtime: registerDetail(), res()
js/data/details/<field>/<id>.js  rich card content for one course
```

A course is split across **two files**: a lightweight **node** in the field file
(what the graph needs at startup) and a lazily-loaded **detail** file with the
rich card content. [Mathematics](js/data/mathematics.js) is a good reference
example.

### The field-file node

The **field file** keeps only the node and sets `detail: true`:

```js
registerCourses([

  { id: "real-analysis", title: "Real Analysis", field: "mathematics", detail: true,
    requires: ["calculus-2", "proof-writing"] },

]);
```

### The detail file

The **detail file** — `js/data/details/mathematics/real-analysis.js` — holds the
rich card content. It calls `registerDetail({...})`; **the id is taken from the
file name, so don't restate it**:

```js
registerDetail({
  long:
    "Real analysis rebuilds calculus on rigorous foundations. " +   // a full paragraph,
    "It starts by pinning down what the real numbers actually are …", // string-concatenated
  topics: [                                    // comprehensive — all major topics (12–18)
    "The real numbers & completeness", "Sequences & limits", "Metric spaces",
    "Compactness", "The Riemann integral", "Uniform convergence", /* … */
  ],
  recommended: [                               // 2–4 canonical, level-appropriate sources
    res("Principles of Mathematical Analysis", "Walter Rudin", { type: "textbook" }),
    res("Basic Analysis I", "Jiří Lebl", { type: "textbook", free: true, url: "https://www.jirka.org/ra/" }),
  ],
  supplementary: [                             // 2–5 extras: videos, notes, alt texts
    res("Analysis I", "Terence Tao", { type: "textbook" }),
  ],
});
```

Helpers (defined in `_detail.js`, available in every detail file):

- `res(title, by, opts)` — a tagged resource. `opts = { url?, type?, free? }`.
  - `type` is one of `textbook`, `lectures`, `video`, `notes`, `problems`,
    `interactive`, `reference` — shown as a chip.
  - `free: true` marks a genuinely, legally free resource — **always pair it with
    the real `url`**. Don't invent links; omit both if unsure.

| key | required | notes |
|---|---|---|
| field file: `id` / `title` / `field` / `requires` | ✅ | the node + edges |
| field file: `detail: true` | ✅ | tells the renderer to load the detail file |
| detail: `long` | ✅ | the full card description (a paragraph or two) |
| detail: `topics` | ✅ | comprehensive list, ~12–18 items |
| detail: `recommended` / `supplementary` | ✅ | arrays of `res(...)` (either may be `[]`) |

**Prerequisites may point at any field.** Quantum mechanics can require
`linear-algebra`; biochemistry can require `organic-chemistry`. That's
encouraged — cross-disciplinary edges are what make the atlas a map rather than a
list. The layout and colors are computed automatically; you never position a
node by hand.

---

## Adding a whole new field

1. Add an entry to the `FIELDS` map in
   [`js/data/_config.js`](js/data/_config.js):
   ```js
   geography: { label: "Geography", abbr: "GEO", family: "social", hue: 300 },
   ```
   - `abbr` is the short badge shown on the node (≤ 5 chars).
   - `family` is one of `sciences`, `engineering`, `social`, `humanities`
     (see `FAMILIES` in the same file).
   - `hue` is an HSL hue (0–360). Pick one **inside your family's arc** so the
     field looks related to its neighbors — sciences ≈ 96–190, engineering ≈
     205–266, social ≈ 278–331, humanities ≈ 340–31. Avoid ~40–55 (reserved for
     the "completed" gold).
2. Create `js/data/<field>.js` following the pattern of the existing files.
3. Add one `<script src="js/data/<field>.js"></script>` line to
   [`index.html`](index.html), next to the other field files.

Give each course a `detail: true` node in the field file and add its content
under `js/data/details/<field>/<id>.js` (see [The data model](#the-data-model)).
The detail runtime (`js/data/details/_detail.js`) is already loaded globally, and
detail files load lazily — you do **not** add a `<script>` tag for them. The
`js/data/details/` folder already contains a subfolder for every field.

---

## Style & quality guidelines

**Accuracy first.**
- Only add resources you'd genuinely recommend. Prefer **canonical** references
  (the standard textbook, the well-known lecture notes) over the first search
  result.
- Prefer **free** resources with **stable** links: university course pages
  (MIT OCW, Stanford, Yale OYC), author-hosted PDFs and notes, and established
  open textbooks (OpenStax, LibreTexts, SEP). If a link is likely to rot, cite
  without a URL instead.
- Attribute authors correctly.

**Descriptions** — plain and inviting, no marketing; say what the subject *is*,
not why it's great. A card's `long` description is a full paragraph or two.

**Topics** — name the key ideas someone will learn, not a full syllabus. List the
major topics comprehensively (~12–18 items).

**References** — split them by intent: `recommended` for the few canonical,
level-appropriate resources someone should actually use, and `supplementary` for
worthwhile extras (videos, notes, alternative texts). Tag each with a `type`, and
mark genuinely-free resources with `free: true` **and** their real URL.

**Prerequisites** — list the *minimal* set actually needed to begin, not
everything tangentially related. Fewer, correct edges beat many loose ones. Never
create a cycle (A → B → A); the validator will reject it.

**Ids** — `lowercase-kebab-case`, stable, and descriptive
(`algebraic-topology`, not `at` or `AlgTop`). Once an id is published, other
courses may depend on it, so **don't rename ids** casually — add an alias
discussion in your PR if you must.

---

## Before you open a pull request

Run the validator:

```bash
node scripts/validate.js
```

It checks the entire catalog for the things that break the atlas:

- missing/malformed course fields
- duplicate ids
- prerequisites pointing at non-existent courses
- **dependency cycles**
- courses in undefined fields; fields missing `label`/`abbr`/`family`/`hue`
- resources with no title
- for `detail: true` courses: a well-formed detail file exists (`long`,
  `topics`, references) — and flags orphan detail files

The same check runs automatically on every pull request via GitHub Actions, so a
PR can't be merged with broken data. Please make sure it passes locally first.

### PR checklist
- [ ] `node scripts/validate.js` passes.
- [ ] New `id`s are unique and `lowercase-kebab-case`.
- [ ] Resources are accurate, well-attributed, and links (if any) work.
- [ ] Prerequisites are minimal and correct; no cycles.
- [ ] Each new course has both a `detail: true` node and a detail file.
- [ ] I opened `index.html` and my subject appears where I'd expect (open the
      card to check its description, topics and references).

---

## Governance & credit

- Larger fields may have **field maintainers** (domain experts) who review PRs in
  their area — see [`CODEOWNERS`](.github/CODEOWNERS) if present. Want to steward
  a field? Open an issue; we'd love the help.
- Contributors are credited in [`CONTRIBUTORS.md`](CONTRIBUTORS.md). Add yourself
  in your first PR if you'd like.
- By contributing, you agree that **course data** you add is licensed under
  [CC BY-SA 4.0](LICENSE-DATA.md) and any **code** under [MIT](LICENSE). Course
  descriptions and resource lists are facts and citations; please don't paste
  copyrighted text from a source.

Questions? Open a [discussion](../../discussions) or an issue. Welcome aboard. ✦
