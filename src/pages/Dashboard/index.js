/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import {
  CardInfo,
  Container,
  ContainerFluid,
  Sidebar,
  Topbar,
  ChartDonut,
  ChartLine,
  Wrapper,
  Spinner,
  PageHeading,
} from "../../components";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [graph, setGraph] = useState(null);
  const [donut, setDonut] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setGraph({
      label: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [
        "1000000",
        "2000000",
        "3000000",
        "2500000",
        "5000000",
        "10000000",
        "9000000",
        "5000000",
        "500000",
        "25000000",
        "11500000",
        "2500000",
      ],
    });
    setDonut({
      label: ["cash", "non-cash"],
      data: ["4536000", "9072000"],
    });
    setLoading(false);
  };

  return (
    <Wrapper>
      <Sidebar active="dashboard" />
      <Container>
        <Topbar />
        <ContainerFluid>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <PageHeading title="Dashboard" />
              <div className="row">
                <CardInfo
                  title="Total Produk"
                  icon="shopping-bag"
                  color="danger"
                  value={100}
                />
                <CardInfo
                  title="Total Pelanggan"
                  icon="user-friends"
                  color="success"
                  value={20}
                />
                <CardInfo
                  title="Pendapatan Harian"
                  icon="dollar-sign"
                  color="info"
                  value="50%"
                />
                <CardInfo
                  title="Total Order"
                  icon="coins"
                  color="warning"
                  value={55}
                />
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-6">
                  <ChartLine
                    title="Omset Penjualan (Per Tanggal 5)"
                    label={graph.label}
                    data={graph.data}
                  />
                </div>
                <div className="col-xl-4 col-lg-6">
                  <ChartDonut
                    title="Omset Penjualan (Total)"
                    label={donut.label}
                    data={donut.data}
                  />
                </div>
              </div>
            </>
          )}
        </ContainerFluid>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;
