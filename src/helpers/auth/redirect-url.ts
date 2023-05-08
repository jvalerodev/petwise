import type { NextRequest } from 'next/server';

const getUrl = (req: NextRequest) => {
  const url = req.nextUrl.clone();
  url.pathname = '/login';
  return url;
};

export default getUrl;
