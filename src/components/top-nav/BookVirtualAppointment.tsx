import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  consultant: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(1, "Mobile number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

const VirtualAppointmentForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="consultant"
          className="block text-sm font-medium text-gray-700"
        >
          Select Consultant
        </label>
        <select
          id="consultant"
          {...register("consultant")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Spectacles Expert">Spectacles Expert</option>
          <option value="Spectacles Expert">Spectacles Lens Expert</option>
          <option value="Spectacles Expert">Contact Lens Expert</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          {...register("email")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="mobile"
          className="block text-sm font-medium text-gray-700"
        >
          Mobile No.
        </label>
        <input
          id="mobile"
          {...register("mobile")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.mobile && (
          <span className="text-red-500 text-sm">{errors.mobile.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md"
      >
        Send Message
      </button>
    </form>
  );
};

export default VirtualAppointmentForm;
