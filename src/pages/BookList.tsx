import { Grid } from '@material-ui/core'
import React from 'react'
import { Layout } from '../components/Layout'
import {BookCard} from '../components/BookCard';
import { books } from "../utils/mockDatabase";


export const BookList = () => {
	return (
		<Layout>
			<Grid container spacing={2}>
				{books.map((book) => 
				<Grid item>
					<BookCard book={book}/>
				</Grid>
				)}
				
			</Grid>
		</Layout>
	)
}
