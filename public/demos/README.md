# TrePDF feature demos

These three looping GIFs are real application-window captures on macOS, made with synthetic PDFs created for this website. They contain no customer documents. Each has a 960 × 640 lossless WebP poster for reduced motion, stopped playback and the no-JavaScript fallback.

| Asset | Sequence | Loop | GIF size |
| --- | --- | --- | --- |
| `edit-text.gif` | Select the sample heading, enter inline editing, replace it with “Make room for better ideas.”, apply, change the text color, then deselect. | 13.3 s | 189,818 bytes |
| `form-design.gif` | Add a text field, widen it, enter a sample name, add and tick a checkbox, then add a dropdown and choose Developer. | 10.2 s | 127,278 bytes |
| `ocr.gif` | Open Recognize Text, select English, recognize the raster-only sample, open the separate searchable result, and search for “clarity”. | 10.2 s | 256,849 bytes |

## Capture method

Temporary C++ entry points were linked against the existing TrePDF production objects and compiled QML resources. They used separate application organizations/profiles and generated documents. No application source, user document or font library was changed. UI actions use the actual controllers; text input uses the actual inline Qt text editor. Form fields are real designer drafts, not painted imitations.

Frames were captured through `QQuickWindow::grabWindow()`. Text editing and Forms use native rendering; OCR uses the Qt offscreen renderer. The capture window is 1440 × 960, reduced proportionally to 960 × 640. A shared 256-color palette, unchanged-frame merging, and delta encoding keep the GIFs small. No product controls, text or results were retouched. Capture intervals were normalized for playback and a final hold was added; these are demonstrations, not processing-speed benchmarks.

OCR completed successfully on one image-only page, with zero skipped or empty pages. The result was opened through the normal application flow; the search controller returned one match for “clarity”. The Form and editing sequences show unsaved draft changes, not a Save demonstration. The text-editing demo does not depict an automatic font download; that remains described in the feature copy and guide.

## Website behavior

`src/components/FeatureDemos.astro` loads the selected GIF only when at least 20% of the preview is visible. The visitor chooses Edit text, Form or OCR; the corresponding feature description is highlighted. Stop animation replaces the GIF with its poster. Leaving the viewport or hiding the page also restores the poster. Reduced-motion and data-saving preferences start with still images; visitors can explicitly enable animation.

All three feature descriptions and detail links remain in the static HTML. Without JavaScript the editing poster and all links remain usable, while animation controls are hidden. Failed GIF requests fall back to the selected poster. GIF and poster paths use the same deployment-prefix helper as the rest of the site.

To replace a demo, capture genuine supported behavior using a document you own, retain the 3:2 aspect ratio, provide both GIF and WebP files, and update the captions and alternative text if the sequence changes. Update this provenance record and run the build, SEO/link and UI checks.
