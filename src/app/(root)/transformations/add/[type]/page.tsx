import Header from '@/app/components/shared/header'
import TransformationForm from '@/app/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const AddTransformationTypePage = async ({ params }: SearchParamProps ) => {
  const { type } = await  params;
  const transformation = transformationTypes[type]

  const { userId } = await auth();

  if(!userId) redirect('sign-in');
 
  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle}/>

      <TransformationForm 
        action="Add"
        userId={user._id} 
        type={transformation.type as TransformationTypeKey} 
        creditBalance={user.creditBalance}      
        />
    </>
  )
}

export default AddTransformationTypePage
