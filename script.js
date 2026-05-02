function openApp(app) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(app).classList.add("active");

  if (app === "camera") startCamera();
}

function goHome() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("home").classList.add("active");
}

/* TRAVEL WINDOW */
function openWindow() {
  const windowDiv = document.getElementById("planeWindow");
  windowDiv.style.background = "url('assets/rio.jpg') center/cover";
  windowDiv.innerHTML = "";
}

/* CAMERA */
function startCamera() {
  const video = document.getElementById("cam");

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    });
}

function takePhoto() {
  const video = document.getElementById("cam");
  const canvas = document.getElementById("photo");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0);
}
