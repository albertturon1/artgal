import { genQueryString } from "./misc";

type RequestProps = {
  url: string;
  config: RequestInit;
  params: Record<string, unknown>;
};

const request = async <T = undefined, Y = undefined>({
  url,
  config,
  ...props
}: {
  url: string;
} & Partial<RequestProps>) => {
  const queryString = genQueryString(props.params);
  const queryParams = queryString.length
    ? `?${genQueryString(props.params)}`
    : "";

  try {
    const response = await fetch(`${url}${queryParams}`, config);
    if (response.ok)
      return {
        data: (await response.json()) as T,
        error: undefined,
        isError: false as const,
      };

    return {
      data: undefined,
      error: (await response.json()) as Y,
      isError: true as const,
    };
  } catch (error) {
    console.warn(error);
    return { data: undefined, error, isError: true as const };
  }
};

const api = {
  get: <T, Y>({
    config,
    ...props
  }: { url: string } & Partial<Omit<RequestProps, "url">>) =>
    request<T, Y>({
      config: { method: "GET", ...config },
      ...props,
    }),
};

export default api;
