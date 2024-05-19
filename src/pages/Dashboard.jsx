import MainLayout from "../layouts/MainLayout";
import DataTable from "../components/DataTable";

function Dashboard() {
  return (
    <MainLayout>
      <div className="w-3/4 mt-6">
        <DataTable />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
