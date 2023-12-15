
import { Badge, Button, Table } from "keep-react";
import {
  CalendarBlank,
  Crown,
  Cube,
  CurrencyDollar,
  DotsNine,
  Spinner,
  Tag,
} from "phosphor-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const Employ = () => {
  const {user} = useContext(AuthContext);
  console.log(user?.email);
    const [pamentDetails , setPamentsDetails] = useState([]);
    useEffect(() => {
        fetch(`https://backend-seven-ruddy.vercel.app/payment/?slug=${user?.email}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setPamentsDetails(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [user?.email]);

      console.log(pamentDetails);
   
    return (
        <div>
        <Table showCheckbox={true}>
  <Table.Caption>
    <div className="my-5 flex items-center justify-between px-6">
      <div className="flex items-center gap-5">
        <p className="text-body-1 font-semibold text-metal-600">Orders</p>
      </div>
      <div className="flex items-center gap-5">
        <Button type="outlineGray" size="sm">
          <span className="pr-2">
            <Cube size={24} />
          </span>
          Filter
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
    <Table.HeadCell className="min-w-[302px]">
      <p className="text-body-6 font-medium text-metal-400">Tringision ID</p>
    </Table.HeadCell>
    <Table.HeadCell
      className="min-w-[165px]"
      icon={<CalendarBlank size={14} color="#8897AE" />}
      iconPosition="left"
    >
      Date
    </Table.HeadCell>
    <Table.HeadCell
      className="min-w-[152px]"
      icon={<Spinner size={14} color="#8897AE" />}
      iconPosition="left"
    >
      State
    </Table.HeadCell>
    <Table.HeadCell
      className="min-w-[114px]"
      icon={<DotsNine size={14} color="#8897AE" />}
      iconPosition="left"
    >
      Quant.
    </Table.HeadCell>
    <Table.HeadCell
      className="min-w-[138px]"
      icon={<CurrencyDollar size={14} color="#8897AE" />}
      iconPosition="left"
    >
      Amount
    </Table.HeadCell>
    <Table.HeadCell
      className="min-w-[150px]"
      icon={<Tag size={14} color="#8897AE" />}
      iconPosition="left"
    >
      Email
    </Table.HeadCell>
    <Table.HeadCell className="min-w-[100px]" />
  </Table.Head>
  <Table.Body className="divide-y divide-gray-25">
    {pamentDetails?.map((paymentDetail, index) => (
      <Table.Row key={index} className="bg-white">
        <Table.Cell>
          <p className="text-body-4 font-medium text-metal-500">
            {paymentDetail?.trangrstionId} 
          </p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">
             {paymentDetail?.month}
          </p>
          <p className="text-body-6 font-normal text-metal-500">
            Sucessfull
          </p>
        </Table.Cell>

        <Table.Cell>
          <div className="inline-block">
            <Badge
              colorType="light"
              color={paymentDetail.status === 'Delivered' ? 'success' : 'primary'}
              icon={
                paymentDetail.status === 'Delivered' ? (
                  <Crown size={18} weight="light" />
                ) : (
                //   <OtherIcon size={18} /> 
                " "
                )
              }
              iconPosition="left"
            >
              Complite
            </Badge>
          </div>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">
            One Month Selary
          </p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">
            {paymentDetail?.amount} 
          </p>
        </Table.Cell>

        <Table.Cell>
          <p className="text-body-5 font-medium text-metal-500">
            {paymentDetail?.email}
          </p>
        </Table.Cell>

        <Table.Cell></Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>;

        </div>
    );
};

export default Employ;