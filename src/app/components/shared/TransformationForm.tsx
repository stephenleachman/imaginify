"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CustomField } from "./CustomField"


export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})


const TransformationForm = ({ action, data = null }: TransformationFormProps) => {

  const defaultValues = {
    title: '',
    aspectRatio: '',
    color: '',
    prompt: '',
    publicId: ''
  };

  const initialValues = data && action === 'Update' ? {
    title: data?.title,
    aspectRatio: data?.aspectRatio,
    color: data?.color,
    prompt: data?.prompt,
    publicId: data?.publicId,
  } : defaultValues

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField 
        control={form.control} 
        name="title"
        formLabel="Image Title"
        className="w-full"
        render={({ field }) => <Input {...field} className="input-field"/> }
       />
      </form>
    </Form>
  )
}

export default TransformationForm