import { useQuery } from "@tanstack/react-query";
import { Badge, Button, Popover, Table } from "keep-react";
import {
  ArrowsDownUp,
  Crown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Pagination } from "keep-react";
const WorkSheetHrTable = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

//   console.log(workSheetData);

  // Paggination
  const itemsPerpage = 5;
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [workData , setWorkData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/workSheetCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const numberOfPages = Math.ceil(count / itemsPerpage);
  console.log(count, numberOfPages , workData);

  const { refetch, data: workSheetDatahr = [] } = useQuery({
    queryKey: ["workSheetDatahr", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/workSheetHrPagination?page=${currentPage}&size=${itemsPerpage}`);
      return res.data;
    },
    staleTime: 30000,
  });
  
  return (
    <div>
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                All WorkSheed History
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">ID</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[160px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            work Time
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Email
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        {workSheetDatahr?.map((work) => (
          <Table.Body key={work?._id} className="divide-y divide-gray-25">
            <Table.Row className="bg-white">
              
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {work?._id}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                {work?.date}
                </p>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge
                    colorType="light"
                    color="success"
                    icon={<Crown size={18} weight="light" />}
                    iconPosition="left"
                  >
                    {work?.selectedValue}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge
                    colorType="light"
                    color="success"
                    icon={<Crown size={18} weight="light" />}
                    iconPosition="left"
                  >
                    {work?.workTime}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {work?.email}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  
                </p>
              </Table.Cell>
              <Table.Cell>
                <Popover
                  showDismissIcon={false}
                  showArrow={false}
                  className="w-48 p-2 border border-metal-100"
                  additionalContent={
                    <ul className="flex flex-col gap-1">
                      <li className="hover:bg-metal-100 py-1 px-2 rounded">
                        <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Delete</span>
                          <span>
                            <Trash />
                          </span>
                        </button>
                      </li>
                      <li className="hover:bg-metal-100 py-1 px-2 rounded">
                        <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Edit</span>
                          <span>
                            <Pencil />
                          </span>
                        </button>
                      </li>
                    </ul>
                  }
                >
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
        
      </Table>
      <div className="flex justify-center items-center mb-16 mt-6">
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={30}
          iconWithOutText={true}
          prevNextShape="none"
          showGoToPaginate={true}
        />
      </div>
    </div>
  );
};

export default WorkSheetHrTable;
