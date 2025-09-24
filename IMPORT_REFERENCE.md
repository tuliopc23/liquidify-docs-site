# LiqUIdify Import Path Reference

Complete guide to all correct import paths for liquidify-react components.

## Build Status
✅ All 70 pages build successfully
✅ All import paths verified and corrected
✅ No import errors

---

## Core Components (Direct Imports)

These components are at the top level and import directly:

```tsx
import { Button } from "liquidify-react/button";
import { Badge } from "liquidify-react/badge";
import { Card } from "liquidify-react/card";
import { IconButton } from "liquidify-react/iconButton";  // camelCase!
import { Icon } from "liquidify-react/icons";
import { SymbolTile } from "liquidify-react/symbolTile";  // camelCase!
```

---

## New Components (v0.6.14+)

### Modal
```tsx
import { Modal } from "liquidify-react/modal";
```

### Forms Components
```tsx
import { TextInput } from "liquidify-react/forms";
import { Textarea } from "liquidify-react/forms";
import { Select } from "liquidify-react/forms";  // Forms Select, different from Ark UI Select
```

### Segmented Control
```tsx
import { SegmentedControl } from "liquidify-react/segmented-control";  // kebab-case!
```

---

## Ark UI Components

**IMPORTANT**: All interactive components built on Ark UI use the `/ark-ui/` prefix with **camelCase** directory names.

### Pattern
```tsx
import { ComponentName } from "liquidify-react/ark-ui/componentName";
//                                                    └─ camelCase!
```

### Complete List (47 components)

```tsx
// A
import { Accordion } from "liquidify-react/ark-ui/accordion";
import { AngleSlider } from "liquidify-react/ark-ui/angleSlider";
import { Avatar } from "liquidify-react/ark-ui/avatar";

// C
import { Carousel } from "liquidify-react/ark-ui/carousel";
import { Checkbox } from "liquidify-react/ark-ui/checkbox";
import { Clipboard } from "liquidify-react/ark-ui/clipboard";
import { Collapsible } from "liquidify-react/ark-ui/collapsible";
import { ColorPicker } from "liquidify-react/ark-ui/colorPicker";
import { Combobox } from "liquidify-react/ark-ui/combobox";

// D
import { DatePicker } from "liquidify-react/ark-ui/datePicker";
import { Dialog } from "liquidify-react/ark-ui/dialog";

// E
import { Editable } from "liquidify-react/ark-ui/editable";

// F
import { Field } from "liquidify-react/ark-ui/field";
import { Fieldset } from "liquidify-react/ark-ui/fieldset";
import { FileUpload } from "liquidify-react/ark-ui/fileUpload";
import { FloatingPanel } from "liquidify-react/ark-ui/floatingPanel";

// H
import { HoverCard } from "liquidify-react/ark-ui/hoverCard";

// L
import { Listbox } from "liquidify-react/ark-ui/listbox";

// M
import { Menu } from "liquidify-react/ark-ui/menu";

// N
import { NumberInput } from "liquidify-react/ark-ui/numberInput";

// P
import { Pagination } from "liquidify-react/ark-ui/pagination";
import { PasswordInput } from "liquidify-react/ark-ui/passwordInput";
import { PinInput } from "liquidify-react/ark-ui/pinInput";
import { Popover } from "liquidify-react/ark-ui/popover";
import { Progress } from "liquidify-react/ark-ui/progress";
import { ProgressCircular } from "liquidify-react/ark-ui/progressCircular";
import { ProgressLinear } from "liquidify-react/ark-ui/progressLinear";

// Q
import { QrCode } from "liquidify-react/ark-ui/qrCode";

// R
import { RadioGroup } from "liquidify-react/ark-ui/radioGroup";
import { RatingGroup } from "liquidify-react/ark-ui/ratingGroup";

// S
import { ScrollArea } from "liquidify-react/ark-ui/scrollArea";
import { SegmentGroup } from "liquidify-react/ark-ui/segmentGroup";
import { Select } from "liquidify-react/ark-ui/select";  // Ark UI Select
import { SignaturePad } from "liquidify-react/ark-ui/signaturePad";
import { Slider } from "liquidify-react/ark-ui/slider";
import { Splitter } from "liquidify-react/ark-ui/splitter";
import { Steps } from "liquidify-react/ark-ui/steps";
import { Switch } from "liquidify-react/ark-ui/switch";

// T
import { Tabs } from "liquidify-react/ark-ui/tabs";
import { TagsInput } from "liquidify-react/ark-ui/tagsInput";
import { Timer } from "liquidify-react/ark-ui/timer";
import { Toast } from "liquidify-react/ark-ui/toast";
import { Toggle } from "liquidify-react/ark-ui/toggle";
import { ToggleGroup } from "liquidify-react/ark-ui/toggleGroup";
import { Tooltip } from "liquidify-react/ark-ui/tooltip";
import { Tour } from "liquidify-react/ark-ui/tour";
import { TreeView } from "liquidify-react/ark-ui/treeView";
```

---

## Common Mistakes to Avoid

❌ **WRONG** - kebab-case without ark-ui prefix:
```tsx
import { AngleSlider } from "liquidify-react/angle-slider";
import { ColorPicker } from "liquidify-react/color-picker";
import { NumberInput } from "liquidify-react/number-input";
import { RadioGroup } from "liquidify-react/radio-group";
```

✅ **CORRECT** - ark-ui prefix with camelCase:
```tsx
import { AngleSlider } from "liquidify-react/ark-ui/angleSlider";
import { ColorPicker } from "liquidify-react/ark-ui/colorPicker";
import { NumberInput } from "liquidify-react/ark-ui/numberInput";
import { RadioGroup } from "liquidify-react/ark-ui/radioGroup";
```

---

## Root Import (Alternative)

You can also import from the root for multiple components:

```tsx
import { Button, Badge, Card } from "liquidify-react";
```

**But note**: This imports from the main bundle, not individual subpaths, so tree-shaking may be less effective.

---

## Styles Import (Required)

Always import styles once in your app entry:

```tsx
import "liquidify-react/styles";
```

---

## Quick Lookup Table

| Component | Import Path |
|-----------|------------|
| Button | `liquidify-react/button` |
| Badge | `liquidify-react/badge` |
| Card | `liquidify-react/card` |
| Modal | `liquidify-react/modal` |
| IconButton | `liquidify-react/iconButton` |
| SymbolTile | `liquidify-react/symbolTile` |
| TextInput | `liquidify-react/forms` |
| Textarea | `liquidify-react/forms` |
| Select (forms) | `liquidify-react/forms` |
| SegmentedControl | `liquidify-react/segmented-control` |
| All Ark UI (47) | `liquidify-react/ark-ui/[camelCaseName]` |

---

## MDX Usage in Astro

For live component demos in Astro MDX:

```tsx
---
layout: ../../../layouts/DocsLayout.astro
---

import { Button } from "liquidify-react/button";
import ButtonDemo from "../../../components/demos/ButtonDemo.tsx";

# Component Name

## Live Demo

<ButtonDemo client:load />
```

**Key points**:
- Import component for types/reference
- Create separate demo component file
- Use `client:load` or `client:only="react"` directive
- No inline JSX exports in MDX (Astro limitation)

---

Generated: 2024-09-30
Library Version: liquidify-react@0.6.14
Documentation Build: ✅ Success (70 pages)
