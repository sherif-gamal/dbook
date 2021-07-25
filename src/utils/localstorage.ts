export async function getAnnotations(book: string): Promise<any[]> {
  const annotations = await localStorage.getItem(book);
  return annotations ? (JSON.parse(annotations)) : [];
}

export async function addAnnotation(book: string, annotation: any) {
  const annotations = await getAnnotations(book);
  await localStorage.setItem(book, JSON.stringify([...annotations, annotation]));
}