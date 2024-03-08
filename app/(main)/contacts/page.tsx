// import Pagination from '@/app/ui/contacts-pagination';
// import Search from '@/app/ui/contacts-search';
// import Table from '@/app/ui/contacts-table';
// import TableSkeleton from '@/app/ui/contacts-skeleton';
// import { Suspense } from 'react';
// import { fetchContactsPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchContactsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Contacts</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search contacts..." /> */}
      </div>
      {/* <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
