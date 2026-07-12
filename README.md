# ✧ Atlas of Knowledge

An interactive **dependency graph of human knowledge**. Each node is a *course*
(a subject you can learn); edges are prerequisites. Nodes are arranged into
horizontal levels by **topological depth** (how deep in the prerequisite chain a
subject sits), colored by your **completion** status, and expand on click to show
a description, requirements, free & paid resources, and a collapsible list of the
topics covered.

The visual language is an **old celestial atlas merged with a library**: a
starfield sky, parchment cards, and muted-gold "illuminated" stars for the
subjects you've completed.

## Run it

Just open `index.html` in any modern browser — **no build step, no server, no
dependencies**. Progress is saved automatically in your browser (`localStorage`).

## Controls

| Action | How |
|---|---|
| Pan | Drag empty space |
| Zoom | Scroll wheel, the `+` / `−` buttons, or the `+` / `−` keys |
| Fit whole atlas | The `⤢` button, or `0` / `f` |
| Open a subject | Click its star |
| Mark complete | Click the ★ medallion on a card (only when every prerequisite is already complete — locked cards show 🔒 and shake if you try) |
| Discover | The **✦ Discover** button jumps you to a random course whose prerequisites you've already met |
| Trace prerequisites | Open a subject — its full ancestor chain is highlighted; click a listed requirement to fly to it |
| Search | The search box, or press `/` |
| Overview / jump | Click anywhere on the minimap (bottom-right) |

## Adding subjects

The data lives in **`js/data/`**, split into one file per field
(`mathematics.js`, `physics.js`, …). To add a subject, open the file for its
field and append one object to the `registerCourses([ … ])` list:

```js
{
  id:       "my-subject",              // unique slug
  title:    "My Subject",
  field:    "mathematics",             // a key in the FIELDS map
  desc:     "A sentence or two about it.",
  requires: ["linear-algebra"],        // prerequisite ids (edges, may cross fields)
  topics:   ["Topic A", "Topic B"],    // shown in the dropdown
  free:     [ R("A Free Book", "Author", "https://…") ],
  paid:     [ R("A Textbook",  "Author") ],   // url optional
}
```

Prerequisites may reference ids in **any** field file — cross-discipline edges
work automatically. Depth, position, edges, crossing-reduction and clustering
are all computed for you; you never place a node by hand.

To add a whole new **discipline**:
1. Add a key to the `FIELDS` map in [`js/data/_config.js`](js/data/_config.js)
   (a `label`, a short `abbr` for the node badge, and an HSL `hue` for its
   border/accent color).
2. Create `js/data/<field>.js` following the pattern of the others.
3. Add a `<script src="js/data/<field>.js">` line in `index.html`.

## How it scales

- **Layout** (`js/layout.js`) — longest-path depth assignment, then each field
  gets its own fixed horizontal **lane** so a discipline's courses form a
  vertical band beneath its root; iterated barycenter sweeps reduce edge
  crossings *within* each lane. Runs on 5,000 nodes in ~30 ms.
- **Completion rules** (`js/app.js`) — a course can only be marked complete once
  all its prerequisites are complete; un-completing a course cascades to any
  dependents, so a completed course always has its whole prerequisite chain
  completed.
- **Rendering** (`js/graph.js`) — a single CSS-transformed world layer for
  pan/zoom, **DOM virtualization** (only nodes near the viewport exist as
  elements), and **canvas-drawn edges with off-screen culling**. The live DOM
  stays a few hundred elements regardless of how many thousands of courses are
  configured.

## Contributing

The atlas is meant to be **crowd-sourced** — every course and resource lives in a
plain data file under [`js/data/`](js/data/), one file per field, so anyone can
add to a discipline they know. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the
schema and workflow. Before opening a PR, run the validator (no dependencies):

```bash
node scripts/validate.js
```

It checks the whole catalog for duplicate ids, dangling prerequisites,
dependency cycles and malformed entries — and the same check runs in CI on every
pull request.

## Files

```
index.html          markup + starfield backdrop
css/styles.css      the celestial-atlas / library theme
js/data/_config.js  fields (label, abbr, hue) + the course registry
js/data/*.js        ← the data you edit, one file per field
js/layout.js        topological depth + crossing-reduction layout
js/graph.js         pan/zoom, virtualization, edges, minimap
js/app.js           completion tracking, toolbar, search, progress
```

## The content

**25 fields** grouped into four families, wired together by cross-disciplinary
prerequisites (QFT needs representation theory; biochemistry needs organic
chemistry + molecular biology; tissue engineering needs stem-cell biology, …):

- **Natural & formal sciences** — Mathematics, Physics, Chemistry, Biology,
  Computer Science.
- **Engineering** — Materials, Mechanical, Electrical, Civil, Chemical,
  Aerospace, Biomedical.
- **Social sciences** — Economics, Psychology, Sociology, Political Science,
  Anthropology, Linguistics.
- **Humanities** — Philosophy, History, Literary Studies, Theology & Religion,
  Law, Performing Arts, Visual Arts.

Several fields run from foundations to a research-level frontier — mathematics
past a graduate education (schemes, étale cohomology, ∞-categories, motives, the
Langlands program, perfectoid spaces), physics through string theory and
AdS/CFT, and comparably deep trees for chemistry, biology, computer science,
economics and philosophy.

## License

- **Code** (the site's HTML/CSS/JS and tooling) — [MIT](LICENSE).
- **Course data** (everything under [`js/data/`](js/data/): courses,
  descriptions, topics, prerequisites and resource lists) —
  [CC BY-SA 4.0](LICENSE-DATA.md).

Reusing the data just needs attribution and share-alike; the cited books and
courses remain under their own authors' copyright.
