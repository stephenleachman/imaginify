import Header from '@/app/components/shared/header';
import TransformationForm from '@/app/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ type: string }>;
}

const AddTransformationTypePage = async ({ params }: PageProps) => {
  // Await the params before destructuring
  const { type } = await params;  // Resolves the params Promise
  
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const transformation = transformationTypes[type];
  if (!transformation) {
    redirect('/404'); // Handle invalid 'type'
  }

  const user = await getUserById(userId);

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
