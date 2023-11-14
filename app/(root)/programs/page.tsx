// ProgramsPage.tsx
"use client"

import React, { useState, useEffect } from 'react';
import ProgramsTable from '@/components/ProgramsTable';
import { ColumnDef } from '@tanstack/react-table';

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
    cell: ({ row }) => <div>{row.getValue('startDate')}</div>,
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ row }) => <div>{row.getValue('endDate')}</div>,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.getValue('price'))}
      </div>
    ),
  },
];

const ProgramsPage: React.FC = () => {
  const [programData, setProgramData] = useState<Program[]>([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchProgramData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/programs');
        const data = await response.json();
        setProgramData(data.programs);
      } catch (error) {
        console.error('Error fetching program data:', error);
      }
    };

    fetchProgramData();
  }, []);

  return (
    <div>
      <h1>This is programs Page</h1>
      <ProgramsTable data={programData} />
    </div>
  );
};

export default ProgramsPage;
