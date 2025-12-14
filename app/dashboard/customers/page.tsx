import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page(props: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
})  {
  const searchParams = await props.searchParams;
  const query = searchParams.query || '';
  const currentPage = Number(searchParams.page) || 1;

  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">

       {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
        <CustomersTable customers={customers} />
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}