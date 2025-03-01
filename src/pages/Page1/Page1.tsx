import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { div } from '@/components/styled';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import HTMLFlipBook from 'react-pageflip';
import parse from 'html-react-parser';


import "../pages.css";
//import signesData from "./signesData";
import * as signesDataRaw from "./signes.json"
import * as maisonsDataRaw from "./maisons.json"

function Page1() {
  //console.dir(Object.entries(signesData));
  //console.dir(Object.keys(signesData));
  const signesDataArr = Object.entries(signesDataRaw);
  const maisonsDataArr = Object.entries(maisonsDataRaw);
  //console.log(signesDataArr[0][1][0]);
  //console.log(signesData);
  const signesData = signesDataArr[0][1];
  const maisonsData = maisonsDataArr[0][1];
  //console.log(signesData);
  const signesList = signesData.map((pageData, index) => {
							const t_header = parse(pageData.header);
							const t_text = parse(pageData.content);
							return (
								<Paper className="page"  key={index}>
									<div className="page-content">
										<div className="page-text">{parse(pageData.content)}</div>
										<Divider />
										<div className="page-footer">{pageData.footer}</div>
									</div>				
								</Paper>
							)
						}	
					)
  console.log(signesList);
  
  const maisonsList = maisonsData.map((pageData, index) => {
							const t_header = parse(pageData.header);
							const t_text = parse(pageData.content);
							return (
								<Paper className="page"  key={index}>
									<div className="page-content">
										<div className="page-text">{parse(pageData.content)}</div>
										<Divider />
										<div className="page-footer">{pageData.footer}</div>
									</div>				
								</Paper>
							)
						}	
					)
  console.log(maisonsList);
  
  return (
    <>
      <Meta title="page 1" />
      
	  <div className="book-wrapper">
        <HTMLFlipBook width={300} height={1200}
		    size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
			className="html-book"
            >
			<Paper className="page page-cover page-cover-top" data-density="hard">
				<div className="page-content">
					<Typography variant="h2">TITLE</Typography>
				</div>
			</Paper>
			
			{maisonsList}
			
			{signesList}
			
			<Paper className="page page-cover page-cover-bottom" data-density="hard">
				<div className="page-content">
					<Typography variant="h2">THE END</Typography>
				</div>
			</Paper>
			
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default Page1;
