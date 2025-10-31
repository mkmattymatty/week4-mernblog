import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

/**
 * useApi: small helper to do GET/POST etc with loading/error state.
 */
export function useApi(initialUrl = null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetcher = useCallback(async (url, config = {}) => {
    setLoading(true); setError(null);
    try {
      const res = await api.get(url, config);
      setData(res.data);
      setLoading(false);
      return res.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      setLoading(false);
      throw err;
    }
  }, []);

  useEffect(() => {
    if (initialUrl) fetcher(initialUrl);
  }, [initialUrl, fetcher]);

  return { data, loading, error, fetcher, setData };
}
