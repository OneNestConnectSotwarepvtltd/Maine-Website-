import { useState } from "react";

const S = {
  // Sidebar
  sidebar: { width: 220, minWidth: 220, height: "100%", background: "#fff", borderRight: "1.5px solid #e5e7eb", display: "flex", flexDirection: "column", overflow: "hidden" },
  logo: { height: 56, display: "flex", alignItems: "center", gap: 10, padding: "0 12px", borderBottom: "1.5px solid #e5e7eb" },
  logoIcon: { width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#16a34a,#15803d)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0, boxShadow: "0 4px 10px rgba(22,163,74,0.3)" },
  userCard: { margin: "10px 8px", padding: "8px 10px", background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 },
  avatar: { width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#16a34a,#15803d)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0, border: "2px solid #86efac" },
  dot: { width: 7, height: 7, borderRadius: "50%", background: "#16a34a", marginLeft: "auto", boxShadow: "0 0 0 3px rgba(22,163,74,0.2)" },
};

const MENU = [
  { id: "dashboard",   label: "Dashboard",       icon: "⊞" },
  { id: "profile",     label: "My Profile",      icon: "👤" },
  { id: "attendance",  label: "Attendance",      icon: "🕐" },
  { id: "tasks",       label: "My Tasks",        icon: "✅" },
  { id: "leaves",      label: "Leave Management",icon: "📅" },
  { id: "payslips",    label: "Payslips",        icon: "💰" },
  { id: "documents",   label: "Documents",       icon: "📄" },
  { id: "holidays",    label: "Holidays",        icon: "🎉" },
  { id: "analysis",    label: "Analysis",        icon: "📊" },
];

// ── Screen Contents ───────────────────────────────────────────────────────────
const Dashboard = () => {
  const present = 18, absent = 2, half = 1, total = 21, pct = 86;
  const circ = 2 * Math.PI * 32, off = circ - (pct / 100) * circ;
  return (
  <div style={{ padding: "16px", overflowY: "auto", height: "100%" }}>
    {/* Welcome Banner */}
    <div style={{ background: "linear-gradient(135deg,#1e293b,#334155,#1e293b)", borderRadius: 14, padding: "16px 20px", marginBottom: 14, border: "1px solid #475569" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ padding: 8, background: "rgba(255,255,255,0.1)", borderRadius: 10 }}>
          <span style={{ fontSize: 20 }}>👤</span>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Welcome back, Omkar Chauhan! 👋</div>
          <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Here's what's happening with your work today</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {[
          { label: "ATTENDANCE",   value: `${pct}%`, dot: "#60a5fa" },
          { label: "PRESENT DAYS", value: present,   dot: "#4ade80" },
          { label: "ABSENT DAYS",  value: absent,    dot: "#f87171" },
          { label: "WORKING DAYS", value: total,     dot: "#fb923c" },
        ].map(({ label, value, dot }) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot }} />
              <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em" }}>{label}</span>
            </div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
      {/* Attendance Overview */}
      <div style={{ background: "linear-gradient(135deg,#eff6ff,#f0fdf4)", border: "1px solid #bfdbfe", borderRadius: 12, padding: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <span>📈</span> Monthly Attendance Overview
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Circle */}
          <svg width={80} height={80} style={{ flexShrink: 0 }}>
            <circle cx={40} cy={40} r={32} stroke="#e5e7eb" strokeWidth={8} fill="none" />
            <circle cx={40} cy={40} r={32} stroke="#3b82f6" strokeWidth={8} fill="none"
              strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" transform="rotate(-90 40 40)" />
            <text x={40} y={44} textAnchor="middle" fontSize={13} fontWeight={800} fill="#1f2937">{pct}%</text>
          </svg>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "Present",  count: present, dot: "#22c55e" },
              { label: "Absent",   count: absent,  dot: "#ef4444" },
              { label: "Half Day", count: half,    dot: "#eab308" },
            ].map(({ label, count, dot }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 8px", background: "rgba(255,255,255,0.8)", borderRadius: 7 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#374151" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: dot }} />{label}
                </div>
                <span style={{ fontWeight: 700, fontSize: 12, color: dot }}>{count}</span>
              </div>
            ))}
            <div style={{ fontSize: 9, color: "#9ca3af", textAlign: "center" }}>{present}/{total} working days past</div>
          </div>
        </div>
      </div>

      {/* Leave Balance */}
      <div style={{ background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)", border: "1px solid #bbf7d0", borderRadius: 12, padding: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <span>🏆</span> Leave Balance Breakdown
        </div>
        {[
          { label: "Casual Leave", rem: 5,  total: 12, color: "#3b82f6", pct: 42 },
          { label: "Sick Leave",   rem: 8,  total: 10, color: "#22c55e", pct: 80 },
          { label: "Earned Leave", rem: 15, total: 15, color: "#a855f7", pct: 100 },
        ].map(({ label, rem, total, color, pct }) => (
          <div key={label} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 11, fontWeight: 600, color: "#374151" }}>
              <span>{label}</span><span style={{ color, fontWeight: 700 }}>{rem}/{total}</span>
            </div>
            <div style={{ height: 8, background: "#e5e7eb", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 4 }} />
            </div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", background: "rgba(255,255,255,0.8)", borderRadius: 8, marginTop: 6 }}>
          <div><div style={{ fontSize: 10, color: "#6b7280" }}>Total Remaining</div><div style={{ fontSize: 20, fontWeight: 800, color: "#16a34a" }}>28</div></div>
          <div style={{ textAlign: "right" }}><div style={{ fontSize: 10, color: "#6b7280" }}>Total Used</div><div style={{ fontSize: 18, fontWeight: 700, color: "#374151" }}>7</div></div>
        </div>
      </div>
    </div>

    {/* Last 7 Days */}
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 14, marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", marginBottom: 12 }}>📊 Last 7 Days Attendance</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 70 }}>
        {[
          { day: "Thu", color: "#22c55e", h: 55 },
          { day: "Fri", color: "#22c55e", h: 55 },
          { day: "Sat", color: "#d1d5db", h: 10 },
          { day: "Sun", color: "#d1d5db", h: 10 },
          { day: "Mon", color: "#22c55e", h: 55 },
          { day: "Tue", color: "#eab308", h: 33 },
          { day: "Wed", color: "#22c55e", h: 55 },
        ].map(({ day, color, h }) => (
          <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: "100%", background: "#f3f4f6", borderRadius: 6, height: 55, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
              <div style={{ width: "100%", height: h, background: color, borderRadius: "4px 4px 0 0" }} />
            </div>
            <span style={{ fontSize: 9, fontWeight: 600, color: "#6b7280" }}>{day}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Quick Actions */}
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", marginBottom: 10 }}>Quick Actions</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {[
          { label: "Mark Attendance", icon: "🕐", bg: "#eff6ff" },
          { label: "Apply Leave",     icon: "📅", bg: "#f0fdf4" },
          { label: "View Payslips",   icon: "💰", bg: "#faf5ff" },
          { label: "Update Profile",  icon: "👤", bg: "#fff7ed" },
        ].map(({ label, icon, bg }) => (
          <div key={label} style={{ padding: "10px 6px", background: bg, borderRadius: 10, textAlign: "center", cursor: "pointer" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#374151" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

const Attendance = () => (
  <div style={{ padding: 16, overflowY: "auto", height: "100%" }}>
    <div style={{ background: "linear-gradient(135deg,#1e293b,#334155)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, border: "1px solid #475569" }}>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>🕐 My Attendance</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 10 }}>
        {[["PRESENT","18","#4ade80"],["HALF DAYS","1","#facc15"],["RATE","86%","#60a5fa"],["WORKING","21","#c084fc"]].map(([l,v,c])=>(
          <div key={l} style={{ background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 10px" }}>
            <div style={{ fontSize:8,color:"#94a3b8",marginBottom:4 }}>{l}</div>
            <div style={{ fontSize:20,fontWeight:800,color:c }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ background:"linear-gradient(135deg,#eff6ff,#faf5ff)",border:"1px solid #c7d2fe",borderRadius:12,padding:14,marginBottom:12 }}>
      <div style={{ fontSize:12,fontWeight:700,color:"#1f2937",marginBottom:6 }}>📋 Today's Attendance</div>
      <div style={{ background:"#f0fdf4",border:"2px solid #86efac",borderRadius:10,padding:14 }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
          <div>
            <div style={{ fontSize:16,fontWeight:800,color:"#15803d" }}>PRESENT ✅</div>
            <div style={{ fontSize:11,color:"#16a34a",marginTop:2 }}>Aaj ki attendance mark ho gayi!</div>
          </div>
          <div style={{ fontSize:32 }}>✅</div>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8 }}>
          {[["Check-In","09:15 AM","#1f2937"],["Check-Out","06:30 PM","#15803d"],["Duration","9h 15m","#1d4ed8"]].map(([l,v,c])=>(
            <div key={l} style={{ background:"#fff",borderRadius:8,padding:"8px 10px",border:"1px solid #bbf7d0",textAlign:"center" }}>
              <div style={{ fontSize:9,color:"#6b7280",marginBottom:3 }}>{l}</div>
              <div style={{ fontSize:13,fontWeight:700,color:c }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:14 }}>
      <div style={{ fontSize:12,fontWeight:700,color:"#1f2937",marginBottom:10 }}>Attendance History</div>
      {[
        ["Mar 05","Wednesday","Present", "09:15 AM","06:30 PM","#f0fdf4","#bbf7d0","#166534"],
        ["Mar 04","Tuesday",  "Present", "09:08 AM","06:25 PM","#f0fdf4","#bbf7d0","#166534"],
        ["Mar 03","Monday",   "Present", "09:20 AM","06:15 PM","#f0fdf4","#bbf7d0","#166534"],
        ["Mar 02","Sunday",   "Weekend", "-",        "-",        "#f3f4f6","#d1d5db","#6b7280"],
        ["Mar 01","Saturday", "Weekend", "-",        "-",        "#f3f4f6","#d1d5db","#6b7280"],
        ["Feb 28","Friday",   "Half Day","11:30 AM","04:00 PM","#fefce8","#fde68a","#92400e"],
        ["Feb 27","Thursday", "Absent",  "-",        "-",        "#fef2f2","#fca5a5","#dc2626"],
      ].map(([date,day,status,ci,co,rb,sb,sf])=>(
        <div key={date} style={{ display:"flex",gap:8,alignItems:"center",padding:"7px 0",borderBottom:"1px solid #f3f4f6",fontSize:11 }}>
          <div style={{ width:50,fontWeight:600,color:"#1f2937" }}>{date}</div>
          <div style={{ width:68,color:"#6b7280" }}>{day}</div>
          <div style={{ flex:1 }}><span style={{ padding:"2px 8px",borderRadius:20,background:sb,color:sf,fontWeight:600,fontSize:10 }}>{status}</span></div>
          <div style={{ width:60,color:"#374151" }}>{ci}</div>
          <div style={{ width:60,color:"#374151" }}>{co}</div>
        </div>
      ))}
    </div>
  </div>
);

const Tasks = () => (
  <div style={{ padding: 16, overflowY: "auto", height: "100%" }}>
    <div style={{ background:"linear-gradient(135deg,#1e293b,#334155)",borderRadius:14,padding:"14px 16px",marginBottom:12,border:"1px solid #475569" }}>
      <div style={{ color:"#fff",fontWeight:700,fontSize:15,marginBottom:10 }}>✅ My Tasks</div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8 }}>
        {[["TOTAL","5","#60a5fa"],["PENDING","2","#facc15"],["IN PROGRESS","1","#c084fc"],["DONE","2","#4ade80"]].map(([l,v,c])=>(
          <div key={l} style={{ background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 10px" }}>
            <div style={{ fontSize:8,color:"#94a3b8",marginBottom:4 }}>{l}</div>
            <div style={{ fontSize:20,fontWeight:800,color:c }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
    {[
      { title:"Complete Q1 Report",priority:"Urgent",status:"In Progress",due:"Mar 10",ps:"#fef3c7",pb:"#f59e0b",ss:"#dbeafe",sf:"#1d4ed8" },
      { title:"Update Employee Data",priority:"High",status:"Pending",due:"Mar 12",ps:"#fee2e2",pb:"#ef4444",ss:"#fef9c3",sf:"#854d0e" },
      { title:"Review Policy Docs",priority:"Medium",status:"Completed",due:"Mar 01",ps:"#e0f2fe",pb:"#0284c7",ss:"#dcfce7",sf:"#166534" },
    ].map(({ title, priority, status, due, ps, pb, ss, sf }) => (
      <div key={title} style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginBottom:10 }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8 }}>
          <div style={{ fontWeight:600,fontSize:12,color:"#1f2937",flex:1 }}>{title}</div>
          <span style={{ fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:20,background:ps,color:pb,flexShrink:0 }}>{priority}</span>
        </div>
        <div style={{ display:"flex",gap:8,alignItems:"center" }}>
          <span style={{ fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:20,background:ss,color:sf }}>{status}</span>
          <span style={{ fontSize:10,color:"#6b7280" }}>Due: {due}</span>
        </div>
      </div>
    ))}
  </div>
);

const Leaves = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%" }}>
    <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12 }}>
      {[
        { label:"Casual Leave", rem:5, total:12, used:7, color:"#3b82f6",bg:"#eff6ff" },
        { label:"Sick Leave",   rem:2, total:10, used:8, color:"#22c55e",bg:"#f0fdf4" },
        { label:"Earned Leave", rem:15,total:15, used:0, color:"#a855f7",bg:"#faf5ff" },
      ].map(({ label, rem, total, used, color, bg }) => (
        <div key={label} style={{ background:bg,border:`1px solid ${color}30`,borderRadius:12,padding:12 }}>
          <div style={{ fontSize:11,fontWeight:700,color:"#374151",marginBottom:8 }}>{label}</div>
          <div style={{ fontSize:24,fontWeight:800,color }}>{rem}</div>
          <div style={{ fontSize:10,color:"#6b7280",marginBottom:8 }}>{used} used of {total}</div>
          <div style={{ height:6,background:"#e5e7eb",borderRadius:3 }}>
            <div style={{ height:"100%",width:`${(rem/total)*100}%`,background:color,borderRadius:3 }} />
          </div>
        </div>
      ))}
    </div>
    <div style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:14 }}>
      <div style={{ fontSize:12,fontWeight:700,color:"#1f2937",marginBottom:10 }}>Leave History</div>
      {[
        ["Sick Leave",    "Feb 10","Feb 11","2","Fever","Approved", "#dcfce7","#166534"],
        ["Casual Leave",  "Jan 20","Jan 22","3","Personal","Rejected","#fee2e2","#dc2626"],
        ["Earned Leave",  "Mar 15","Mar 17","3","Vacation","Pending", "#fef9c3","#854d0e"],
      ].map(([type,start,end,days,reason,status,sb,sf])=>(
        <div key={start} style={{ display:"flex",gap:8,padding:"7px 0",borderBottom:"1px solid #f3f4f6",fontSize:11,alignItems:"center" }}>
          <div style={{ width:80,fontWeight:600,color:"#1f2937" }}>{type}</div>
          <div style={{ flex:1,color:"#6b7280" }}>{start} – {end}</div>
          <div style={{ width:30,color:"#374151",fontWeight:600 }}>{days}d</div>
          <span style={{ padding:"2px 8px",borderRadius:20,background:sb,color:sf,fontWeight:600,fontSize:10 }}>{status}</span>
        </div>
      ))}
    </div>
  </div>
);

const Payslips = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%",display:"flex",flexDirection:"column",gap:12 }}>
    <div style={{ display:"grid",gridTemplateColumns:"1fr 2fr",gap:12,flex:1 }}>
      <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
        {["March 2026","February 2026","January 2026","December 2025","November 2025"].map((m,i)=>(
          <div key={m} style={{ padding:"10px 12px",borderRadius:10,cursor:"pointer",background:i===0?"#2563eb":"#fff",border:i===0?"1.5px solid #2563eb":"1.5px solid #e5e7eb",color:i===0?"#fff":"#374151" }}>
            <div style={{ fontWeight:600,fontSize:12 }}>{m}</div>
            <div style={{ fontSize:11,opacity:0.8,marginTop:2 }}>₹{(65000 - i*500).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:14 }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
          <div style={{ fontWeight:700,fontSize:14,color:"#1f2937" }}>March 2026</div>
          <button style={{ padding:"5px 12px",background:"#2563eb",color:"#fff",border:"none",borderRadius:8,fontSize:11,cursor:"pointer",fontWeight:600 }}>⬇ PDF</button>
        </div>
        <div style={{ background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:10,marginBottom:12,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6 }}>
          {[["Employee","Omkar Chauhan"],["Pay Period","March 2026"],["Email","omkar@onenest.in"],["Credit Date","Apr 1, 2026"]].map(([l,v])=>(
            <div key={l}><div style={{ fontSize:9,color:"#94a3b8" }}>{l}</div><div style={{ fontSize:11,fontWeight:600,color:"#1f2937" }}>{v}</div></div>
          ))}
        </div>
        {[["Basic Salary (50%)","₹32,500"],["HRA (20%)","₹13,000"],["Allowances","₹6,500"]].map(([l,v])=>(
          <div key={l} style={{ display:"flex",justifyContent:"space-between",padding:"5px 8px",background:"#f9fafb",borderRadius:6,marginBottom:4,fontSize:11 }}>
            <span style={{ color:"#6b7280" }}>{l}</span><span style={{ fontWeight:600 }}>{v}</span>
          </div>
        ))}
        <div style={{ display:"flex",justifyContent:"space-between",padding:"6px 8px",background:"#f0fdf4",borderRadius:6,marginBottom:8,fontSize:11 }}>
          <span style={{ fontWeight:600 }}>Gross Earnings</span><span style={{ fontWeight:700,color:"#16a34a" }}>₹52,000</span>
        </div>
        <div style={{ background:"linear-gradient(135deg,#2563eb,#7c3aed)",borderRadius:10,padding:"12px 14px",color:"#fff" }}>
          <div style={{ fontSize:10,color:"#bfdbfe",marginBottom:2 }}>Net Salary (Take Home)</div>
          <div style={{ fontSize:22,fontWeight:800 }}>₹65,000</div>
          <div style={{ fontSize:10,color:"#bfdbfe",marginTop:2 }}>Credited: Apr 1, 2026</div>
        </div>
      </div>
    </div>
  </div>
);

const Profile = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%" }}>
    <div style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:16,marginBottom:12 }}>
      <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:16 }}>
        <div style={{ width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#3b82f6,#a855f7)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:28,fontWeight:700,border:"4px solid #dbeafe" }}>O</div>
        <div>
          <div style={{ fontSize:18,fontWeight:800,color:"#1f2937" }}>Omkar Chauhan</div>
          <div style={{ fontSize:12,color:"#6b7280" }}>Software Developer</div>
          <div style={{ fontSize:11,color:"#9ca3af" }}>Employee ID: EMP0005</div>
          <div style={{ display:"flex",gap:8,marginTop:6 }}>
            <button style={{ padding:"4px 12px",background:"#2563eb",color:"#fff",border:"none",borderRadius:7,fontSize:11,cursor:"pointer",fontWeight:600 }}>✏ Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
      {[
        { title:"Personal Information", icon:"👤", fields:[["Full Name","Omkar Chauhan"],["Email","omkar@onenest.in"],["Phone","+91 9876543210"],["DOB","Jan 15, 2000"]] },
        { title:"Work Information",     icon:"💼", fields:[["Department","IT"],["Designation","Developer"],["Joining Date","Jan 1, 2025"],["Employee ID","EMP0005"]] },
      ].map(({ title, icon, fields }) => (
        <div key={title} style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:12 }}>
          <div style={{ fontSize:12,fontWeight:700,color:"#1f2937",marginBottom:10 }}>{icon} {title}</div>
          {fields.map(([l,v])=>(
            <div key={l} style={{ marginBottom:8 }}>
              <div style={{ fontSize:10,color:"#6b7280",marginBottom:2 }}>{l}</div>
              <input readOnly value={v} style={{ width:"100%",padding:"5px 8px",border:"1px solid #e5e7eb",borderRadius:7,fontSize:11,background:"#f9fafb",color:"#374151",boxSizing:"border-box" }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Analysis = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%" }}>
    <div style={{ background:"linear-gradient(135deg,#1e293b,#334155)",borderRadius:14,padding:"14px 16px",marginBottom:12,border:"1px solid #475569" }}>
      <div style={{ color:"#fff",fontWeight:700,fontSize:15,marginBottom:10 }}>📊 Performance Analysis</div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8 }}>
        {[["ATTENDANCE","86%","#60a5fa"],["PERFORMANCE","92","#4ade80"],["TASK RATE","40%","#c084fc"],["WORKING","21","#fb923c"]].map(([l,v,c])=>(
          <div key={l} style={{ background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 10px" }}>
            <div style={{ fontSize:8,color:"#94a3b8",marginBottom:4 }}>{l}</div>
            <div style={{ fontSize:20,fontWeight:800,color:c }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12 }}>
      {[
        { label:"Attendance", pct:86, color:"#3b82f6", sub:"18/21 days", bg:"#eff6ff" },
        { label:"Tasks Done", pct:40,color:"#a855f7", sub:"2/5 tasks",bg:"#faf5ff" },
        { label:"Leaves Used",pct:19,color:"#10b981", sub:"7/37 days",bg:"#f0fdf4" },
      ].map(({ label, pct, color, sub, bg }) => {
        const c=2*Math.PI*38, off=c-(pct/100)*c;
        return (
          <div key={label} style={{ background:bg,border:`1px solid ${color}30`,borderRadius:12,padding:14,textAlign:"center" }}>
            <svg width={90} height={90} style={{ margin:"0 auto 6px" }}>
              <circle cx={45} cy={45} r={38} stroke="#e5e7eb" strokeWidth={8} fill="none" />
              <circle cx={45} cy={45} r={38} stroke={color} strokeWidth={8} fill="none"
                strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" transform="rotate(-90 45 45)" />
              <text x={45} y={49} textAnchor="middle" fontSize={14} fontWeight={800} fill="#1f2937">{pct}%</text>
            </svg>
            <div style={{ fontSize:12,fontWeight:700,color:"#374151" }}>{label}</div>
            <div style={{ fontSize:10,color:"#9ca3af" }}>{sub}</div>
          </div>
        );
      })}
    </div>
    <div style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:14 }}>
      <div style={{ fontSize:12,fontWeight:700,color:"#1f2937",marginBottom:12 }}>📈 6-Month Attendance Trend</div>
      <div style={{ display:"flex",alignItems:"flex-end",gap:8,height:80 }}>
        {[["Oct",85],["Nov",90],["Dec",78],["Jan",92],["Feb",88],["Mar",86]].map(([m,p])=>(
          <div key={m} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4 }}>
            <div style={{ fontSize:9,fontWeight:700,color:"#374151" }}>{p}%</div>
            <div style={{ width:"100%",background:"#f3f4f6",borderRadius:6,height:55,display:"flex",alignItems:"flex-end",overflow:"hidden" }}>
              <div style={{ width:"100%",height:`${p}%`,background:p>80?"#22c55e":p>50?"#f59e0b":"#e5e7eb",borderRadius:"4px 4px 0 0" }} />
            </div>
            <span style={{ fontSize:9,fontWeight:600,color:"#6b7280" }}>{m}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Holidays = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%" }}>
    <div style={{ background:"linear-gradient(135deg,#1e293b,#334155)",borderRadius:14,padding:"14px 16px",marginBottom:12,border:"1px solid #475569" }}>
      <div style={{ color:"#fff",fontWeight:700,fontSize:15 }}>🎉 Holidays Calendar 2026</div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginTop:10 }}>
        {[["TOTAL","12","#60a5fa"],["UPCOMING","11","#4ade80"],["THIS YEAR","12","#fb923c"]].map(([l,v,c])=>(
          <div key={l} style={{ background:"rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 10px" }}>
            <div style={{ fontSize:8,color:"#94a3b8",marginBottom:4 }}>{l}</div>
            <div style={{ fontSize:20,fontWeight:800,color:c }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
    {[
      { name:"Holi",date:"Mar 14, 2026",day:"Saturday",type:"Public",icon:"🎨",color:"#ec4899" },
      { name:"Good Friday",date:"Apr 3, 2026",day:"Friday",type:"Public",icon:"✝️",color:"#6366f1" },
      { name:"Eid al-Fitr",date:"Apr 10, 2026",day:"Friday",type:"Public",icon:"🌙",color:"#10b981" },
      { name:"Independence Day",date:"Aug 15, 2026",day:"Saturday",type:"National",icon:"🇮🇳",color:"#f59e0b" },
      { name:"Diwali",date:"Nov 1, 2026",day:"Sunday",type:"Public",icon:"🪔",color:"#f59e0b" },
    ].map(({ name, date, day, type, icon, color }) => (
      <div key={name} style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:12,marginBottom:8,display:"flex",alignItems:"center",gap:12 }}>
        <div style={{ width:44,height:44,borderRadius:10,background:color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0 }}>{icon}</div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700,fontSize:12,color:"#1f2937" }}>{name}</div>
          <div style={{ fontSize:10,color:"#6b7280" }}>{date} · {day}</div>
        </div>
        <span style={{ fontSize:9,fontWeight:600,padding:"2px 8px",borderRadius:20,background:type==="National"?"#fef3c7":"#dbeafe",color:type==="National"?"#92400e":"#1e40af" }}>{type}</span>
      </div>
    ))}
  </div>
);

const Documents = () => (
  <div style={{ padding:16,overflowY:"auto",height:"100%" }}>
    <div style={{ background:"#fff",border:"2px dashed #d1d5db",borderRadius:12,padding:"20px",textAlign:"center",marginBottom:12,cursor:"pointer" }}>
      <div style={{ fontSize:28,marginBottom:4 }}>📤</div>
      <div style={{ fontSize:12,fontWeight:600,color:"#6b7280" }}>Drag & drop or tap to upload</div>
      <div style={{ fontSize:10,color:"#9ca3af",marginTop:2 }}>PDF, Word, JPG, PNG – Max 10MB</div>
    </div>
    <div style={{ display:"flex",gap:6,marginBottom:12,flexWrap:"wrap" }}>
      {["All","Onboarding","Identity","Tax","Benefits","Other"].map((c,i)=>(
        <button key={c} style={{ padding:"4px 10px",borderRadius:8,border:i===0?"none":"1px solid #e5e7eb",background:i===0?"#2563eb":"#fff",color:i===0?"#fff":"#374151",fontSize:10,fontWeight:600,cursor:"pointer" }}>{c}</button>
      ))}
    </div>
    <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10 }}>
      {[
        { name:"Offer Letter",   cat:"Onboarding",size:"1.2 MB",type:"PDF",icon:"📄",bg:"#fee2e2",ic:"#dc2626" },
        { name:"Aadhar Card",    cat:"Identity",  size:"890 KB",type:"IMG",icon:"🖼",bg:"#dcfce7",ic:"#16a34a" },
        { name:"PAN Card",       cat:"Tax",       size:"540 KB",type:"PDF",icon:"📄",bg:"#fee2e2",ic:"#dc2626" },
        { name:"Form 16",        cat:"Tax",       size:"2.1 MB",type:"PDF",icon:"📄",bg:"#fee2e2",ic:"#dc2626" },
      ].map(({ name, cat, size, type, bg, ic }) => (
        <div key={name} style={{ background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:12 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8 }}>
            <div style={{ width:36,height:36,borderRadius:9,background:bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>
              <span style={{ color:ic }}>📄</span>
            </div>
            <span style={{ fontSize:9,fontWeight:600,padding:"2px 6px",background:"#dbeafe",color:"#1e40af",borderRadius:20 }}>{cat}</span>
          </div>
          <div style={{ fontWeight:600,fontSize:11,color:"#1f2937",marginBottom:2 }}>{name}</div>
          <div style={{ fontSize:9,color:"#9ca3af",marginBottom:8 }}>{size} · {type}</div>
          <div style={{ display:"flex",gap:6 }}>
            <button style={{ flex:1,padding:"4px",background:"#2563eb",color:"#fff",border:"none",borderRadius:7,fontSize:10,cursor:"pointer",fontWeight:600 }}>👁 View</button>
            <button style={{ flex:1,padding:"4px",background:"#16a34a",color:"#fff",border:"none",borderRadius:7,fontSize:10,cursor:"pointer",fontWeight:600 }}>⬇ Download</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SCREENS = { dashboard: Dashboard, attendance: Attendance, tasks: Tasks, leaves: Leaves, payslips: Payslips, profile: Profile, analysis: Analysis, holidays: Holidays, documents: Documents };

// ── Main Demo Component ───────────────────────────────────────────────────────
export default function EMSPortalDemo() {
  const [active, setActive] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const Screen = SCREENS[active] || Dashboard;
  const activeMenu = MENU.find(m => m.id === active);

  useState(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 16px", background: "#ffffff", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>

      {/* Header — exact WhyChooseUs style */}
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#111827", margin: "0 0 16px", lineHeight: 1.15 }}>
        Our EMS{" "}
          <span style={{ background: "linear-gradient(to right, #16a34a, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Portal
          </span>
        </h2>
        <p style={{ fontSize: "clamp(15px, 2vw, 20px)", color: "#4b5563", margin: "0 auto", maxWidth: 700, lineHeight: 1.6 }}>
          We deliver excellence through innovation and dedication
        </p>
      </div>

      {/* Browser Frame */}
      <div style={{ width: "100%", maxWidth: 1000, borderRadius: 16, overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.2)", border: "1px solid #e2e8f0" }}>
        {/* Browser Bar */}
        <div style={{ background: "#1e293b", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display:"flex",gap:5 }}>
            {["#ef4444","#f59e0b","#22c55e"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }} />)}
          </div>
          <div style={{ flex:1,background:"#334155",borderRadius:6,padding:"4px 12px",fontSize:11,color:"#94a3b8",textAlign:"center" }}>
            onenest.in/employee
          </div>
        </div>

        {/* App */}
        <div style={{ display: "flex", height: isMobile ? 500 : 560, background: "#f9fafb", position: "relative" }}>

          {/* Sidebar */}
          <div style={{ ...S.sidebar, display: isMobile ? "none" : "flex" }}>
            {/* Logo */}
            <div style={S.logo}>
              <div style={S.logoIcon}>E</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#111827", lineHeight: 1.2 }}>EMS Portal</div>
                <div style={{ fontSize: 9, color: "#16a34a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Employee</div>
              </div>
            </div>

            {/* User Card */}
            <div style={S.userCard}>
              <div style={S.avatar}>O</div>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{ fontWeight: 600, fontSize: 12, color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Omkar Chauhan</div>
                <div style={{ fontSize: 10, color: "#6b7280" }}>EMP0005</div>
              </div>
              <div style={S.dot} />
            </div>

            {/* Nav */}
            <nav style={{ flex: 1, overflowY: "auto", padding: "4px 8px" }}>
              {MENU.map(({ id, label, icon }) => {
                const isActive = active === id;
                return (
                  <div key={id} onClick={() => setActive(id)} style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "6px 8px",
                    borderRadius: 9, marginBottom: 2, cursor: "pointer",
                    background: isActive ? "#f0fdf4" : "transparent",
                    border: `1.5px solid ${isActive ? "#86efac" : "transparent"}`,
                    position: "relative", transition: "all 0.15s",
                  }}>
                    {isActive && <div style={{ position:"absolute",left:0,top:"15%",bottom:"15%",width:3,background:"linear-gradient(180deg,#16a34a,#15803d)",borderRadius:"0 3px 3px 0" }} />}
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0,
                      background: isActive ? "linear-gradient(135deg,#16a34a,#15803d)" : "#f3f4f6",
                      boxShadow: isActive ? "0 3px 8px rgba(22,163,74,0.3)" : "none",
                    }}>
                      {isActive ? <span style={{ filter:"brightness(10)" }}>{icon}</span> : <span>{icon}</span>}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: isActive ? 600 : 500, color: isActive ? "#14532d" : "#374151", whiteSpace: "nowrap" }}>{label}</span>
                  </div>
                );
              })}
            </nav>

            {/* Bottom */}
            <div style={{ padding: "8px 8px 10px", borderTop: "1.5px solid #e5e7eb" }}>
              <button style={{ width:"100%",padding:"7px 10px",background:"#16a34a",border:"none",borderRadius:9,color:"#fff",fontSize:12,fontWeight:600,cursor:"pointer",marginBottom:6,display:"flex",alignItems:"center",gap:6,justifyContent:"flex-start" }}>
                <span>‹</span> Collapse
              </button>
              <button style={{ width:"100%",padding:"7px 10px",background:"#fff1f2",border:"1.5px solid #fecdd3",borderRadius:9,color:"#e11d48",fontSize:12,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6 }}>
                <span>↩</span> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Topbar */}
            <div style={{ height: 52, background: "#fff", borderBottom: "1.5px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", flexShrink: 0, gap: 8 }}>
              <div style={{ display:"flex", alignItems:"center", gap: 8 }}>
                {isMobile && (
                  <div onClick={() => setShowMobileMenu(true)} style={{ width:32,height:32,background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16,flexShrink:0 }}>☰</div>
                )}
                <div>
                  <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#111827" }}>{activeMenu?.label || "Dashboard"}</div>
                  <div style={{ fontSize: 10, color: "#9ca3af" }}>Thu, Mar 5, 2026</div>
                </div>
              </div>
              <div style={{ position:"relative" }}>
                <div style={{ width:34,height:34,background:"#f9fafb",border:"1.5px solid #e5e7eb",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16 }}>🔔</div>
                <div style={{ position:"absolute",top:8,right:8,width:7,height:7,background:"#ef4444",borderRadius:"50%",border:"2px solid #fff" }} />
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobile && showMobileMenu && (
              <div style={{ position:"absolute",inset:0,zIndex:50,display:"flex" }}>
                <div style={{ width:220,background:"#fff",borderRight:"1.5px solid #e5e7eb",display:"flex",flexDirection:"column",height:"100%",overflow:"hidden" }}>
                  <div style={{ height:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",borderBottom:"1.5px solid #e5e7eb" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                      <div style={S.logoIcon}>E</div>
                      <span style={{ fontWeight:700,fontSize:13,color:"#111827" }}>EMS Portal</span>
                    </div>
                    <div onClick={() => setShowMobileMenu(false)} style={{ cursor:"pointer",fontSize:18,color:"#6b7280",padding:"4px 8px" }}>✕</div>
                  </div>
                  <div style={{ padding:"8px",overflowY:"auto",flex:1 }}>
                    {MENU.map(({ id, label, icon }) => {
                      const isActive = active === id;
                      return (
                        <div key={id} onClick={() => { setActive(id); setShowMobileMenu(false); }} style={{
                          display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:9,marginBottom:2,cursor:"pointer",
                          background: isActive ? "#f0fdf4" : "transparent",
                          border:`1.5px solid ${isActive ? "#86efac" : "transparent"}`,
                        }}>
                          <div style={{ width:28,height:28,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0,background:isActive?"linear-gradient(135deg,#16a34a,#15803d)":"#f3f4f6" }}>
                            {isActive ? <span style={{ filter:"brightness(10)" }}>{icon}</span> : <span>{icon}</span>}
                          </div>
                          <span style={{ fontSize:12,fontWeight:isActive?600:500,color:isActive?"#14532d":"#374151" }}>{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div onClick={() => setShowMobileMenu(false)} style={{ flex:1,background:"rgba(0,0,0,0.4)" }} />
              </div>
            )}

            {/* Screen Content */}
            <div style={{ flex: 1, overflow: "hidden" }}>
              <Screen />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};