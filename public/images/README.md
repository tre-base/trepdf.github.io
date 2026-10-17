# TrePDF website images

These assets represent the actual TrePDF application. They contain no user documents or personal information.

| File | Dimensions | Source |
| --- | --- | --- |
| `app-editor.webp` | 1440 × 960 | Actual TrePDF Qt window with the Edit tab active, a selected text paragraph, and the Text Formatting panel. |
| `app-reader.webp` | 1440 × 960 | Actual TrePDF Qt window with the View tab active and page thumbnails visible. |
| `logo.png` | 128 × 128 | Resized from TrePDF's `src/assets/branding/TrePDF-icon-512.png`. |
| `favicon.png` | 64 × 64 | Resized from the same application icon. |
| `social-preview.png` | 1200 × 630 | A code-rendered social card combining the authentic editor screenshot and application logo with website typography. |

## Screenshot provenance

Captured on macOS using a temporary entry point linked against the production application objects. The entry point selects English, opens a generated demonstration PDF, adjusts the window and zoom, and captures the resulting Qt window. No application source files were changed for these captures.

The two-page **Fieldwork Journal** is a synthetic editorial sample created specifically for the website. Its text, colors, and geometric artwork are original demonstration content. It is not a customer document.

The screenshots are encoded as lossless WebP without retouching the application interface. The social card is composed with Qt QPainter; it adds website text and a background around the existing screenshot without inventing application controls.

When replacing screenshots, use a sample document you own, avoid personal paths or account details, retain the stated dimensions when practical, and update the corresponding alternative text if the pictured feature changes.

## PDF editor detail screenshots

| File | Dimensions | Source |
| --- | --- | --- |
| `app-font-preview.webp` | 1440 × 960 | Actual Settings > Font dialog with local Arial style files selected and the live font preview displayed. No fonts were installed or downloaded. |
| `app-image-edit.webp` | 1440 × 960 | Actual Edit view with the synthetic illustration selected, eight resize handles, image rotation controls, and the aspect-ratio lock. |

These additional full-window captures use the same original **Fieldwork Journal** sample, with its geometric illustration embedded as a bitmap so the application's image controls can be demonstrated. The temporary capture harness uses a separate application organization/profile; no user document or persistent user font library was modified. Both assets use lossless WebP encoding.

Suggested captions:

- Font preview: **Settings > Font: preview local font files before adding them.** This image illustrates local font import and preview, not the automatic missing-font download dialog.
- Image editing: **Select an image to resize, rotate, or keep its proportions.**
