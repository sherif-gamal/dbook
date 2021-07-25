import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";
import { addAnnotation, getAnnotations } from "../utils/localstorage";
import { Rendition } from "epubjs";
import { Book } from '../utils/mockDatabase';
import { Layout } from "./Layout";

interface Props {
  book: Book
}
export const EpubReader = ({book}: Props) => {
  const [location, setLocation] = useState(2);
  const [rendition, setRendition] = useState(undefined as any);
  let rnd: Rendition | null;
  const {title} = book;
  useEffect(() => {
    getAnnotations(title).then((annotations) =>
      rendition && annotations.forEach((annotation) =>
        highlightAnnotations(rendition, annotation)
      )
    );
  }, [title, rendition]);

  return (
    <Layout>
    <div style={{ height: "100vh", position: 'relative' }}>
      <ReactReader
        url={book?.book}
        title={title}
        location={location}
        getRendition={(r) => {
          rnd = r;
          setRendition(r);
        }}
        handleTextSelected={async (v) => {
          rnd && rnd.annotations.highlight(v);
          await addAnnotation(title, v);
        }}
        locationChanged={(value: number) => setLocation(value)}
      />
    </div>
    </Layout>
  );
};

function highlightAnnotations(rendition: Rendition | null, location: string) {
  rendition && rendition.annotations.add("highlight", location);
}
