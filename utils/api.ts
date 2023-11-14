// App/utils/api.ts
import useSWR from 'swr';

// Define the fetcher function for useSWR
const fetcher = async (url: string) => {
  console.log(url)
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

// Hook to fetch the list of programs
export const usePrograms = () => {
  const { data, error } = useSWR('/api/v1/programs', fetcher);

  return {
    programs: data?.programs || [],
    isLoading: !data && !error,
    isError: error,
  };
};

// Hook to fetch details of a specific program
export const useProgram = (programId: string) => {
  const { data, error } = useSWR(`/api/v1/programs/${programId}`, fetcher);

  return {
    program: data?.program || null,
    isLoading: !data && !error,
    isError: error,
  };
};
