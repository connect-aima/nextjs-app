import "./style.css"
export default function ComplexDashboardLayout({
  children,
  userAnalytics,
  revenueMetrics,
  notifications
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenueMetrics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      
<div>
  <div className="bg-amber-200 m-4 p-4" >{children}</div>

  <div className="bg-pink-300" style={{ display: "flex" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{userAnalytics}</div>
      <div>{revenueMetrics}</div>
    </div>

    <div style={{ display: "flex", flex: 1 }}>
      {notifications}
    </div>
  </div>
</div>

    </>
  );
}
