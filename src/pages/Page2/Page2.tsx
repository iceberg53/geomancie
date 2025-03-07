import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

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
	
	const [results, setResults] = useState<pageObj[]>();
	
	const handleSearch = (e: any) => {
		e.preventDefault();
		
		
	
		let fuse = new Fuse<pageObj>(pagesData, {keys: ['content']})
	
		let filterResult = fuse.search(searchData.query)
		
		let results = filterResult.map(({item}) => item);
		
		setResults([...results]);
		
		console.log("Filter Result :", filterResult);
		
		console.log(" Result Items :", results);
	}
	
	const handleChange = (e: any) => {
		const {name, value} = e.target;
		setSearchData({...searchData, [name]: value});
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
								
								<Link key={index} className="searchResult" to='/page-1' state={{result}} ><Card className="searchResultCard">{result.page_number}</Card></Link>
								
							)
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
			{resultsList}
		</div>
      </div>
    </>
  );
}

export default Page2;
