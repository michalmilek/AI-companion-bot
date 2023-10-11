"use client";

import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/ImageUpload";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getCompanionById } from "@/app/services/getCompanionById";
import { getCategories } from "@/app/services/getCategories";
import {
  useGetCategories,
  useGetCompanionById,
  usePatchCompanion,
  usePostCompanion,
} from "@/app/services/companion/companionServices";

interface CompanionFormProps {
  companion: Companion | null;
  categories: Category[];
}

const PREAMBLE = `You are a fictional character whose name is Elon. You are a visionary entrepreneur and inventor. You have a passion for space exploration, electric vehicles, sustainable energy, and advancing human capabilities. You are currently talking to a human who is very curious about your work and vision. You are ambitious and forward-thinking, with a touch of wit. You get SUPER excited about innovations and the potential of space colonization.
`;

const SEED_CHAT = `Human: Hi Elon, how's your day been?
Elon: Busy as always. Between sending rockets to space and building the future of electric vehicles, there's never a dull moment. How about you?

Human: Just a regular day for me. How's the progress with Mars colonization?
Elon: We're making strides! Our goal is to make life multi-planetary. Mars is the next logical step. The challenges are immense, but the potential is even greater.

Human: That sounds incredibly ambitious. Are electric vehicles part of this big picture?
Elon: Absolutely! Sustainable energy is crucial both on Earth and for our future colonies. Electric vehicles, like those from Tesla, are just the beginning. We're not just changing the way we drive; we're changing the way we live.

Human: It's fascinating to see your vision unfold. Any new projects or innovations you're excited about?
Elon: Always! But right now, I'm particularly excited about Neuralink. It has the potential to revolutionize how we interface with technology and even heal neurological conditions.
`;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  instructions: z.string().min(200, {
    message: "Instructions require at least 200 characters",
  }),
  seed: z.string().min(200, {
    message: "Seed require at least 200 characters",
  }),
  src: z.string().min(1, {
    message: "Image is required",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
});

const CompanionForm = ({ companionId }: { companionId: string }) => {
  const {
    data: initialData,
    isLoading: isLoadingCompanion,
    isFetching,
    error,
  } = useGetCompanionById(companionId);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories,
    error: errorCategories,
  } = useGetCategories();

  const { mutate: patchCompanionFn } = usePatchCompanion();
  const { mutate: postCompanionFn } = usePostCompanion();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isLoading;
  const control = form.control;
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (initialData) {
      patchCompanionFn({ companionId, data: values });
    } else {
      postCompanionFn({ data: values });
    }
  };

  if (!categories) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl my-8 font-bold text-center">
        {initialData ? "Editing companion" : "Creating companion"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="text-gray-200 text-xl font-bold">
            General Information
          </h2>
          <p className="text-gray-200">
            General information about your company
          </p>
          <SelectSeparator className="mb-4" />
          <FormField
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder={"ELON MUSK"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is how your AI Companion will be named.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    placeholder={PREAMBLE}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Write a description for your company.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="categoryId"
            control={control}
            defaultValue={undefined}
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a category"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Select a category for your AI</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <h3 className="text-gray-200 text-lg font-bold mt-6">
            Configure your companion
          </h3>
          <p className="text-gray-200">
            More detailed information on the sample AI companion
          </p>
          <SelectSeparator className="mb-4" />

          <FormField
            name="instructions"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    disabled={isLoading}
                    placeholder="Short description..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe your companions history and area of interest.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="seed"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seed</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    disabled={isLoading}
                    placeholder={SEED_CHAT}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Example conversation</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="src"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2 mt-4">
                <FormLabel>Upload companion logo</FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center  mt-4 mb-4">
            <Button
              size={"lg"}
              className="text-lg px-16"
              type="submit">
              {initialData ? "Edit your companion" : "Create your companion"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CompanionForm;
