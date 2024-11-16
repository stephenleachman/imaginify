import Header from '@/app/components/shared/header';
import TransformationForm from '@/app/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params }: { params: { type: string } }) => {
  const { type } = params; // Destructure 'type' here after 'params' is resolved
  const { userId } = await auth();

  if (!userId) redirect('sign-in');

  const transformation = transformationTypes[type];
  const user = await getUserById(userId);

  if (!transformation) {
    redirect('/404'); // Handle invalid 'type' gracefully
  }

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;
