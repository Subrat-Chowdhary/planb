// ProgramsPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import ProgramsTable from '@/components/ProgramsTable';
import { ColumnDef } from '@tanstack/react-table';
import Programs from '@/components/ui/crud-programs';

export type Program = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export const programColumns: ColumnDef<Program>[] = [
  // Define your program columns here
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ row }) => (
    <div>
      {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(row.getValue('endDate')))}
    </div>
  ),
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ row }) => (
        <div>
      {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(row.getValue('startDate')))}
    </div>
      ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div>
        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(row.getValue('price'))}
      </div>
    ),
  },
];

const ProgramsPage: React.FC = () => {
  const [programData, setProgramData] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchProgramData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/programs');
        if (!response.ok) {
          throw new Error(`Failed to fetch program data. Status: ${response.status}`);
        }

        const data = await response.json();
        setProgramData(data.programs);
      } catch (error) {
        console.error('Error fetching program data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgramData();
  }, []);

  return (
    <div>
      <h1>This is programs Page</h1>
      <Programs/>
      <ProgramsTable data={programData} />
    </div>
  );
};

export default ProgramsPage;
