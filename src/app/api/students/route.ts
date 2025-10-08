import { addStudentDb, getStudentsDb } from '@/db/studentDb';

export async function GET(): Promise<Response> {
  const students = await getStudentsDb();

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { firstName, lastName, middleName, groupId } = body ?? {};

    if (!firstName || !lastName || typeof groupId !== 'number') {
      return new Response(JSON.stringify({ message: 'Некорректные данные' }), { status: 400 });
    }

    const created = await addStudentDb(firstName, lastName, middleName ?? '', groupId);
    return new Response(JSON.stringify(created), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  }
  catch (err) {
    return new Response(JSON.stringify({ message: 'Ошибка сервера' }), { status: 500 });
  }
};
