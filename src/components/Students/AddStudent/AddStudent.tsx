'use client';

import { useForm } from 'react-hook-form';
import useStudents from '@/hooks/useStudents';

interface FormValues {
  firstName: string;
  lastName: string;
  middleName?: string;
  groupId: number;
}

const AddStudent = (): React.ReactElement => {
  const { addStudentMutate, isAdding } = useStudents();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { firstName: '', lastName: '', middleName: '', groupId: 1 },
  });

  const onSubmit = (values: FormValues): void => {
    addStudentMutate({
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      middleName: (values.middleName ?? '').trim(),
      groupId: Number(values.groupId) || 1,
    }, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Фамилия" {...register('lastName', { required: 'Укажите фамилию' })} />
      {errors.lastName && <span>{errors.lastName.message}</span>}

      <input placeholder="Имя" {...register('firstName', { required: 'Укажите имя' })} />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <input placeholder="Отчество" {...register('middleName')} />

      <input type="number" placeholder="ID группы" {...register('groupId', { valueAsNumber: true, min: 1 })} />

      <button type="submit" disabled={isAdding}>Добавить</button>
    </form>
  );
};

export default AddStudent;


