import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import "../pages.css";

import { Link } from 'react-router-dom';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h3" className="welcome"> BIENVENUE </Typography>
		<Typography variant="h5" className="welcome"> Par où souhaitez-vous commencer ? </Typography>
		<div className="welcomeMenu">
			<Link className="welcomeItem" to='/page-1' ><Card className="welcomeItemCard">LIRE</Card></Link>
			<Link className="welcomeItem" to='/page-2' ><Card className="welcomeItemCard">RECHERCHER</Card></Link>
			<Link className="welcomeItem" to='/page-3' ><Card className="welcomeItemCard">MANUEL</Card></Link>
			<Link className="welcomeItem" to='/page-4' ><Card className="welcomeItemCard">A PROPOS</Card></Link>
		</div>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
