import type { Lang } from './languages';
import { thaiArticles } from './locales/th';
import { frenchArticles } from './locales/fr';

export interface Article {
  id: string;
  lang: Lang;
  slug: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  sections: { heading: string; paragraphs?: string[]; items?: string[] }[];
  related: string[];
}

export const articles: Article[] = [
  ...thaiArticles,
  ...frenchArticles,
  {
    id: 'editor',
    lang: 'en',
    slug: 'features/pdf-editor',
    title: 'Edit PDF Text, Images & Fonts | TrePDF',
    description: 'Edit supported PDF text and images with TrePDF. Change fonts, download missing font styles, arrange pages, and review your changes before saving.',
    heading: 'Edit your PDF, on the page.',
    intro: 'Update text, add images, and arrange pages. Keep control of every change before you save.',
    sections: [
      {
        heading: 'Edit text directly',
        paragraphs: [
          'Select supported text to change its wording, font, size, or color. Add a text box for new content.',
        ],
      },
      {
        heading: 'Missing font? Get a little help.',
        paragraphs: [
          'TrePDF automatically detects missing fonts. Confirm to download available matching styles over the internet, or choose a supported alternative.',
        ],
      },
      {
        heading: 'Arrange images and pages',
        paragraphs: [
          'Add images, or move and resize supported existing images. Insert blank pages, remove pages, or merge PDFs into a separate document.',
        ],
      },
      {
        heading: 'Undo, review, then save',
        paragraphs: [
          'Undo or redo while editing. Changes stay in drafts until saved; use Save As to create a copy and keep the original.',
        ],
      },
    ],
    related: ['fonts', 'annotations', 'getting-started'],
  },
  {
    id: 'editor',
    lang: 'vi',
    slug: 'vi/tinh-nang/chinh-sua-pdf',
    title: 'Chỉnh sửa chữ, hình ảnh và font trong PDF | TrePDF',
    description: 'Chỉnh sửa chữ và hình ảnh PDF với TrePDF. Đổi kiểu chữ, hỗ trợ tải font còn thiếu, sắp xếp trang và kiểm tra thay đổi trước khi lưu.',
    heading: 'Chỉnh sửa PDF ngay trên trang.',
    intro: 'Sửa chữ, thêm ảnh, sắp xếp trang và kiểm tra kết quả trước khi lưu.',
    sections: [
      {
        heading: 'Sửa chữ trực tiếp',
        paragraphs: [
          'Chọn văn bản được hỗ trợ để sửa nội dung, đổi font, cỡ chữ hoặc màu. Thêm hộp văn bản khi cần bổ sung thông tin.',
        ],
      },
      {
        heading: 'Thiếu font? TrePDF giúp bạn tìm.',
        paragraphs: [
          'TrePDF tự phát hiện font còn thiếu. Xác nhận để tải kiểu chữ phù hợp nếu có sẵn; cần kết nối Internet. Bạn cũng có thể chọn font thay thế.',
        ],
      },
      {
        heading: 'Sắp xếp ảnh và trang',
        paragraphs: [
          'Thêm ảnh, di chuyển và đổi kích thước ảnh có sẵn được hỗ trợ. Chèn trang trắng, xóa trang hoặc ghép PDF thành tài liệu riêng.',
        ],
      },
      {
        heading: 'Hoàn tác, kiểm tra rồi lưu',
        paragraphs: [
          'Hoàn tác hoặc làm lại khi chỉnh sửa. Thay đổi chỉ được ghi khi lưu; dùng Lưu thành để tạo bản sao và giữ bản gốc.',
        ],
      },
    ],
    related: ['fonts', 'annotations', 'getting-started'],
  },
  {
    id: 'ocr',
    lang: 'en',
    slug: 'features/pdf-ocr',
    title: 'PDF OCR for English & Vietnamese Documents | TrePDF',
    description: 'Make scanned PDFs searchable with local English and Vietnamese OCR in TrePDF. Keep the original page images and save a separate searchable PDF.',
    heading: 'Find the words inside your scanned PDFs.',
    intro: 'Find a name, copy a passage, or search a scanned report. TrePDF recognizes English and Vietnamese locally and creates a separate PDF with searchable text.',
    sections: [
      {
        heading: 'Keep the page you scanned',
        paragraphs: [
          'Your original page images, illustrations, and stamps stay intact. OCR adds an invisible text layer for searching and selecting words while the visible page remains the scan. Recognition runs on your computer without uploading the PDF.',
        ],
      },
      {
        heading: 'Create a searchable PDF',
        items: [
          'Open your PDF, save pending edits, then choose Convert → Recognize Text (OCR).',
          'Select English or Vietnamese and choose all pages, the current page, or a page range.',
          'Choose where to save the separate result. It opens in a new tab when complete, ready to search and compare with the source.',
        ],
      },
      {
        heading: 'Mixed documents need less repeated work',
        paragraphs: [
          'TrePDF skips pages that already contain text and recognizes the scanned pages that need it. An existing text layer stays as it is, so OCR cannot replace inaccurate recognition already in the PDF.',
        ],
      },
      {
        heading: 'Check the words that matter',
        paragraphs: [
          'Clear, upright scans give better results. Try searching a few visible words, then check names, dates, numbers, and Vietnamese accents before copying text. OCR makes the scan searchable; the scanned image itself does not become editable text.',
        ],
      },
    ],
    related: ['getting-started', 'annotations', 'editor'],
  },
  {
    id: 'ocr',
    lang: 'vi',
    slug: 'vi/tinh-nang/ocr-pdf',
    title: 'OCR PDF tiếng Việt và tiếng Anh | TrePDF',
    description: 'Nhận dạng chữ trong PDF scan bằng OCR tiếng Việt và tiếng Anh trên máy tính. TrePDF giữ ảnh trang gốc và tạo một bản PDF có thể tìm kiếm riêng.',
    heading: 'Tìm được nội dung bên trong PDF scan.',
    intro: 'Tìm tên, tra nội dung và sao chép chữ trong PDF scan. TrePDF nhận dạng tiếng Việt, tiếng Anh tại máy và tạo bản PDF riêng có thể tìm kiếm.',
    sections: [
      {
        heading: 'Giữ nguyên trang tài liệu đã scan',
        paragraphs: [
          'Ảnh trang, hình minh họa và con dấu vẫn giữ nguyên. OCR thêm lớp chữ ẩn để tìm kiếm và chọn văn bản, không cần tải PDF lên mạng.',
        ],
      },
      {
        heading: 'Tạo bản PDF có thể tìm kiếm',
        items: [
          'Mở PDF, lưu thay đổi đang có, chọn Chuyển đổi → Nhận dạng văn bản (OCR).',
          'Chọn tiếng Việt hoặc tiếng Anh; chọn tất cả, trang hiện tại hoặc phạm vi trang.',
          'Chọn nơi lưu bản kết quả riêng. Khi hoàn tất, PDF mở trong tab mới để tìm kiếm và đối chiếu với bản nguồn.',
        ],
      },
      {
        heading: 'Hạn chế nhận dạng lặp lại trong tài liệu hỗn hợp',
        paragraphs: [
          'TrePDF bỏ qua trang đã có văn bản và nhận dạng các trang scan còn lại. Lớp chữ sẵn có được giữ nguyên, kể cả khi nhận dạng trước đó chưa chính xác.',
        ],
      },
      {
        heading: 'Kiểm tra những thông tin quan trọng',
        paragraphs: [
          'Bản scan rõ, thẳng cho kết quả tốt hơn. Thử tìm vài từ; kiểm tra tên, ngày, số liệu và dấu tiếng Việt. OCR không biến ảnh scan thành chữ chỉnh sửa được.',
        ],
      },
    ],
    related: ['getting-started', 'annotations', 'editor'],
  },
  {
    id: 'annotations',
    lang: 'en',
    slug: 'features/annotate-pdf',
    title: 'Annotate PDFs with Highlights, Notes & Comments | TrePDF',
    description: 'Review PDFs with highlights, sticky notes, free text, drawing tools, and comment replies. Save your annotations in the PDF with TrePDF.',
    heading: 'Leave feedback exactly where it belongs.',
    intro: 'Highlight the sentence you want to discuss, add a note beside a detail, or sketch a correction. TrePDF keeps PDF annotations close to the content so your feedback is easier to follow.',
    sections: [
      {
        heading: 'Highlight words, not just a rectangle',
        paragraphs: [
          'Use Highlight, Underline, Strikeout, or Squiggly to mark text passages. On supported horizontal text, TrePDF follows the words you select and builds marks along their lines. This helps a reviewer see precisely which sentence needs attention.',
          'These text markup tools need usable text on the page. A scan that only contains an image cannot provide word positions. Run OCR first when you want searchable text and text-aware highlighting on a supported scanned document. You can still use notes and drawing tools without a text layer.',
        ],
      },
      {
        heading: 'Choose the right kind of annotation',
        items: [
          'Sticky notes keep a longer explanation in the comment panel while leaving a small marker on the page.',
          'Free Text places a visible text box on the page for a label or short instruction.',
          'Rectangles, circles, lines, polygons, and freehand ink help call attention to visual details.',
          'Stamps add a visible review label, such as Approved or For Comment, to a document.',
        ],
      },
      {
        heading: 'Keep the conversation with the document',
        paragraphs: [
          'Open the comments panel to read notes and add replies. Comment cards show available author and date information, making it easier to understand the review history. You can also set a review status or mark a comment with a checkmark as you work through feedback.',
          'Supported existing annotations can be selected and edited alongside new ones. Some imported annotations have protected content or appearances that TrePDF cannot safely change. They remain available for reading where supported, without forcing a rewrite of their appearance.',
        ],
      },
      {
        heading: 'Save a review copy',
        paragraphs: [
          'New annotations and supported comment edits are drafts until you save. Undo and Redo let you correct a misplaced mark or reconsider a note. Use Save As when you want a review copy with a distinct filename and an untouched source.',
          'TrePDF saves annotations into the PDF rather than keeping feedback only inside the app. After saving, reopen the file and check the result before sending it. Other PDF readers may present comment panels and review statuses differently, so check your recipient’s reader when a particular review workflow matters.',
          'Annotations communicate feedback without changing the original page text. When you are ready to make the actual correction, switch to Edit and update a supported text object.',
        ],
      },
    ],
    related: ['ocr', 'editor', 'getting-started'],
  },
  {
    id: 'annotations',
    lang: 'vi',
    slug: 'vi/tinh-nang/chu-thich-pdf',
    title: 'Chú thích PDF, tô sáng và thêm bình luận | TrePDF',
    description: 'Đọc và nhận xét PDF bằng tô sáng, ghi chú, hộp chữ, công cụ vẽ và trả lời bình luận. TrePDF lưu các chú thích cùng tài liệu PDF.',
    heading: 'Đặt lời góp ý ngay cạnh nội dung cần xem.',
    intro: 'Tô sáng câu muốn thảo luận, đặt ghi chú cạnh một chi tiết hoặc vẽ hướng sửa. TrePDF giữ chú thích PDF gần với nội dung để người đọc dễ hiểu phản hồi của bạn.',
    sections: [
      {
        heading: 'Tô sáng theo chữ và dòng văn bản',
        paragraphs: [
          'Dùng Tô sáng, Gạch chân, Gạch ngang hoặc Gạch lượn sóng để đánh dấu đoạn văn. Với văn bản ngang được hỗ trợ, TrePDF bám theo những chữ bạn chọn và tạo dấu theo từng dòng. Người xem nhờ đó biết rõ câu nào cần chú ý.',
          'Các công cụ đánh dấu văn bản cần có lớp chữ sử dụng được trên trang. Bản scan chỉ chứa ảnh không cung cấp vị trí từng từ. Bạn có thể chạy OCR trước để tìm kiếm và tô sáng theo chữ trên tài liệu scan được hỗ trợ. Ghi chú và công cụ vẽ vẫn sử dụng được khi chưa có lớp văn bản.',
        ],
      },
      {
        heading: 'Chọn kiểu chú thích phù hợp',
        items: [
          'Ghi chú giữ lời giải thích trong bảng bình luận và chỉ đặt một dấu nhỏ trên trang.',
          'Hộp văn bản chú thích hiển thị lời nhắc hoặc nhãn ngắn ngay trên trang.',
          'Hình chữ nhật, hình tròn, đường thẳng, đa giác và nét vẽ tay giúp chỉ ra chi tiết hình ảnh.',
          'Con dấu thêm nhãn kiểm duyệt dễ thấy, chẳng hạn Đã duyệt hoặc Để góp ý.',
        ],
      },
      {
        heading: 'Giữ trao đổi cùng với tài liệu',
        paragraphs: [
          'Mở bảng bình luận để đọc ghi chú và thêm trả lời. Thẻ bình luận hiển thị tác giả và thời gian khi tài liệu có những thông tin này, giúp theo dõi quá trình xem xét. Bạn cũng có thể đặt trạng thái hoặc đánh dấu kiểm khi xử lý từng ý kiến.',
          'Các chú thích hiện có được hỗ trợ có thể được chọn và chỉnh sửa cùng với chú thích mới. Một số chú thích nhập từ ứng dụng khác có nội dung được bảo vệ hoặc diện mạo TrePDF chưa thể sửa an toàn. Chúng vẫn có thể được đọc ở những phần được hỗ trợ mà không bị ép thay đổi cách hiển thị.',
        ],
      },
      {
        heading: 'Lưu một bản dành cho việc góp ý',
        paragraphs: [
          'Chú thích mới và các thay đổi bình luận được hỗ trợ vẫn là bản nháp cho đến khi lưu. Hoàn tác và Làm lại giúp sửa dấu đặt nhầm hoặc xem lại lời góp ý. Dùng Lưu thành để tạo bản nhận xét có tên riêng và giữ nguyên bản nguồn.',
          'TrePDF lưu chú thích vào PDF, thay vì chỉ giữ lời góp ý trong ứng dụng. Sau khi lưu, hãy mở lại để kiểm tra trước khi gửi. Các trình đọc PDF có thể hiển thị bảng bình luận và trạng thái đánh giá khác nhau; nếu quy trình trao đổi phụ thuộc vào một cách hiển thị cụ thể, hãy kiểm tra trên trình đọc của người nhận.',
          'Chú thích giúp trao đổi mà không sửa chữ gốc trên trang. Khi cần thực hiện thay đổi nội dung, hãy chuyển sang Chỉnh sửa và cập nhật đối tượng văn bản được hỗ trợ.',
        ],
      },
    ],
    related: ['ocr', 'editor', 'getting-started'],
  },
  {
    id: 'getting-started',
    lang: 'en',
    slug: 'guides/getting-started',
    title: 'Get Started with the TrePDF Desktop PDF Editor',
    description: 'Learn the TrePDF workflow: open a PDF, read and search, edit supported content, add comments, fill forms, and save a separate copy.',
    heading: 'Your first document in TrePDF.',
    intro: 'Start with a PDF you know well. This short guide takes you from opening the file to reviewing and saving your first changes, with a few pointers for scans and forms along the way.',
    sections: [
      {
        heading: '1. Open and find your way around',
        paragraphs: [
          'Use Open to choose a local PDF, or drag a file into the application. TrePDF opens documents in separate tabs, so you can keep a source and a reference beside each other in your workspace. A password-protected file requires its opening password.',
          'Use thumbnails to jump between pages, choose a comfortable zoom, and select the page display that suits the document. Continuous scrolling works well for reading; facing pages help when a publication is designed as spreads. Split view lets you consult another part of the same document while you work.',
        ],
      },
      {
        heading: '2. Choose the tool for your task',
        items: [
          'View: read pages, search saved text, select a passage, and copy it when the document permits copying.',
          'Edit: update supported text and images, add content, and work with pages.',
          'Comment: highlight passages, add notes, draw marks, and reply to feedback.',
          'Forms: create supported form fields. Use the normal reading view to fill interactive fields in an existing form.',
          'Convert: recognize text in scans or export supported text-based, ruled tables to Excel.',
        ],
      },
      {
        heading: '3. Make one small change',
        paragraphs: [
          'Try correcting a word in an editable text object or adding a note. If a required font is missing, follow the font prompt and review the available download or replacement options. Check the line after editing, especially if you changed the font or made the text longer.',
          'A scan may look like text but contain only an image. OCR can add a searchable layer for English and Vietnamese documents. It creates a separate PDF and does not convert the scanned page into editable paragraphs. For Excel export, the current table workflow expects text-based tables with visible, closed grid borders.',
        ],
      },
      {
        heading: '4. Review and save a copy',
        paragraphs: [
          'Use Undo and Redo for supported draft edits. Save writes your accepted changes; Save As creates a separate file. For your first document, a separate copy makes it easy to compare the result with the original. Reopen the saved file to check the edited text, images, comments, and any form values.',
          'Some operations, including OCR, require a clean saved source. Save or discard pending changes before starting them. When placing a visible signature, remember that it is an image of your signature or initials: TrePDF’s visible signing tools do not create or validate a certificate-based digital signature.',
        ],
      },
    ],
    related: ['editor', 'fonts', 'ocr'],
  },
  {
    id: 'getting-started',
    lang: 'vi',
    slug: 'vi/huong-dan/bat-dau',
    title: 'Bắt đầu sử dụng phần mềm chỉnh sửa PDF TrePDF',
    description: 'Hướng dẫn mở PDF, đọc và tìm kiếm, chỉnh sửa nội dung, thêm bình luận, điền biểu mẫu và lưu một bản riêng bằng TrePDF.',
    heading: 'Tài liệu đầu tiên của bạn trong TrePDF.',
    intro: 'Hãy bắt đầu với một PDF bạn đã quen thuộc. Hướng dẫn ngắn này giúp bạn mở tệp, kiểm tra và lưu thay đổi đầu tiên, đồng thời phân biệt cách làm việc với bản scan và biểu mẫu.',
    sections: [
      {
        heading: '1. Mở tài liệu và làm quen với không gian làm việc',
        paragraphs: [
          'Dùng Mở để chọn PDF trên máy hoặc kéo tệp vào cửa sổ ứng dụng. TrePDF mở mỗi tài liệu trong một tab riêng, để bạn có thể giữ cả bản nguồn và tài liệu tham khảo trong không gian làm việc. Với tệp có mật khẩu mở, bạn cần nhập đúng mật khẩu.',
          'Dùng hình thu nhỏ để chuyển trang, chọn mức thu phóng dễ đọc và kiểu hiển thị phù hợp. Cuộn liên tục thuận tiện khi đọc; trang đối diện phù hợp với tài liệu thiết kế theo cặp trang. Chế độ chia đôi cho phép xem một phần khác của cùng tài liệu trong lúc làm việc.',
        ],
      },
      {
        heading: '2. Chọn công cụ theo công việc',
        items: [
          'Xem: đọc trang, tìm trong văn bản đã lưu, chọn và sao chép đoạn chữ khi tài liệu cho phép.',
          'Chỉnh sửa: cập nhật chữ và ảnh được hỗ trợ, thêm nội dung và thao tác với các trang.',
          'Bình luận: tô sáng, thêm ghi chú, vẽ dấu và trả lời góp ý.',
          'Biểu mẫu: tạo các trường biểu mẫu được hỗ trợ. Để điền biểu mẫu sẵn có, dùng chế độ đọc thông thường.',
          'Chuyển đổi: nhận dạng chữ trong bản scan hoặc xuất bảng có chữ và đường kẻ được hỗ trợ sang Excel.',
        ],
      },
      {
        heading: '3. Thử một thay đổi nhỏ',
        paragraphs: [
          'Thử sửa một từ trong đối tượng văn bản chỉnh sửa được hoặc thêm một ghi chú. Nếu thiếu font cần dùng, hãy xem thông báo và các lựa chọn tải hoặc thay thế font. Kiểm tra lại dòng sau khi sửa, nhất là khi đổi font hoặc nhập nội dung dài hơn.',
          'Bản scan có thể trông như văn bản nhưng thực chất chỉ chứa ảnh. OCR giúp thêm lớp chữ để tìm kiếm cho tài liệu tiếng Việt và tiếng Anh. Công cụ tạo PDF riêng, không chuyển trang scan thành đoạn văn có thể chỉnh sửa. Với xuất Excel, quy trình hiện tại cần bảng có văn bản và các đường kẻ tạo thành lưới khép kín.',
        ],
      },
      {
        heading: '4. Kiểm tra và lưu một bản riêng',
        paragraphs: [
          'Dùng Hoàn tác và Làm lại cho những chỉnh sửa bản nháp được hỗ trợ. Lưu ghi các thay đổi đã chấp nhận; Lưu thành tạo một tệp riêng. Với lần dùng đầu tiên, lưu bản riêng giúp bạn so sánh với bản gốc dễ hơn. Mở lại tệp đã lưu để kiểm tra chữ, ảnh, bình luận và các giá trị biểu mẫu.',
          'Một số thao tác, bao gồm OCR, cần nguồn đã lưu và không có thay đổi chờ xử lý. Hãy lưu hoặc bỏ bản nháp trước khi bắt đầu. Khi đặt chữ ký hiển thị, lưu ý đó là ảnh chữ ký hoặc chữ viết tắt của bạn: công cụ ký hiển thị của TrePDF không tạo hoặc xác thực chữ ký số dựa trên chứng thư.',
        ],
      },
    ],
    related: ['editor', 'fonts', 'ocr'],
  },
  {
    id: 'fonts',
    lang: 'en',
    slug: 'guides/automatic-font-download',
    title: 'Missing Fonts in a PDF? Automatic Font Downloads | TrePDF',
    description: 'Learn how TrePDF detects missing fonts, helps download available font styles with your approval, and supports local font imports for PDF editing.',
    heading: 'A missing font does not have to stop your edit.',
    intro: 'TrePDF detects missing fonts during supported PDF text editing and helps you obtain available font styles. You approve the download before it starts, then check the edited text in place.',
    sections: [
      {
        heading: 'Why a PDF can display a font you cannot edit with',
        paragraphs: [
          'A PDF can contain enough font information to draw the existing page without providing a complete font for new text. The original font may also be absent from your computer. As a result, viewing a paragraph and editing that paragraph can have different font requirements.',
          'This often becomes visible when you add a name or change a sentence: the new characters need a usable font face. A replacement may have different letter widths, changing the length of a line. Choosing the matching family and style helps reduce those differences.',
        ],
      },
      {
        heading: 'Follow the font prompt',
        items: [
          'Select the supported text you want to edit. If a required font is unavailable, review TrePDF’s font prompt.',
          'Check the family and available styles. Regular, Bold, Italic, and Bold Italic are distinct faces and may not all be available.',
          'Confirm the download when a suitable font is offered. An internet connection is needed to obtain the font files.',
          'Return to your edit and check character shapes, accents, line endings, and spacing before saving.',
        ],
      },
      {
        heading: 'Bring your own font when you have it',
        paragraphs: [
          'Settings > Font lets you import local TTF or OTF files for a font family, with separate files for the styles you have. The preview helps you inspect the chosen face before adding it. Use font files that you have permission to use, and keep the actual style names consistent with your selection.',
          'Imported and downloaded fonts become available through the app’s font workflow. Missing styles remain unavailable rather than being treated as though the exact face exists. If a font cannot supply the characters in your text, select a suitable alternative and inspect the result.',
        ],
      },
      {
        heading: 'What automatic downloads can and cannot do',
        paragraphs: [
          'Automatic detection reduces the work of identifying a missing font, but availability depends on the font provider. It cannot guarantee access to every commercial or custom typeface. A downloaded font with a related name may also differ from the version used to create the document.',
          'For a short correction, check the whole edited line. For a longer replacement, check wrapping and the text box as well. Save a separate copy when the original layout matters. If the correct font is unavailable, adding a comment may be more appropriate than changing a carefully composed source document.',
        ],
      },
    ],
    related: ['editor', 'getting-started', 'privacy'],
  },
  {
    id: 'fonts',
    lang: 'vi',
    slug: 'vi/huong-dan/tu-dong-tai-font',
    title: 'Tự động tải font còn thiếu khi sửa PDF | TrePDF',
    description: 'Tìm hiểu cách TrePDF phát hiện font thiếu, hỗ trợ tải kiểu chữ có sẵn sau khi xác nhận và nhập font TTF, OTF để chỉnh sửa PDF.',
    heading: 'Thiếu font vẫn có cách để tiếp tục chỉnh sửa.',
    intro: 'TrePDF phát hiện font còn thiếu khi chỉnh sửa văn bản PDF được hỗ trợ và giúp bạn tải những kiểu chữ phù hợp có sẵn. Bạn xác nhận trước khi tải, rồi kiểm tra văn bản ngay trong tài liệu.',
    sections: [
      {
        heading: 'Vì sao PDF hiển thị đúng nhưng vẫn thiếu font để sửa?',
        paragraphs: [
          'PDF có thể chứa đủ thông tin font để vẽ trang hiện tại mà không cung cấp một bộ font đầy đủ cho chữ mới. Font gốc cũng có thể chưa được cài trên máy của bạn. Vì vậy, đọc một đoạn văn và chỉnh sửa đoạn đó có thể cần những nguồn font khác nhau.',
          'Điều này thường xuất hiện khi bạn thêm tên hoặc sửa câu: các ký tự mới cần một kiểu chữ sử dụng được. Font thay thế có thể có độ rộng ký tự khác, làm thay đổi chiều dài dòng. Chọn đúng họ font và kiểu chữ giúp hạn chế những khác biệt này.',
        ],
      },
      {
        heading: 'Làm theo thông báo về font',
        items: [
          'Chọn văn bản được hỗ trợ cần sửa. Nếu font cần dùng chưa có, xem thông báo font của TrePDF.',
          'Kiểm tra họ font và các kiểu có sẵn. Thường, đậm, nghiêng và đậm nghiêng là các kiểu riêng, không phải lúc nào cũng có đủ.',
          'Xác nhận tải khi có font phù hợp được đề xuất. Bạn cần kết nối internet để tải các tệp font.',
          'Quay lại nội dung đang sửa và kiểm tra hình dáng ký tự, dấu tiếng Việt, vị trí xuống dòng và khoảng cách trước khi lưu.',
        ],
      },
      {
        heading: 'Nhập font bạn đã có trên máy',
        paragraphs: [
          'Cài đặt > Font cho phép nhập tệp TTF hoặc OTF cho một họ font, với tệp riêng cho từng kiểu chữ bạn có. Khung xem trước giúp kiểm tra kiểu chữ đã chọn trước khi thêm. Hãy dùng những tệp font mà bạn có quyền sử dụng và chọn đúng kiểu thực tế của tệp.',
          'Font nhập từ máy và font tải về được dùng trong quy trình chọn font của ứng dụng. Những kiểu còn thiếu tiếp tục được hiển thị là chưa có, thay vì được xem như đã có đúng kiểu chữ. Nếu font không có đủ ký tự cho nội dung, hãy chọn phương án phù hợp khác và kiểm tra lại.',
        ],
      },
      {
        heading: 'Tải font tự động giải quyết được những gì?',
        paragraphs: [
          'Phát hiện tự động giảm công tìm kiếm tên font bị thiếu, nhưng khả năng tải vẫn phụ thuộc vào nhà cung cấp. Công cụ không bảo đảm có mọi font thương mại hoặc font thiết kế riêng. Font tải về có tên tương tự cũng có thể khác phiên bản đã dùng để tạo tài liệu.',
          'Với thay đổi ngắn, hãy kiểm tra toàn bộ dòng vừa sửa. Với nội dung dài, xem thêm cách xuống dòng và khung chữ. Lưu bản riêng khi cần giữ bố cục gốc. Nếu không có đúng font, thêm một bình luận có thể phù hợp hơn việc sửa trực tiếp tài liệu đã được dàn trang cẩn thận.',
        ],
      },
    ],
    related: ['editor', 'getting-started', 'privacy'],
  },
  {
    id: 'privacy',
    lang: 'en',
    slug: 'privacy',
    title: 'Privacy: Documents, Font Downloads & Website | TrePDF',
    description: 'How TrePDF handles local PDFs, OCR, optional font downloads, and this website. Learn when a network connection is involved.',
    heading: 'Understand where your document goes.',
    intro: 'TrePDF is a desktop application that works with files on your computer. This page explains the distinction between local document work, optional font downloads, and visiting this website.',
    sections: [
      {
        heading: 'Working with PDFs on your computer',
        paragraphs: [
          'Opening, rendering, editing, and saving supported PDF content happens locally. The OCR workflow also recognizes text on your computer and writes a separate result file. These workflows do not require uploading your document to a TrePDF cloud processing service.',
          'You choose where to save your files. If that location is managed by a cloud drive, backup tool, or shared folder, that service may copy or synchronize your files under its own settings. Consider those settings when working with confidential documents.',
        ],
      },
      {
        heading: 'Font downloads use a network connection',
        paragraphs: [
          'When you approve a font download, TrePDF contacts the relevant font provider to obtain the requested files. The provider receives the information needed for that network request, such as the requested resource and your network address. Downloading a font is separate from uploading a PDF.',
          'Fonts imported from local TTF or OTF files and fonts downloaded through the app are stored locally for use in the font workflow. Font providers have their own terms and privacy practices.',
        ],
      },
      {
        heading: 'Visiting this website',
        paragraphs: [
          'This site presents product information and guides. It has no document upload form, account registration, advertising scripts, or analytics added by TrePDF. Its styles, fonts, and images are served with the site.',
          'The site is hosted on GitHub Pages. Hosting involves requests to GitHub infrastructure, and GitHub may process technical information associated with those requests under its privacy statement. Following an external link takes you to a service with its own privacy practices.',
        ],
      },
    ],
    related: ['fonts', 'ocr', 'getting-started'],
  },
  {
    id: 'privacy',
    lang: 'vi',
    slug: 'vi/quyen-rieng-tu',
    title: 'Quyền riêng tư: tài liệu, tải font và website | TrePDF',
    description: 'Cách TrePDF xử lý PDF trên máy, OCR, tải font theo yêu cầu và truy cập website. Tìm hiểu những trường hợp cần kết nối mạng.',
    heading: 'Hiểu rõ tài liệu của bạn được xử lý ở đâu.',
    intro: 'TrePDF là ứng dụng máy tính làm việc với các tệp trên máy của bạn. Trang này giải thích việc xử lý tài liệu tại máy, tải font theo lựa chọn và truy cập website.',
    sections: [
      {
        heading: 'Làm việc với PDF trên máy tính',
        paragraphs: [
          'Việc mở, hiển thị, chỉnh sửa và lưu nội dung PDF được hỗ trợ diễn ra tại máy. OCR cũng nhận dạng chữ trên máy tính và ghi một tệp kết quả riêng. Những quy trình này không yêu cầu tải tài liệu lên dịch vụ xử lý đám mây của TrePDF.',
          'Bạn chọn nơi lưu tệp. Nếu nơi lưu thuộc ổ đĩa đám mây, công cụ sao lưu hoặc thư mục chia sẻ, dịch vụ đó có thể sao chép hay đồng bộ tệp theo thiết lập riêng. Hãy xem lại các thiết lập này khi làm việc với tài liệu cần giữ kín.',
        ],
      },
      {
        heading: 'Tải font có sử dụng kết nối mạng',
        paragraphs: [
          'Khi bạn xác nhận tải font, TrePDF kết nối đến nhà cung cấp liên quan để lấy các tệp được yêu cầu. Nhà cung cấp nhận thông tin cần thiết cho kết nối, chẳng hạn tài nguyên được yêu cầu và địa chỉ mạng của bạn. Tải font là thao tác riêng với việc tải lên tài liệu PDF.',
          'Font nhập từ tệp TTF, OTF trên máy và font tải qua ứng dụng được lưu tại máy để dùng trong quy trình chọn font. Các nhà cung cấp font có điều khoản và cách xử lý quyền riêng tư riêng.',
        ],
      },
      {
        heading: 'Khi truy cập website này',
        paragraphs: [
          'Website cung cấp thông tin sản phẩm và hướng dẫn. Trang không có biểu mẫu tải tài liệu lên, đăng ký tài khoản, mã quảng cáo hoặc công cụ phân tích truy cập do TrePDF thêm vào. Kiểu hiển thị, font và hình ảnh được phục vụ cùng website.',
          'Website được lưu trữ trên GitHub Pages. Truy cập trang tạo kết nối đến hạ tầng GitHub; GitHub có thể xử lý thông tin kỹ thuật của những kết nối này theo tuyên bố quyền riêng tư của họ. Khi mở liên kết bên ngoài, bạn chuyển đến dịch vụ có cách xử lý quyền riêng tư riêng.',
        ],
      },
    ],
    related: ['fonts', 'ocr', 'getting-started'],
  },
  {
    id: 'changelog',
    lang: 'en',
    slug: 'changelog',
    title: 'TrePDF Updates & Release Notes',
    description: 'Follow TrePDF development and future release notes. Public installer links, verified platform requirements, and release details will be added here.',
    heading: 'What is happening with TrePDF.',
    intro: 'TrePDF is currently in development preview. Public download links and a public release history have not been published on this website yet.',
    sections: [
      {
        heading: 'What the current preview explores',
        items: [
          'Desktop PDF reading, search, text selection, thumbnails, and multiple document tabs.',
          'Supported text and image editing, missing-font assistance, page tools, and Save As.',
          'Comments, text highlights, drawing annotations, interactive forms, and visible signatures.',
          'Local English and Vietnamese OCR that creates a separate searchable PDF.',
        ],
        paragraphs: ['These pages describe the current project capabilities. They are not a release announcement or a promise that every workflow supports every PDF. The feature guides explain the relevant limits.'],
      },
      {
        heading: 'What you will find here at release',
        paragraphs: [
          'Each published release will list its version, release date, notable changes, known limitations, and links to the available installers. Platform and architecture information will be stated alongside the corresponding download.',
          'Until those installers are ready, the download page keeps its buttons unavailable. There is no need to create an account or leave an email address to read these guides.',
        ],
      },
    ],
    related: ['getting-started', 'editor', 'ocr'],
  },
  {
    id: 'changelog',
    lang: 'vi',
    slug: 'vi/cap-nhat',
    title: 'Cập nhật và ghi chú phát hành TrePDF',
    description: 'Theo dõi quá trình phát triển TrePDF và ghi chú phát hành. Link bộ cài, yêu cầu nền tảng đã kiểm tra và thông tin phiên bản sẽ được bổ sung.',
    heading: 'Những bước phát triển của TrePDF.',
    intro: 'TrePDF hiện đang ở giai đoạn phát triển và thử nghiệm. Website chưa công bố liên kết tải công khai hoặc lịch sử các phiên bản phát hành.',
    sections: [
      {
        heading: 'Những khả năng đang có trong bản thử nghiệm',
        items: [
          'Đọc PDF trên máy tính, tìm kiếm, chọn chữ, xem hình thu nhỏ và mở nhiều tab tài liệu.',
          'Chỉnh sửa chữ và ảnh được hỗ trợ, hỗ trợ font còn thiếu, thao tác trang và Lưu thành.',
          'Bình luận, tô sáng văn bản, chú thích bằng hình vẽ, biểu mẫu tương tác và chữ ký hiển thị.',
          'OCR tiếng Việt và tiếng Anh tại máy để tạo một PDF riêng có thể tìm kiếm.',
        ],
        paragraphs: ['Các trang hướng dẫn mô tả khả năng hiện tại của dự án. Đây chưa phải thông báo phát hành hoặc cam kết mọi quy trình đều hỗ trợ mọi PDF. Giới hạn liên quan được giải thích trong từng hướng dẫn tính năng.'],
      },
      {
        heading: 'Thông tin sẽ có khi phát hành',
        paragraphs: [
          'Mỗi phiên bản công bố sẽ có số phiên bản, ngày phát hành, thay đổi đáng chú ý, giới hạn đã biết và liên kết đến bộ cài có sẵn. Thông tin nền tảng và kiến trúc sẽ nằm cạnh bản tải tương ứng.',
          'Trong lúc bộ cài chưa sẵn sàng, các nút tải trên trang tải xuống vẫn chưa được bật. Bạn không cần tạo tài khoản hoặc để lại email để đọc các hướng dẫn này.',
        ],
      },
    ],
    related: ['getting-started', 'editor', 'ocr'],
  },
  {
    "id": "forms",
    "lang": "en",
    "slug": "features/pdf-form-designer",
    "title": "PDF Form Designer: Create Fillable Forms | TrePDF",
    "description": "Design fillable PDF forms in TrePDF. Add text fields, checkboxes, radio buttons and selection lists, arrange them on the page, then save your PDF.",
    "heading": "Design a PDF people can fill in.",
    "intro": "Turn a PDF into a fillable form with TrePDF. Open the Forms tab, place your fields, and arrange them directly on the page.",
    "sections": [
      {
        "heading": "Choose the fields you need",
        "paragraphs": [
          "Add text fields, checkboxes, radio buttons, dropdowns, list boxes or comb fields for character-by-character input. Dropdowns support one selection; list boxes support multiple selections."
        ]
      },
      {
        "heading": "Arrange and adjust",
        "paragraphs": [
          "Move and resize fields to fit your document. Enable multiple lines or set a character limit for a text field. Give radio buttons the same Group ID to let people choose just one option within that group."
        ]
      },
      {
        "heading": "Save, then fill in",
        "paragraphs": [
          "Save your field layout to the PDF, or use Save As to keep the original and create a separate form. Reopen the saved PDF in TrePDF to enter text and select the available options. Form values can then be saved with the document."
        ]
      }
    ],
    "related": [
      "getting-started",
      "editor"
    ]
  },
  {
    "id": "forms",
    "lang": "vi",
    "slug": "vi/tinh-nang/thiet-ke-form-pdf",
    "title": "Thiết kế Form PDF: Tạo biểu mẫu có thể điền | TrePDF",
    "description": "Thiết kế biểu mẫu PDF trong TrePDF. Thêm ô nhập liệu, ô đánh dấu, nút chọn và danh sách lựa chọn, sắp xếp các trường rồi lưu thành PDF có thể điền.",
    "heading": "Thiết kế biểu mẫu PDF dễ điền.",
    "intro": "Mở tab Forms, đặt các trường và sắp xếp ngay trên trang. Biến tài liệu PDF thành biểu mẫu có thể nhập thông tin.",
    "sections": [
      {
        "heading": "Chọn trường phù hợp",
        "paragraphs": [
          "Thêm ô nhập liệu, ô đánh dấu, nút chọn, danh sách thả xuống, danh sách nhiều lựa chọn hoặc ô chia từng ký tự. Danh sách thả xuống cho chọn một mục; List Box cho chọn nhiều mục."
        ]
      },
      {
        "heading": "Sắp xếp và điều chỉnh",
        "paragraphs": [
          "Di chuyển, đổi kích thước các trường cho vừa trang. Bật nhập nhiều dòng hoặc giới hạn số ký tự cho ô văn bản. Đặt cùng Group ID cho các nút chọn để mỗi nhóm chỉ chọn được một đáp án."
        ]
      },
      {
        "heading": "Lưu để bắt đầu điền",
        "paragraphs": [
          "Dùng Save để lưu biểu mẫu hoặc Save As để tạo bản riêng và giữ bản gốc. Mở lại PDF trong TrePDF để nhập văn bản, chọn các mục có sẵn và lưu thông tin đã điền."
        ]
      }
    ],
    "related": [
      "getting-started",
      "editor"
    ]
  },
];
