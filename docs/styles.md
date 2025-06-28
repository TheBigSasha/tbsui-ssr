# Styling

This document describes the styling and theming approach used in the tbsui-ssr project. The styling is designed to be highly customizable, allowing developers to tailor the look and feel of components to fit their specific needs.

## Core Concepts

### SCSS Modules

Component-level styles are encapsulated using [SCSS Modules](https://github.com/css-modules/css-modules). Each component has its own `.module.scss` file. This approach ensures that styles are scoped locally to the component, preventing CSS class name collisions and unintended side effects.

### Global Styles

Global styles, variables, and utility classes are located in the `src/lib/styles` directory.

-   `responsive.module.scss`: Provides responsive design utilities and media query mixins.
-   `variables/default-variables.scss`: Contains the default theme variables for colors, spacing, typography, etc.
-   `variables/tailwind-compatible.scss`: Offers a set of variables aligned with the popular Tailwind CSS framework for easy integration or migration.

## Theming and Customization with CSS Variables

The true power of the styling system lies in its customizability through CSS Variables (Custom Properties). By overriding these variables, you can change the entire look and feel of the components without modifying the core library code.

All core styling values are exposed as CSS variables, primarily defined in `src/lib/styles/variables/default-variables.scss`. These variables are defined at the `:root` level, making them globally accessible and easily overridable.

### How to Override CSS Variables

To customize the theme, simply redefine these CSS variables in your own global stylesheet or within a specific component's scope. Variables defined later in the cascade or with higher specificity will override the defaults.

**Example: Overriding in a Global Stylesheet**

```css
/* In your application's main CSS file (e.g., app.css) */
:root {
  --primary-color: #007bff; /* Change primary accent color to blue */
  --background-color: #f0f2f5; /* Light gray background */
  --font-sans: 'Inter', sans-serif; /* Use a different sans-serif font */
}

/* Component-specific overrides */
.my-custom-button {
  --at-button-background-color: var(--primary-color); /* Use the new primary color */
  --at-button-text-color: white;
}
```

### Key CSS Variables for Theming

Here's a breakdown of the most important CSS variables you can override, categorized by their purpose:

#### 1. Color Variables

These variables control the primary color palette of your application.

-   `--primary-color`: Main accent color, often used for interactive elements.
-   `--secondary-color`: A complementary accent color.
-   `--text-color`: Default text color.
-   `--background-color`: Main background color of the application.
-   `--second-background-color`: A secondary background color, often for subtle variations.
-   `--disabled-color`: Color for disabled states.
-   `--card-background-color`: Background color for card-like elements.
-   `--tpcard-background-color`: A transparent card background color.
-   `--info-color`, `--success-color`, `--warning-color`, `--error-color`: Semantic colors for different states.
-   `--hover-color-navmenu`: Hover effect color specifically for the navigation menu.

#### 2. Typography Variables

These variables define the font families and weights used throughout the UI.

-   `--font-family-label`: Font family for labels.
-   `--font-sans`: Default sans-serif font family.
-   `--font-serif`: Default serif font family.
-   `--font-weight-bold`, `--font-weight-normal`, `--font-weight-light`: Standard font weights.
-   `--font-xl`: A large font size variable.
-   `--tracking-condensed`: Letter spacing for condensed text.

#### 3. Spacing & Layout Variables

These variables control general spacing, padding, and layout dimensions.

-   `--padding`: General padding value.
-   `--space-md`: A medium spacing unit.
-   `--max-width`: Maximum content width for the main layout.
-   `--border-radius`: Default border-radius for rounded corners.

#### 4. Component-Specific Variables (e.g., NavMenu)

Many components expose their own set of variables for fine-grained control. The `ResponsiveNavMenu` is a prime example:

-   `--navmenu-background-color`: Background color of the navigation menu.
-   `--navmenu-background-color-collapsed`: Background color when the navmenu is collapsed.
-   `--navmenu-nestsize`: Indentation for nested menu items.
-   `--navmenu-dropdown-padding`: Padding within dropdowns.
-   `--navmenu-space-from-top`: Space from the top of the viewport.
-   `--navmenu-height-collapsed`: Height of the navmenu when collapsed.
-   `--navmenu-height-expanded`: Height of the navmenu when expanded.
-   `--navmeu_header_expanded_font_size`: Font size of the header item when expanded.
-   `--navmenu-card-width`: Width of the navmenu in 'card' mode.
-   `--navmenu-expanded-width`: Width of the navmenu when expanded.
-   `--navmenu-expanded-padding`: Padding when the navmenu is expanded.

**Example (NavMenu Customization):**

```scss
.my-custom-nav {
  --navmenu-background-color: #333; /* Dark background */
  --navmenu-height-expanded: 5rem; /* Taller menu */
  --font-sans: 'Roboto', sans-serif; /* Specific font for nav */
}
```

#### 5. Other Variables

-   `--background-blur`: A CSS filter value for background blurring effects.
-   `--background-3d-color`: Color used for 3D background elements.
-   `--header-button-height`: Height for header buttons.

### Dark Mode Support

The `default-variables.scss` file includes a `@media (prefers-color-scheme: dark)` block. This allows for automatic dark mode theming. When the user's system prefers a dark color scheme, the variables defined within this block will override the default light mode variables, providing a seamless dark theme experience.

**Example (Dark Mode Overrides):**

```scss
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff; /* White text in dark mode */
    --background-color: #1a1a1a; /* Dark background in dark mode */
    --card-background-color: #2a2a2a;
  }
}
```

## State-Based Styling with CSS Classes

The `ResponsiveNavMenu` component, and others, export CSS class names that are applied based on the component's state. You can use these classes to apply different styles for different states (e.g., expanded vs. collapsed).

**Exported Classes:**

-   `NAVMENU_EXPANDED_CLASS`: Applied when the navmenu is in its expanded state.
-   `NAVMENU_HEADER_ITEM_CLASS_EXPANDED`: A class for targeting elements inside the `headerItem` prop when the menu is expanded.
-   `NAVMENU_HEADER_ITEM_CLASS_COLLAPSED`: A class for targeting elements inside the `headerItem` prop when the menu is collapsed.
-   `NAVMENU_HEADER_SHRINK_ITEM_CLASS`: A utility class for items within the `headerItem` that should shrink.

You can use these in your own stylesheets or scripts to create powerful, state-driven animations and layouts.

**Example (Manual Scroll Behavior):**

This script adds or removes the `NAVMENU_EXPANDED_CLASS` based on scroll position, allowing for custom CSS transitions.

```html
<script define:vars={{ NAVMENU_EXPANDED_CLASS }}>
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".sashaphoto-navmenu");
    if (window.scrollY > 10) {
      navbar.classList.remove(NAVMENU_EXPANDED_CLASS);
    } else {
      navbar.classList.add(NAVMENU_EXPANDED_CLASS);
    }
  });
</script>
```
