function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62kUNtR88GY":
        Script1();
        break;
      case "6EycFz57NQh":
        Script2();
        break;
      case "6Jgv4tFSthM":
        Script3();
        break;
      case "5X3AKEptRWL":
        Script4();
        break;
      case "5dVPGXXyAIO":
        Script5();
        break;
      case "6kwjH6HEo0y":
        Script6();
        break;
      case "6fUlHtCKdTP":
        Script7();
        break;
      case "64oQnO24mJj":
        Script8();
        break;
      case "6iX7EH2Q92b":
        Script9();
        break;
      case "6pKkWDr1F8m":
        Script10();
        break;
      case "5vJbPhXKXhb":
        Script11();
        break;
      case "6UlpwblP9Ez":
        Script12();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script11()
{
  $("#tab-customlink").show();
}

function Script12()
{
  window.print();
}

