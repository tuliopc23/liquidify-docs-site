export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

function titleize(file: string): string {
  const base = file
    .replace(/^(\d+[-_])/, "")
    .replace(/[-_]/g, " ")
    .replace(/\.[^.]+$/, "");
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function displayGroupLabel(raw: string): string {
  const map: Record<string, string> = {
    _templates: "Templates",
    advanced: "Advanced",
    guides: "Guides",
    components: "Components",
    contributing: "Contributing",
  };
  return map[raw] ?? titleize(raw);
}

function pushUnique(arr: NavItem[], item: NavItem) {
  if (!arr.some((i) => i.href === item.href && i.label === item.label)) arr.push(item);
}

export async function getSidebar(): Promise<NavItem[]> {
  // Eagerly import all docs pages
  const modules = import.meta.glob("/src/pages/docs/**/*.{md,mdx}", { eager: true }) as Record<
    string,
    any
  >;

  // Build groups; special bucket for root-level meta pages
  const groups: Record<string, NavItem> = {};

  for (const fullPath of Object.keys(modules)) {
    const isIndex = /(^|\/)index\.(md|mdx)$/.test(fullPath);
    // Normalize path to URL path
    const pathAfterPages = fullPath.replace(/^\/src\/pages/, "");
    const href = pathAfterPages.replace(/(index)?\.(md|mdx)$/, "");

    const mod = modules[fullPath];
    const fmTitle: string | undefined = mod?.frontmatter?.title;

    const segments = href.split("/").filter(Boolean); // e.g. ['docs','guides','getting-started']
    if (segments[0] !== "docs") continue;

    const top = segments[1];

    // Root-level docs pages (e.g., /docs/contributing.mdx, /docs/DOCUMENTATION_STATUS.mdx)
    if (!top) {
      continue;
    }

    // Group name logic
    let groupKey = top;
    if (/^DOCUMENTATION_/.test(segments[1] || "")) groupKey = "meta";

    if (!groups[groupKey]) {
      groups[groupKey] = {
        label: groupKey === "meta" ? "Meta" : displayGroupLabel(groupKey),
        children: [],
      };
    }

    // If this is a group index (/docs/<group>/index.mdx), do not add a duplicate link item; the header already represents the group.
    if (segments.length === 2 && isIndex) {
      continue;
    }

    // Simple leaf under a group: /docs/<group>/<page>.mdx
    if (segments.length === 3 && !isIndex) {
      const itemLabel = fmTitle ?? titleize(segments[2]);
      pushUnique(groups[groupKey].children!, { label: itemLabel, href: `/${segments.join("/")}` });
      continue;
    }

    // Nested sections: /docs/<group>/<section>/index.mdx or deeper
    // Treat <section>/index as a parent; children as deeper pages
    if (segments.length >= 3) {
      const parentSlug = segments[2];
      const parentLabel = titleize(parentSlug);
      let parent = groups[groupKey].children!.find(
        (c) => c.label.toLowerCase() === parentLabel.toLowerCase(),
      );
      if (!parent) {
        parent = { label: parentLabel, children: [] };
        groups[groupKey].children!.push(parent);
      }

      if (!isIndex) {
        // Add the leaf page under the parent
        const itemLabel = fmTitle ?? titleize(segments[segments.length - 1]);
        pushUnique(parent.children!, { label: itemLabel, href: `/${segments.join("/")}` });
      }
    }
  }

  // Sorting: within each group and nested children
  function sortItems(items: NavItem[]) {
    items.sort((a, b) => a.label.localeCompare(b.label));
    for (const it of items) if (it.children) sortItems(it.children);
  }

  // Preferred display order
  const order = ["Guides", "Components", "Advanced", "Contributing", "Templates", "Meta"];
  const nav = Object.values(groups);
  sortItems(nav);
  nav.sort((a, b) => {
    const ai = order.indexOf(a.label);
    const bi = order.indexOf(b.label);
    if (ai === -1 && bi === -1) return a.label.localeCompare(b.label);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return nav;
}
