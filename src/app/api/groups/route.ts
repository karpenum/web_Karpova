import { getGroupsDb } from '@/db/groupDb';

export async function GET(): Promise<Response> {
  const groups = await getGroupsDb();

  return new Response(JSON.stringify(groups), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
