import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import PDFWorker from "worker-loader!pdfjs-dist/lib/pdf.worker";
import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  Highlight,
  Popup,
  AreaHighlight,
  setPdfWorker,
} from "react-pdf-highlighter";
import { Book } from "../utils/mockDatabase";
import { addAnnotation, getAnnotations } from "../utils/localstorage";
import { Layout } from "./Layout";

setPdfWorker(PDFWorker);

const getNextId = () => String(Math.random()).slice(2);

interface Props {
  book: Book
}
const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

const HighlightPopup = ({
  comment,
}: {
  comment: { text: string; emoji: string };
}) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;

export const PdfReader = ({book}: Props) => {
  const {title} = book; 
  const [highlights, setHighlights] = useState([] as any[]);
  useEffect(() => {
    getAnnotations(title).then((annotations) =>
      setHighlights(annotations)
    );
  }, [title]);
  const addHighlight = (highlight: any) => {
    console.log("Saving highlight", highlight);
    addAnnotation(book.title, highlight);
    setHighlights([{ ...highlight, id: getNextId() }, ...highlights]);
  };

  function updateHighlight(
    highlightId: string,
    position: Object,
    content: Object
  ) {
    console.log("Updating highlight", highlightId, position, content);

    setHighlights(
      highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
            id,
            position: { ...originalPosition, ...position },
            content: { ...originalContent, ...content },
            ...rest,
          }
          : h;
      })
    );
  }

  const scrollToHighlightFromHash = (scrollTo: (highlight: any) => void) => {
    const highlight = getHighlightById(parseIdFromHash());

    if (highlight) {
      scrollTo(highlight);
    }
  };
  function getHighlightById(id: string) {
    return highlights.find((highlight) => highlight.id === id);
  }
  return (
    <Layout>
    <div>
      <PdfLoader url={book?.book}>
        {(pdfDocument: any) => (
          <PdfHighlighter
            pdfDocument={pdfDocument}
            enableAreaSelection={(event: KeyboardEvent) => event.altKey}
            onScrollChange={resetHash}
            // pdfScaleValue="page-width"
            scrollRef={(scrollTo: any) => {
              scrollToHighlightFromHash(scrollTo);
            }}
            onSelectionFinished={(
              position,
              content,
              hideTipAndSelection,
              transformSelection
            ) => (
              <Tip
                onOpen={transformSelection}
                onConfirm={(comment) => {
                  addHighlight({ content, position, comment });

                  hideTipAndSelection();
                }}
              />
            )}
            highlightTransform={(
              highlight,
              index,
              setTip,
              hideTip,
              viewportToScaled,
              screenshot,
              isScrolledTo
            ) => {
              const isTextHighlight = !Boolean(
                highlight.content && highlight.content.image
              );

              const component = isTextHighlight ? (
                <Highlight
                  isScrolledTo={isScrolledTo}
                  position={highlight.position}
                  comment={highlight.comment}
                />
              ) : (
                <AreaHighlight
                  isScrolledTo={isScrolledTo}
                  highlight={highlight}
                  onChange={(boundingRect) => {
                    updateHighlight(
                      highlight.id,
                      { boundingRect: viewportToScaled(boundingRect) },
                      { image: screenshot(boundingRect) }
                    );
                  }}
                />
              );

              return (
                <Popup
                  popupContent={<HighlightPopup {...highlight} />}
                  onMouseOver={(popupContent: any) =>
                    setTip(highlight, (highlight: any) => popupContent)
                  }
                  onMouseOut={hideTip}
                  key={index}
                  children={component}
                />
              );
            }}
            highlights={highlights}
          />
        )}
      </PdfLoader>
    </div>
    </Layout>
  );
};
