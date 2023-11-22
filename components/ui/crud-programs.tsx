// pages/programs/index.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import { format } from 'date-fns';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);

  const fetchPrograms = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/v1/programs');
      setPrograms(result.data.programs);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, [programs]);

  const onSubmit = async (data) => {
    try {
       // Formatting the price value as float
      data.price = parseFloat(data.price);
      // Formatting the startDate value as ISO-8601 DateTime
      data.startDate = format(new Date(data.startDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      // Formatting the endDate value as ISO-8601 DateTime
      data.endDate = format(new Date(data.endDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

      await axios.post('http://localhost:3000/api/v1/programs', data);
      fetchPrograms();
      reset();
    } catch (error) {
      console.error('Error adding program:', error);
    }
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/programs/${id}`);
      fetchPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  const onEdit = (program) => {
    setSelectedProgram(program);
    setOpen(true);
  };

  const onDialogClose = () => {
    setSelectedProgram(null);
    setOpen(false);
  };

  const onEditSubmit = async (data) => {
    try {
      await axios.patch(`http://localhost:3000/api/v1/programs/${selectedProgram.id}`, data);
      fetchPrograms();
      setSelectedProgram(null);
      setOpen(false);
    } catch (error) {
      console.error('Error editing program:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 space-x-2">
          <div className="flex-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input type="text" id="title" {...register('title')} className="mt-1 p-2 w-full border rounded" required />
          </div>
          <div className="flex-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <input
              type="text"
              id="description"
              {...register('description')}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date:
            </label>
            <input
              type="datetime-local"
              id="startDate"
              {...register('startDate')}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date:
            </label>
            <input
              type="datetime-local"
              id="endDate"
              {...register('endDate')}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              {...register('price')}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-full">
          <AiOutlinePlus className="inline-block mr-1" /> Add Program
        </button>
      </form>

    </div>
  );
};

export default Programs;
