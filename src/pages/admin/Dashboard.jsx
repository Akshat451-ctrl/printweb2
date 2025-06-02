import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FaHistory,
  FaMoneyBillWave,
  FaClock,
  FaChartLine,
  FaClipboardList,
  FaPrint,
  FaHourglassHalf,
  FaTruck,
  FaTimes,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// ================== MOCK DATA ================== //
const orderData = {
  id: 'ORD-20250420',
  pages: 25,
  size: 'A4',
  payment: 'Paid',
  timeline: [
    { status: 'Order Placed', time: '10:00 AM', active: true },
    { status: 'Processing', time: '10:15 AM', active: true },
    { status: 'Printed', time: '10:30 AM', active: false },
    { status: 'Out for Delivery', time: '10:45 AM', active: false },
    { status: 'Delivered', time: '11:00 AM', active: false },
  ],
};

const statsData = {
  todayEarning: 0,
  pendingAmount: 0,
  totalEarning: 0,
  totalOrders: 0,
};

const statusData = [
  { label: 'Printed', value: 10, active: true },
  { label: 'Pending', value: 5, active: false },
  { label: 'Delivered', value: 8, active: false },
];

const prepareChartData = (stats) => [
  { name: 'Today', value: stats.todayEarning },
  { name: 'Pending', value: stats.pendingAmount },
  { name: 'Total', value: stats.totalEarning },
];

// ================== STYLED COMPONENTS ================== //
// ✂️ All your styled components are kept same as original to preserve your design
// Copy-paste from your original code between lines 7 to 189 (no changes needed)
const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Section = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const DetailCard = styled.div`
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  flex: 1 1 150px;
`;

const DetailLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const DetailValue = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #222;
`;

const Timeline = styled.ul`
  margin-top: 2rem;
  padding-left: 0;
`;

const TimelineItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
`;

const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.active ? '#4e4376' : '#ccc')};
  border-radius: 50%;
  margin-right: 1rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimelineStatus = styled.div`
  font-weight: bold;
  color: #444;
`;

const TimelineTime = styled.div`
  font-size: 0.85rem;
  color: #888;
`;

const ChartIcon = styled(FaChartLine)`
  cursor: pointer;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const StatCard = styled.div`
  background-color: #e9f0ff;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
`;

const StatIcon = styled.div`
  font-size: 1.5rem;
  color: #4e4376;
`;

const StatValue = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const StatusGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

const StatusItem = styled.div`
  text-align: center;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
`;

const StatusValue = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.active ? '#4e4376' : '#888')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const StatusLabel = styled.div`
  font-size: 0.85rem;
  color: ${(props) => (props.active ? '#333' : '#aaa')};
`;

const ChartModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 700px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #333;
`;

const ChartTitle = styled.h3`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

// ================== COMPONENT ================== //
const Dashboard = () => {
  const [currentOrder, setCurrentOrder] = useState(orderData);
  const [stats, setStats] = useState(statsData);
  const [status, setStatus] = useState(statusData);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedStats = {
        todayEarning: 820,
        pendingAmount: 420,
        totalEarning: 5120,
        totalOrders: 52,
      };
      setStats(updatedStats);
      setChartData(prepareChartData(updatedStats));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChart = () => setShowChart((prev) => !prev);

  return (
    <DashboardContainer>
      {/* Order History Section */}
      <Section>
        <SectionTitle>
          <FaHistory /> Order History
        </SectionTitle>

        <OrderDetails>
          <DetailCard>
            <DetailLabel>Order ID</DetailLabel>
            <DetailValue>{currentOrder.id}</DetailValue>
          </DetailCard>

          <DetailCard>
            <DetailLabel>Total Pages</DetailLabel>
            <DetailValue>{currentOrder.pages}</DetailValue>
          </DetailCard>

          <DetailCard>
            <DetailLabel>Size</DetailLabel>
            <DetailValue>{currentOrder.size}</DetailValue>
          </DetailCard>

          <DetailCard>
            <DetailLabel>Payment</DetailLabel>
            <DetailValue>{currentOrder.payment}</DetailValue>
          </DetailCard>
        </OrderDetails>

        <Timeline>
          {currentOrder.timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineDot
                active={item.active}
                last={index === currentOrder.timeline.length - 1}
              />
              <TimelineContent>
                <TimelineStatus>{item.status}</TimelineStatus>
                <TimelineTime>{item.time}</TimelineTime>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      {/* Admin Dashboard Section */}
      <Section>
        <SectionTitle>
          <ChartIcon onClick={toggleChart} /> Admin's Dashboard
        </SectionTitle>

        <StatsGrid>
          <StatCard>
            <StatIcon>
              <FaMoneyBillWave />
            </StatIcon>
            <StatValue>${stats.todayEarning}</StatValue>
            <StatLabel>Today's Earning</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FaClock />
            </StatIcon>
            <StatValue>${stats.pendingAmount}</StatValue>
            <StatLabel>Pending Amount</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FaChartLine />
            </StatIcon>
            <StatValue>${stats.totalEarning}</StatValue>
            <StatLabel>Total Earning</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FaClipboardList />
            </StatIcon>
            <StatValue>{stats.totalOrders}</StatValue>
            <StatLabel>Total Orders</StatLabel>
          </StatCard>
        </StatsGrid>

        <StatusGrid>
          {status.map((item, index) => (
            <StatusItem key={index} active={item.active}>
              <StatusValue active={item.active}>
                {index === 0 && <FaPrint />} 
                {index === 1 && <FaHourglassHalf />} 
                {index === 2 && <FaTruck />} 
                {item.value}
              </StatusValue>
              <StatusLabel active={item.active}>{item.label}</StatusLabel>
            </StatusItem>
          ))}
        </StatusGrid>
      </Section>

      {/* Chart Modal */}
      {showChart && (
        <ChartModal>
          <ChartContainer>
            <CloseButton onClick={toggleChart}>
              <FaTimes />
            </CloseButton>
            <ChartTitle>Dashboard Statistics</ChartTitle>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#4e4376" name="Amount" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartModal>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
