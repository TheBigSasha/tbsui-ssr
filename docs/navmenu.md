# ResponsiveNavMenu Component

This document provides a detailed guide to using the `ResponsiveNavMenu` component, a powerful and flexible navigation component.

## Overview

The `ResponsiveNavMenu` is designed to be highly adaptable for various use cases, from simple link lists to complex, nested menus with custom header elements. It handles responsive behavior, collapsing into a mobile-friendly menu on smaller screens.

## Props

| Prop                 | Type                                      | Description                                                                                                                                 |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`              | `Array<LinkEntry \| CategoryDelimiter>`     | An array of links, collapsible categories, or delimiters to display in the menu.                                                            |
| `headerItem`         | `React.ReactNode`                         | A React node to display as the header of the navigation menu. This is often a logo or site title.                                          |
| `headerItemPosition` | `"left" \| "center" \| "right"`             | The position of the `headerItem`. Defaults to `"left"`.                                                                                   |
| `positionItems`      | `"left" \| "center" \| "right"`             | The alignment of the navigation links within the menu. Defaults to `"center"`.                                                              |
| `fillScreen`         | `"always" \| "mobile" \| "never"`         | Determines when the menu should expand to fill the screen width. Defaults to `"mobile"`.                                                  |
| `scrollCollapse`     | `"always" \| "card" \| "never"`           | Defines the behavior of the menu on scroll. `"card"` provides a shrinking, card-like effect. Defaults to `"never"`.                     |
| `className`          | `string`                                  | An optional CSS class to apply to the root element for custom styling.                                                                      |

### `LinkEntry` Type

```typescript
interface LinkEntry {
  link: React.ReactNode; // The link element itself (e.g., <a href> or <Link>)
}

interface CollapsibleCategory {
  title: string | React.ReactNode; // The title of the category
  elements: LinkEntry[]; // The links within the category
}

interface CategoryDelimiter {
  category: string; // A string to act as a separator
}
```

## Usage Examples

### Basic Usage with Next.js `Link`

This example shows a standard navigation bar using Next.js `Link` components.

```tsx
import Link from 'next/link'
import { ResponsiveNavMenu } from 'tbsui-ssr'

<ResponsiveNavMenu
  headerItemPosition="left"
  headerItem={<Link href="/"><a>My Site</a></Link>}
  links={[
    { link: <Link href="/about"><a>About</a></Link> },
    { link: <Link href="/contact"><a>Contact</a></Link> },
  ]}
/>
```

### Advanced Usage with Collapsible Categories

Here, the menu includes a collapsible category with nested links.

```tsx
<ResponsiveNavMenu
  headerItem={<a href="/">Logo</a>}
  links={[
    { link: <a href="/page-one">Page One</a> },
    {
      title: "Products",
      elements: [
        { link: <a href="/products/a">Product A</a> },
        { link: <a href="/products/b">Product B</a> },
      ],
    },
  ]}
/>
```

### Custom Header and Scroll Behavior

This example demonstrates a more complex `headerItem` and the `scrollCollapse="card"` feature.

```tsx
import { NAVMENU_HEADER_ITEM_CLASS_COLLAPSED, NAVMENU_HEADER_SHRINK_ITEM_CLASS } from "tbsui-ssr";

<ResponsiveNavMenu
  scrollCollapse="card"
  headerItem={
    <div className="sectionhead">
      <div className={NAVMENU_HEADER_SHRINK_ITEM_CLASS}>
        <a href="/"><h1>My Awesome Title</h1></a>
      </div>
      <p>A really cool subtitle</p>
      <span className={NAVMENU_HEADER_ITEM_CLASS_COLLAPSED}>
        A short subtitle for when collapsed
      </span>
    </div>
  }
  links={/* ... */}
/>
```

In this case, the `headerItem` is a complex `div` structure. The exported CSS classes (`NAVMENU_HEADER_SHRINK_ITEM_CLASS`, `NAVMENU_HEADER_ITEM_CLASS_COLLAPSED`) are used to control how different parts of the header appear in the expanded versus the collapsed state, allowing for rich, animated transitions.

## Integration with Frameworks

The `ResponsiveNavMenu` is framework-agnostic at its core, but it's easy to integrate with frameworks like Next.js, Astro, or Remix.

### Astro Integration

When using Astro, you can create a wrapper component to make the `ResponsiveNavMenu` compatible with Astro's component model and props.

```tsx
// AstroCompatibleNavmenu.tsx
import type { FC, PropsWithChildren } from "react";
import { ResponsiveNavMenu } from "tbsui-ssr";

// ... (interface definitions for props)

export const AstroCompatibleNavmenu: FC<Props> = ({ children, links }) => {
  return (
    <ResponsiveNavMenu
      links={links.map((entry) => {
        if ("href" in entry) {
          return { link: <a href={entry.href}>{entry.title}</a> };
        } else {
          // ... (handle categories)
        }
      })}
      headerItem={children}
    />
  );
};
```

Then, in your `.astro` file:

```astro
---
import { AstroCompatibleNavmenu } from '../components/AstroCompatibleNavmenu';
---

<AstroCompatibleNavmenu links={...}>
  <div slot="header">My Astro Header</div>
</AstroCompatibleNavmenu>
```
