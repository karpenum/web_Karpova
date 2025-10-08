import Students from '@/components/Students/Students';
import Page from '@/components/layout/Page/Page';
import { META_DESCRIPTION, META_TITLE } from '@/constants/meta';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: `Студенты - ${META_TITLE}`,
  description: META_DESCRIPTION,
};

const StudentsPage = (): React.ReactNode => (
  <Page>
    <h1>Студенты</h1>
    <Students />
  </Page>
);

export default StudentsPage;
