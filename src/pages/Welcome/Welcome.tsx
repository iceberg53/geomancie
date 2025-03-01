import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import "../pages.css";

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h3" className="welcome"> LA </Typography>
		<Typography variant="h3" className="welcome"> CONSULTATION </Typography>
		<Typography variant="h3" className="welcome"> GEOMANCIQUE </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
