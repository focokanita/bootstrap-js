window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
$.ajax({
  url: "your_file.json",
  type: "PUT",
  data: { key1: "new_value1", key2: "new_value2" },
  success: function (response) {
    console.log("Data updated successfully!");
  },
  error: function (error) {
    console.log("Error: " + error);
  },
});
$.ajax({
  url: "your_file.json",
  type: "DELETE",
  data: { key: "value" },
  success: function (response) {
    console.log("Data deleted successfully!");
  },
  error: function (error) {
    console.log("Error: " + error);
  },
});
[
  {
    category: "Reaction",
    score: 80,
    icon: "./images/icon-reaction.svg",
    color: "0, 100%, 67%",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./images/icon-memory.svg",
    color: "39, 100%, 56%",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./images/icon-verbal.svg",
    color: "166, 100%, 37%",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./images/icon-visual.svg",
    color: "234, 85%, 45%",
  },
];
data.forEach(
  (item) => `
  ...

  <div class="summary-item" style="color: hsl(${item.color})">
    <div class="left">  
      <img class="icon" src="${item.icon}" alt="${item.category} Icon" />
      <p class="category">${item.category}</p>
    </div>
    <p class="summary-score">
      <span class="score">${item.score}</span> / 100
    </p>
  </div>

  ...
`
);

$(document).ready(function () {
  function fetchWeatherData(city) {
    var apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;

    $.ajax({
      type: "GET",
      url: apiUrl,
      dataType: "json",
      success: function (response) {
        if (response && response.main && response.main.temp) {
          var temperature = response.main.temp;
          var cityName = response.name;

          $("#weatherInfo").text(
            "Temperature in " + cityName + ": " + temperature + "°C"
          );
        } else {
          $("#weatherInfo").text("No weather data available.");
        }
      },
      error: function (xhr, status, error) {
        $("#weatherInfo").text("Failed to fetch weather data. Error: " + error);
      },
    });
  }

  $("#weatherForm").submit(function (event) {
    event.preventDefault();

    var city = $("#cityInput").val();

    fetchWeatherData(city);
  });
});

function loadPage(page) {
  const contentDiv = document.getElementById("content");
  let filePath = "";

  switch (page) {
    case "home":
      filePath = "pages/home.html";
      break;
    case "about":
      filePath = "pages/about.html";
      break;
    case "contact":
      filePath = "pages/contact.html";
      break;
    default:
      filePath = "pages/home.html";
      break;
  }

  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching page:", error);
    });
}

loadPage("home");

$(document).ready(function () {
  var jsonUrl = "posts.json";

  function loadBlogPosts() {
    $.ajax({
      url: jsonUrl,
      type: "GET",
      dataType: "json",
      success: function (data) {
        $.each(data.posts, function (index, post) {
          var postHtml = '<div class="post">';
          postHtml += "<h2>" + post.title + "</h2>";
          postHtml += "<p>" + post.content + "</p>";
          postHtml += "</div>";
          $("#blogPosts").append(postHtml);
        });
      },
      error: function (xhr, status, error) {
        console.error("Failed to load blog posts. Error: " + error);
      },
    });
  }

  loadBlogPosts();
});
document.getElementById("password").addEventListener("input", function () {
  const strengthIndicator = document.getElementById("password-strength");
  const password = this.value;
  let strength = 0;

  if (password.match(/[a-z]/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  if (password.match(/[0-9]/)) {
    strength += 1;
  }
  if (password.match(/[$@#!%*?&]/)) {
    strength += 1;
  }

  strengthIndicator.style.width = strength * 25 + "%";

  if (strength === 0) {
    strengthIndicator.className = "";
    strengthIndicator.style.width = "0%";
  } else if (strength === 1) {
    strengthIndicator.className = "strength-weak";
  } else if (strength === 2) {
    strengthIndicator.className = "strength-medium";
  } else if (strength >= 3) {
    strengthIndicator.className = "strength-strong";
  }
});

function showHomePage() {
  document.getElementById("content").innerHTML =
    "<h2>Dobrodošli na Početnu Stranicu!</h2><p>Ovdje možete vidjeti osnovne informacije o aplikaciji.</p>";
}

function showAboutPage() {
  document.getElementById("content").innerHTML =
    "<h2>O Aplikaciji</h2><p>Ova aplikacija je jednostranična aplikacija (SPA) koja demonstrira primjenu HTML-a, CSS-a i JavaScripta.</p>";
}

document.addEventListener("DOMContentLoaded", function () {
  showHomePage();

  document.getElementById("navHome").addEventListener("click", showHomePage);
  document.getElementById("navAbout").addEventListener("click", showAboutPage);
});
document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "services.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var podaci = JSON.parse(xhr.responseText);
      prikaziPodatke(podaci);
    }
  };
  xhr.send();
});

function prikaziPodatke(podaci) {
  var lista = document.getElementById("podaci-lista");
  podaci.forEach(function (podatak) {
    var stavka = document.createElement("li");
    stavka.textContent = podatak.naziv;
    lista.appendChild(stavka);
  });
}
$(document).ready(function () {
  $.ajax({
    url: "slike.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $.each(data.slike, function (index, slika) {
        $(".thumbnails").append(
          '<img src="' + slika.thumbnail + '" data-image="' + slika.image + '">'
        );
      });
    },
    error: function () {
      console.log("Greška pri dohvaćanju slika.");
    },
  });

  $(".thumbnails").on("click", "img", function () {
    var imageSrc = $(this).attr("data-image");
    $("#modal-img").attr("src", imageSrc);
    $(".modal").css("display", "block");
  });

  $(".close").on("click", function () {
    $(".modal").css("display", "none");
  });

  $(window).on("click", function (event) {
    if (event.target == $(".modal")[0]) {
      $(".modal").css("display", "none");
    }
  });
});
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    mapId: "DEMO_MAP_ID",
  });
  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.position);
  });
}

initMap();

$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" });

  app.route({
    view: "view_1",
    onCreate: function () {
      $("#view_1").append($.now() + ": Written on create<br/>");
    },
    onReady: function () {
      $("#view_1").append($.now() + ": Written when ready<br/>");
    },
  });
  app.route({ view: "view_2", load: "view_2.html" });
  app.route({
    view: "view_3",
    onCreate: function () {
      $("#view_3").append("I'm the third view");
    },
  });

  app.run();
});

document.addEventListener("DOMContentLoaded", function () {
  var teamMembers = document.querySelectorAll(".team-member-img");
  teamMembers.forEach(function (member) {
    member.addEventListener("click", function () {
      var biography = this.getAttribute("data-biography");
      if (biography) {
        alert(biography);
      }
    });
  });
});
