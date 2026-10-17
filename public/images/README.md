# TrePDF website images

These assets represent the actual TrePDF application. Synthetic samples and explicitly selected demonstration documents are described below.

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

## PDF form designer screenshots

| File | Dimensions | Source |
| --- | --- | --- |
| `app-form-designer.webp` | 1440 × 960 | Actual Forms tab with a name field, role dropdown and checkbox on a synthetic registration form. |
| `app-form-text-field.webp` | 1440 × 960 | Selected text field with resize handles and the multi-line/character-limit options panel. |
| `app-form-dropdown.webp` | 1440 × 960 | Selected dropdown with Designer, Developer and Student options in its properties panel; the checkbox is checked. |

These lossless WebP images are full-resolution frames from the same native Qt capture used for `demos/form-design.gif` (frames 089, 035 and 065 respectively). **Workshop Registration.pdf** is an original synthetic sample; the displayed name and roles are demonstration data. The captures show unsaved design previews, not a saved/reopened result. No application controls were added or retouched. The temporary capture profile is separate from the user's application settings. See `../demos/README.md` for the recording workflow.

## OCR screenshots

| File | Dimensions | Source |
| --- | --- | --- |
| `app-ocr-source.webp` | 960 × 640 | Actual View tab showing the image-only page 4 of the user-selected `PublicWaterMassMailing.pdf`. |
| `app-ocr-search.webp` | 960 × 640 | Separate OCR output opened in a new tab, zoomed to 160%, with one search result for “Coliform” highlighted on page 4. |
| `app-ocr-settings.webp` | 960 × 640 | Convert > Recognize Text (OCR) with English and Current page (4) selected. |

These lossless WebP images use frames `0004-source.png`, `0070-search.png` and `0020-panel.png` from the genuine OCR demo described in `../demos/README.md`. The source and setup captures use 91% zoom; the result uses 160% to make the match readable. This is a search demonstration, not a same-scale visual comparison. No interface controls, recognized text or highlights were retouched. The original file in Downloads was never overwritten; recognition ran on a temporary copy and created a separate temporary result. All eight pages were retained and only page 4 received the text layer.
