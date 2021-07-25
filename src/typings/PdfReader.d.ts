declare module "worker-loader!*" {
  // You need to change `Worker`, if you specified a different value for the `workerType` option
  class WebpackWorker extends Worker {
    constructor();
  }
  export default WebpackWorker;
}

interface AreaHighlightProps {
  isScrolledTo: () => void;
  highlight: any;
  onChange: (boundingRect: any) => void;
}
declare class AreaHighlight extends React.Component<AreaHighlightProps, any> {}

interface TipProps {
  onOpen: () => void;
  onConfirm: (comment: string) => void;
}
declare class Tip extends React.Component<TipProps, any> {}

interface PdfHighlighterProps {
  pdfDocument: string;
  enableAreaSelection: (event: KeyboardEvent) => void;
  onScrollChange: () => void;
  scrollRef: (scrollTo: (highlight: any) => void) => void;
  onSelectionFinished: (
    position,
    content,
    hideTipAndSelection,
    transformSelection
  ) => void;
  highlightTransform: (
    highlight,
    index,
    setTip,
    hideTip,
    viewportToScaled,
    screenshot,
    isScrolledTo
  ) => void;
  highlights: any[];
}
declare class PdfHighlighter extends React.Component<
  PdfHighlighterProps,
  any
> {}

declare module "react-pdf-highlighter" {
  export {
    PdfHighlighter,
    PdfLoader,
    Popup,
    Tip,
    Highlight,
    AreaHighlight,
    setPdfWorker,
  };
}
