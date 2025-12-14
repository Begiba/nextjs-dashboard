import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomersTable } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomersTable();
 console.log(customers); // Log to check if customers are fetched correctly
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}