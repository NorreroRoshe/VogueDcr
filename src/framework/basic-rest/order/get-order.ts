"use client"
import { Order } from '@/framework/basic-rest/types';
import http from '@/framework/basic-rest/utils/http';
import { API_ENDPOINTS } from '@/framework/basic-rest/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchOrder = async (_id: string) => {
  const { data } = await http.get(`${API_ENDPOINTS.ORDER}`);
  return data;
};
export const useOrderQuery = (id: string) => {
  return useQuery<Order, Error>([API_ENDPOINTS.ORDER, id], () =>
      fetchOrder(id)
  );
};
