export default async function Fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = handleError(res.status);
    throw error;
  }
  return res.json();
}

function handleError(errorCode: any) {
  let error;
  switch (errorCode) {
    case 401:
      error = `API key invalid.`;
      break;
    case 404:
      error = `No results found. Please try searching for a different location.`;
      break;
    default:
      error = `Server error`;
      break;
  }
  return new Error(error);
}
 