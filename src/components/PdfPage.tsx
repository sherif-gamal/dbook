import React, { useEffect, useMemo, useRef, useState } from "react";
import { Document, Outline, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import bitcoin from "../books/sample.pdf";
import "./sample.css";
const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};
function highlightPattern(tx: any, pattern: any) {
  const text = tx.str;
  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern) || [];

  return splitText.reduce(
    (arr: [], element: string, index: number) =>
      matches[index]
        ? [...arr, element, <mark key={index}>{matches[index]}</mark>]
        : [...arr, element],
    []
  );
}

export default function PdfPage() {
  const [numPages, setNumPages] = useState(null as any);
  const [pageNumber, setPageNumber] = useState(1);
  const pageRef = useRef(null);
  useEffect(() => {
    console.log(pageRef.current);
  }, [pageRef]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="Example">
      <div className="Example__container__document">
        <Document file={bitcoin} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            className="test"
            customTextRenderer={({ str, itemIndex }) => {
              return itemIndex % 2 ? <mark>{str}</mark> : <span>{str}</span>;
            }}
            ref={pageRef}
          />
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </Document>
      </div>
    </div>
  );
}
