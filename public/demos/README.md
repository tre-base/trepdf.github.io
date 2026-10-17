# TrePDF feature demos

These three looping GIFs are real application-window captures on macOS. Text editing and Form design use synthetic PDFs created for this website. OCR uses page 4 of the user-selected `PublicWaterMassMailing.pdf`, an eight-page scanned document; the original file was copied to a temporary folder and was not modified. Each has a 960 × 640 lossless WebP poster for reduced motion, stopped playback and the no-JavaScript fallback.

| Asset | Sequence | Loop | GIF size |
| --- | --- | --- | --- |
| `edit-text.gif` | Select the sample heading, enter inline editing, replace it with “Make room for better ideas.”, apply, change the text color, then deselect. | 13.3 s | 189,818 bytes |
| `form-design.gif` | Add a text field, widen it, enter a sample name, add and tick a checkbox, then add a dropdown and choose Developer. | 10.2 s | 127,278 bytes |
| `ocr.gif` | Open page 4 of PublicWaterMassMailing.pdf, choose English and Current page (4), recognize it, open the separate searchable result, and search for “Coliform”. | 10.96 s | 395,255 bytes |

## Capture method

Temporary C++ entry points were linked against the existing TrePDF production objects and compiled QML resources. They used separate application organizations/profiles and temporary documents. No application source, user document or font library was changed. UI actions use the actual controllers; text input uses the actual inline Qt text editor. Form fields are real designer drafts, not painted imitations.

Frames were captured through `QQuickWindow::grabWindow()`. Text editing and Forms use native rendering; OCR uses the Qt offscreen renderer. The capture window is 1440 × 960, reduced proportionally to 960 × 640. A shared 256-color palette, unchanged-frame merging, and delta encoding keep the GIFs small. No product controls, text or results were retouched. Capture intervals were normalized for playback and a final hold was added; these are demonstrations, not processing-speed benchmarks.

OCR completed successfully on page 4, an image-only 612 × 792 pt page containing one 1275 × 1650 JPEG, with zero skipped or empty pages. All eight pages were retained; only page 4 received OCR text. The result was opened through the normal application flow; the search controller returned one match for “Coliform” on page 4. Independent PDF inspection found 1,523 text characters on that page and confirmed that the embedded scan pixels and rendered appearance were unchanged. The source file SHA-256 remained unchanged. Single-page view keeps the recording focused on the selected page; the result is zoomed in to make the search highlight easier to see. The Form and editing sequences show unsaved draft changes, not a Save demonstration. The text-editing demo does not depict an automatic font download; that remains described in the feature copy and guide.

## Website behavior

`src/components/FeatureDemos.astro` loads the selected GIF only when at least 20% of the preview is visible. The visitor chooses Edit text, Form or OCR; the corresponding feature description is highlighted. Stop animation replaces the GIF with its poster. Leaving the viewport or hiding the page also restores the poster. Reduced-motion and data-saving preferences start with still images; visitors can explicitly enable animation.

All three feature descriptions and detail links remain in the static HTML. Without JavaScript the editing poster and all links remain usable, while animation controls are hidden. Failed GIF requests fall back to the selected poster. GIF and poster paths use the same deployment-prefix helper as the rest of the site.

To replace a demo, capture genuine supported behavior using a document you own, retain the 3:2 aspect ratio, provide both GIF and WebP files, and update the captions and alternative text if the sequence changes. Update this provenance record and run the build, SEO/link and UI checks.
