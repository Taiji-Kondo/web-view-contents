import { Title } from '@mantine/core';
import type { NextPage } from 'next';

import { WithHeaderLayout } from '@/layouts/WithHeaderLayout';

const TopPage: NextPage = () => {
  return (
    <WithHeaderLayout>
      <Title order={1}>Top</Title>
    </WithHeaderLayout>
  );
};

export default TopPage;
