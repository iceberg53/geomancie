import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

import "../pages.css";

function Page3() {
  return (
    <>
      <Meta title="page 3" />
      <FullSizeCenteredFlexBox>
        <Typography className="welcome" variant="h3">MANUEL DE L'UTILISATEUR</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page3;
