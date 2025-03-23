import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

import FuzzyHighlighter, { Highlighter } from '@/components/Highlighter';
import { FinalResults, formatResults } from "@/components/Highlighter/formatResults";
import parse from 'html-react-parser';

import Fuse from 'fuse.js';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

import pagesData from '../pages.json'; 

import "../pages.css";

import { Link } from 'react-router-dom';

function Page2() {
	
	const [searchData, setSearchData] = useState({
		query: ""
	});
	
	const [searchOptions, setSearchOptions] = useState({
				shouldSort: true,
				includeMatches: true,
				ignoreLocation: true,
				threshold: 0,
				minMatchCharLength: 1,
				keys: ["content","page_number"],
	});
	
	const [results, setResults] = useState<pageObj[]>();
	
	const [formattedResults, setFormattedResults] = useState<FinalResults<pageObj>>();
	
	
	const handleSearch = (e: any) => {
		e.preventDefault();
		
		let minMatchCharLength = searchData.query.length;
		
		let searchOptions = {
			shouldSort: true,
            includeMatches: true,
			ignoreLocation: true,
            threshold: 0,
			minMatchCharLength: minMatchCharLength,
            keys: ["content","page_number"]
		}
	
		let fuse = new Fuse<pageObj>(pagesData, searchOptions)
	
		let filterResult = fuse.search(searchData.query)
		
		let results = filterResult.map(({item}) => item);
		
		setResults([...results]);
		
		console.log("Filter Result :", filterResult);
		
		console.log(" Result Items :", results);
		
		let formattedResults = formatResults(filterResult);
		
		setFormattedResults([...formattedResults]);
	}
	
	const handleChange = (e: any) => {
		
		const {name, value} = e.target;
		
		setSearchData({...searchData, [name]: value});
		
		
			setSearchOptions({...searchOptions, minMatchCharLength: value.length,});
		
		
	}
	
	interface pageObj {
		id: number;
		content: string
		page_number: string
	}
  
  let resultsList

  if(typeof results != "undefined"){
	  
	resultsList = results.map((result: any, index: number) => {
							
							return (
								
								<Link key={index} className="searchResult" to='/page-1' state={{result}} >
									<Card className="searchResultCard">{result.page_number} parse({result.content})</Card>
								</Link>
								
							)
						})
						
	}
	
	let formattedResultsList

	if(typeof formattedResults != "undefined"){
	  
	formattedResultsList = formattedResults.map((formattedResult, resultIndex) => {
					  if (formattedResult.formatted.content === undefined) {
						return null;
					  }

					  return (
						<Link
						  key={resultIndex}
						  className="searchResult"
						  to='/page-1' 
						  state={formattedResult.formatted}
						>
						  <Card className="searchResultCard">
							<Highlighter text={formattedResult.formatted.page_number} />
							<Divider />
							<Highlighter text={formattedResult.formatted.content} />
						  </Card>
						</Link>
					  );
					})
						
	}
	
  return (
    <>
      <Meta title="page 2" />
      <div className="searchUI">
        <form className="searchForm" onSubmit={handleSearch}>
			<TextField
				className="searchInput"
				label="Recherche"
				variant="outlined"
				fullWidth
				name="query"
				value={searchData.query}
				onChange={handleChange}
				required
			/>
			
			<Button className="searchButton" type="submit" variant="contained" startIcon={<SearchIcon/>}>Rechercher</Button>			
		</form>
		<div className="searchResults">
			{formattedResultsList}
		</div>
      </div>
    </>
  );
}

export default Page2;
