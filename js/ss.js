var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2", //"light1", "dark1", "dark2"
  backgroundColor: "white",
  dataPointMaxWidth: 20,
  axisY: {
    interval: 5000,
    title: " Revenue for November 2019",
    titleFontWeight: "bold",
    margin: 5,
    lineThickness: 3,
    labelFontWeight: "bold",
    lineColor: "black",
  },
  axisX: {
    margin: 5,
    labelFontWeight: "bold",
  },

  data: [
    {
      color: "#3acbb0",
      type: "stackedBar",
      toolTipContent: "{label}<br><b>{name}:</b> {y}",

      dataPoints: [
        { y: 34000, label: "Edmonds" },
        { y: 46000, label: "Mukilteo" },
        { y: 48000, label: "Bothell" },
        { y: 49000, label: "Lynnwood" },
        { y: 80000, label: "Seattle" },
        { y: 100000, label: "Everett" },
      ],
    },
  ],
});

chart.render();
var chart1 = new CanvasJS.Chart("chartContainer1", {
  animationEnabled: true,
  theme: "light2", //"light1", "dark1", "dark2"
  backgroundColor: "white",
  dataPointMaxWidth: 20,
  axisY: {
    interval: 20000,
    title: " Revenue for November 2019",
    titleFontWeight: "bold",
    margin: 5,
    lineThickness: 3,
    lineColor: "black",
    labelFontWeight: "bold",
  },
  axisX: {
    margin: 5,
    labelFontWeight: "bold",
  },

  data: [
    {
      color: "#3acbb0",
      type: "stackedBar",
      toolTipContent: "{label}<br><b>{name}:</b> {y}",

      name: "Dollor($)",
      dataPoints: [
        { y: 5000, label: "Material Sale" },
        { y: 44000, label: "Maintenance" },
        { y: 46000, label: "HWT Replacement" },
        { y: 78000, label: "Bid Work Plumbing" },
        { y: 80000, label: "Service HVAC" },
        { y: 130000, label: "Bid Work HVAC" },
        { y: 200000, label: "Service Plumbing" },
      ],
    },
  ],
});
chart1.render();
function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (inputtxt.value.match(decimal)) {
    var str2 = "SmartServTest@123";
    var n = inputtxt.value.localeCompare(str2);
    if (n == 0) {
      window.location.href = "dashboard.html";
      return false;
    } else {
      alert("Password Invalid! Not allowed to Login");
    }
    return true;
  } else {
    alert(
      "Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character.And Enter SmartServTest@123"
    );
    return false;
  }
}

function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert("Please provide a valid username in form of E-Mail");
    email.focus;
    return false;
  }
}
