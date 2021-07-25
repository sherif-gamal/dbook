import React from 'react'
import { useParams } from 'react-router-dom';
import { EpubReader } from '../components/Epub';
import { PdfReader } from '../components/Pdf';
import { books } from '../utils/mockDatabase';

interface ParamsTypes {
	title: string;
}

export const Book = () => {
	const { title } = useParams<ParamsTypes>();
	const book = books.find(b => b.title === title);

	if (!book) {
		return <>Not found</>;
	}

	return (<>{book.format === 'epub' ? <EpubReader book={book} /> : <PdfReader book={book} />}</>)

}
