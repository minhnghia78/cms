export type ApiResponse<T> = {
  statusCode: string;
  message?: string;
  data: T;
};
