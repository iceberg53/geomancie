import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

import "../pages.css";

function Page4() {
  return (
    <>
      <Meta title="page 4" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography className="welcome" variant="h3">A PROPOS DE CETTE APPLICATION</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page4;
