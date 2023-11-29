
import { useQuery } from "@tanstack/react-query";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
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
import { useContext } from "react";
const WorkTable = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { refetch, data: workSheetData = [] } = useQuery({
        queryKey: ['workSheetData', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/workSheet/?email=${user.email}`);
            return res.data;
        }
    })
    console.log(workSheetData);
    return (
        <div>
            <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Cash Out Transactions
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
            <p className="text-body-6 font-medium text-metal-400">Type</p>
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
            Amount
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Received Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
       {
        workSheetData?.map(work => <Table.Body key={work?._id} className="divide-y divide-gray-25">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar
                    shape="circle"
                    img="/images/company/paypal.png"
                    size="md"
                  />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                      Paypal
                    </p>
                    <span className="text-body-6 font-normal text-metal-500">
                      Withdraw
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">$652.00</p>
          </Table.Cell>
          <Table.Cell>
            <div className="inline-block">
              <Badge
                colorType="light"
                color="success"
                icon={<Crown size={18} weight="light" />}
                iconPosition="left"
              >
                Delivered
              </Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
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
        
      </Table.Body>)
       }
        <Table.Body className="divide-y divide-gray-25">
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/company/paypal.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Paypal
                      </p>
                      <span className="text-body-6 font-normal text-metal-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$652.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
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
      </Table>
        </div>
    );
};

export default WorkTable;