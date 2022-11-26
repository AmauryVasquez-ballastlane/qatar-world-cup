import Head from 'next/head';

import { getGroup } from 'utils/getGroup';
import { GroupData } from 'interfaces/group';
import { getGroupKeys } from 'utils/getGroupKeys';
import { Layout } from 'components/layout/Layout';

const GroupPage = ({ groupName, teams, matches }: GroupData) => {
  console.log(teams, matches);
  return (
    <>
      <Head>
        <title> {`Group ${groupName} | Qatar World Cup`} </title>
        <meta
          name="description"
          content={`Qatar world cup, group ${groupName} teams and matches info`}
        />
      </Head>
      <Layout>
        <div></div>
      </Layout>
    </>
  );
};

export default GroupPage;

export async function getStaticPaths() {
  const groupKeys: string[] = await getGroupKeys();

  const paths = groupKeys.map((groupName: string) => ({
    params: { groupName },
  }));

  return { paths, fallback: false };
}

interface GroupParams {
  params: { groupName: string };
}

export async function getStaticProps({ params }: GroupParams) {
  const group = await getGroup(params.groupName);

  return { props: { group } };
}
