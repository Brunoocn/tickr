
export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const headers: any = {};

  const res = await fetch(`https://backend-test.tickr.com.br/${input}`, {
    ...init,
    headers: { ...init?.headers, ...headers },
  });

  const contentLength = res.headers.get("Content-Length");
  const result = contentLength === "0" ? null : await res.json();
  if (res.ok) {
    return result as T;
  } else {
    throw new Error(result.message);
  }
}
