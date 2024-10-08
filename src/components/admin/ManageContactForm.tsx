import { database } from "@/app";
import useDB from "@/hooks/useDB";
import MaterialTable from "@material-table/core";
import { useState } from "react";

export default function ManageContactForm() {
  const [contactData] = useDB<[]>(`contact`);
  // console.log(contactData);
  let sortedData: any;

  contactData &&
    contactData?.length > 0 &&
    (sortedData = contactData?.sort(
      (a: any, b: any) =>
        Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    ));
  const [tableData, setTableData] = useState([
    {
      sl: "1",
      firstName: "User 1",
      lastName: "Company 1",
      image: "/avatar_1.jpeg",
      email: "user1@gmail.com",
      phoneNumber: "9876543210",
      username: "anmishra1",
      accessControl: "Read Only",
    },
    {
      sl: "2",
      firstName: "User 2",
      lastName: "Company 2",
      image: "/avatar_2.png",
      email: "user2@gmail.com",
      phoneNumber: "9876543210",
      username: "vkkumhar2",
      accessControl: "Read and Write",
    },
  ]);
  const contactStatus = async (id: string) => {
    try {
      await database.update(`contact/${id}`, {
        status: "COMPLETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Sl.No",
      field: "sl",
      width: "5%",
    },
    {
      title: "Name",
      render: (rowData: any) => (
        <div className=" text-base font-bold  text-gray-600">
          {rowData?.name}
        </div>
      ),
      field: "name",
      width: "15%",
    },

    {
      title: "E-Mail",
      render: (rowData: any) => (
        <div className=" text-base font-bold  text-gray-600">
          {rowData?.email}
        </div>
      ),
      field: "email",
      width: "20%",
    },
    {
      title: "Phone Number",
      render: (rowData: any) => (
        <div className=" text-base font-bold  text-gray-600">
          {rowData?.phone}
        </div>
      ),
      field: "number",
      width: "20%",
    },
    {
      title: "Company Name",
      render: (rowData: any) => (
        <div className=" text-base font-bold  text-gray-600">
          {rowData?.companyName}
        </div>
      ),
      field: "companyName",
      width: "20%",
    },
    {
      title: "Message",
      render: (rowData: any) => (
        <div className=" text-base font-bold  text-gray-600">
          {rowData?.message}
        </div>
      ),
      field: "message",
      width: "20%",
    },
  ];
  const [showSelectFields, setShowSelectFields] = useState(false);

  const toggleSelectFields = () => {
    setShowSelectFields(!showSelectFields);
  };
  return (
    // <AdminLayout title="Manage Employee">
    <section className="main-container flex flex-col gap-10 ">
      <div className="p-4 rounded-md  bg-white flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Manage Contact</h1>
        <div className="">
          <MaterialTable
            columns={columns}
            data={
              !sortedData
                ? []
                : sortedData.map((item: any, i: number) => ({
                    ...item,
                    sl: i + 1,
                  }))
            }
            options={{
              sorting: true,
              search: true,
              addRowPosition: "first",
              detailPanelColumnAlignment: "right",
              paginationType: "stepped",
              actionsColumnIndex: -1,
              toolbar: false,
              headerStyle: {
                backgroundColor: "#35477E",
                color: "#FFFFFF",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                fontWeight: "bold",
              },
            }}
            title=""
          />
        </div>
      </div>
    </section>
    // </AdminLayout>
  );
}
