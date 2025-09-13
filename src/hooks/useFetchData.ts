'use client';

import { useState, useEffect, useCallback } from 'react';
import type { LoadingState, ApiError } from '@/lib/types';

interface FetchDataOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

interface UseFetchDataReturn<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
  refetch: () => Promise<void>;
  reset: () => void;
}

export function useFetchData<T>(
  url: string,
  options: FetchDataOptions = {},
  dependencies: any[] = []
): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    setLoading('loading');
    setError(null);

    try {
      const config: RequestInit = {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      };

      if (options.body && options.method !== 'GET') {
        config.body = JSON.stringify(options.body);
      }

      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      setLoading('success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      setLoading('error');
      console.error('Fetch error:', err);
    }
  }, [url, options.method, options.body, options.headers]);

  const reset = useCallback(() => {
    setData(null);
    setLoading('idle');
    setError(null);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    reset,
  };
}

// Hook específico para datos con paginación
export function usePaginatedData<T>(
  baseUrl: string,
  page: number = 1,
  pageSize: number = 10,
  filters: Record<string, any> = {}
) {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value != null)
    ),
  });

  const url = `${baseUrl}?${queryParams}`;

  return useFetchData<{
    data: T[];
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  }>(url, {}, [page, pageSize, JSON.stringify(filters)]);
}

// Hook para mutaciones (POST, PUT, DELETE)
export function useMutation<TData, TVariables = any>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE' = 'POST'
) {
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (variables: TVariables): Promise<TData | null> => {
    setLoading('loading');
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setLoading('success');
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      setLoading('error');
      console.error('Mutation error:', err);
      return null;
    }
  }, [url, method]);

  const reset = useCallback(() => {
    setLoading('idle');
    setError(null);
  }, []);

  return {
    mutate,
    loading,
    error,
    reset,
  };
}
