# Components

This document provides an overview of the components in the tbsui-ssr project. The components are organized using the Atomic Design methodology.

## Atoms

Atoms are the basic building blocks of the UI.

### `AtButton`

*   **Description**: A simple button component.
*   **Location**: `src/lib/components/atoms/at-button`
*   **Usage**:

```tsx
import { AtButton } from '../src/lib/components/atoms/at-button';

<AtButton>Click me</AtButton>
```

## Molecules

Molecules are groups of atoms that function together as a unit.

### `PopupMessage`

*   **Description**: A component for displaying popup messages.
*   **Location**: `src/lib/components/molecules/popup-message`
*   **Usage**:

```tsx
import { PopupMessage } from '../src/lib/components/molecules/popup-message';

<PopupMessage>This is a popup message.</PopupMessage>
```

## Organisms

Organisms are groups of molecules that form a distinct section of an interface.

### `LayersView`

*   **Description**: A component for displaying a view with multiple layers.
*   **Location**: `src/lib/components/organisms/layers-view`

### `NavMenu`

*   **Description**: A navigation menu component.
*   **Location**: `src/lib/components/organisms/navmenu`
