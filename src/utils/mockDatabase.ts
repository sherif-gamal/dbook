import alice from '../books/alice.epub';
import bitcoin from '../books/bitcoin.pdf';
import dieDollar from '../books/die-dollar.pdf';
import moby from '../books/moby.epub';
import overpopulation from '../books/overpopulation.pdf';

import aliceThumbnail from '../books/alice.jpeg';
import bitcoinThumbnail from '../books/bitcoin.jpeg';
import dieDollarThumbnail from '../books/die-dollar.jpg';
import mobyThumbnail from '../books/moby.jpeg';
import overpopulationThumbnail from '../books/overpopulation.jpeg'

export interface Book {
	title: string,
	author: string
	book: any,
	thumbnail: string,
	format: 'pdf' | 'epub'
}
export const books: Book[] = [
	{
		title: 'Alice in wonderland',
		book: alice,
		author: 'Sherif Gamal',
		thumbnail: aliceThumbnail,
		format: 'epub'
	},
	{
		title: 'Bitcoin',
		book: bitcoin,
		author: 'Sherif Gamal',
		thumbnail: bitcoinThumbnail,
		format: 'pdf'
	},
	{
		title: 'Die Dollar Die',
		book: dieDollar,
		author: 'Robert Salisbury',
		thumbnail: dieDollarThumbnail,
		format: 'pdf'
	},
	{
		title: 'Moby Dick',
		book: moby,
		author: 'Sherif Gamal',
		thumbnail: mobyThumbnail,
		format: 'epub'
	},
	{
		title: 'Overpopulation',
		book: overpopulation,
		author: 'Robert Salisbury',
		thumbnail: overpopulationThumbnail,
		format: 'pdf'
	}
]