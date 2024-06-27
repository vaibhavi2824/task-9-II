document.addEventListener("DOMContentLoaded", function () {
    const employeeData = [
        { name: "Darlene Robertson", email: "trungkiespktnd@gmail.com", status: "Free", role: "Reporter" },
        { name: "Devon Lane", email: "tranthuy.nute@gmail.com", status: "Busy", role: "Bot Analyst" },
        { name: "Cody Fisher", email: "tienlanspktnd@gmail.com", status: "Workin", role: "Sales Manager" },
        { name: "Theresa Webb", email: "thuhang.nute@gmail.com", status: "Free", role: "Broadcaster" },
        { name: "Savannah Nguyen", email: "manhachtkbt08@gmail.com", status: "Workin", role: "Marketer" },
        { name: "Eleanor Pena", email: "vuhaithuongnute@gmail.com", status: "On Vacation", role: "Analytics Admin" },
        { name: "Jenny Wilson", email: "danghoang87@gmail.com", status: "Busy", role: "Bot Editor" },
        { name: "Marvin McKinney", email: "binhan628@gmail.com", status: "Free", role: "Team Editor" },
        { name: "Cameron Williamson", email: "ckctm12@gmail.com", status: "Working", role: "PPC Expert" },
        { name: "Jerome Bell", email: "nvt.isst.nute@gmail.com", status: "Busy", role: "Team Owner" },
    ];

    const employeeTableBody = document.getElementById("employee-table-body");

    function loadEmployeeData() {
        employeeTableBody.innerHTML = "";
        employeeData.forEach(employee => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.status}</td>
                <td>${employee.role}</td>
            `;
            employeeTableBody.appendChild(row);
        });
    }

    loadEmployeeData();
});
