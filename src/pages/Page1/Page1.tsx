import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import HTMLFlipBook from 'react-pageflip';
import parse from 'html-react-parser';

import { useLocation } from 'react-router-dom';
import pagesData from '../pages.json'; 

import "../pages.css";

function Page1() {
  
  const {state} = useLocation();
  
  let startPage: number = 0;
  
  if(state){
	  startPage = state.result.id as number;
	  //console.log("State from page 2", state.result.id)
  }
  
  //console.log("State from page 2", state.result.page_number)
  
  interface pageObj {
	id: number;
	content: string
	page_number: string
  }
  
  //console.dir(Object.entries(signesData));
  //console.dir(Object.keys(signesData));
  //const signesDataArr = Object.entries(signesDataRaw);
  //const pagesDataArr = Object.entries(pagesDataRaw);
  //console.log(signesDataArr[0][1][0]);
  console.log(pagesData);
  
  const pagesList = pagesData.map((pageData: any, index: number) => {
							const t_text = parse(pageData.content);
							return (
								<Paper className="page"  key={index}>
									<div className="page-content">
										<div className="page-footer">{pageData.page_number}</div>
										<Divider />
										<div className="page-text">{parse(pageData.content)}</div>
									</div>				
								</Paper>
							)
						}	
					)
  //console.log(pagesList);
  
  const myStyle : React.CSSProperties = {};
  
  return (
    <>
      <Meta title="page 1" />
      
	  <div className="book-wrapper">
        <HTMLFlipBook width={300} height={1500}
		    size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={1}
            showCover={true}
            mobileScrollSupport={true}
			drawShadow={true}
			flippingTime={1000}
			usePortrait={true}
			startZIndex={0}
			startPage={startPage}
			autoSize={true}
			swipeDistance={30}
			clickEventForward={true}
			useMouseEvents={true}
			disableFlipByClick={true}
			showPageCorners={false}
			style={myStyle}
			className="html-book"
            >
			<Paper className="page page-cover page-cover-top" data-density="hard">
				<div className="page-content">
					<Typography variant="h2">TITLE</Typography>
				</div>
			</Paper>
			
			{pagesList}
			
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
