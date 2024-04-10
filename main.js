document.getElementById("submit").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let nameone = document.getElementById("name");
  let submit = document.getElementById("submit");
  let text = document.getElementById("text");
  let label = document.getElementById("label");
  let labelone = document.getElementById("labelone");
  let numone = document.getElementById("numone").value;
  let num = document.getElementById("numone");
  let textone = document.getElementById("textone");

  if (name != "") {
    if (
      (numone === "01016911625", "01116828313", "01013603021", "01115433411")
    ) {
      text.innerHTML = ` كل سنه و انت طيب يا دكتور <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    }
    if (numone === "01022060619") {
      text.innerHTML = ` كل سنه و انت طيب يا دكتوره <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    }
    if (numone === "مريم") {
      text.innerHTML = ` كل سنه و انت طيب يا دكتوره <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    }
    if (numone === "01050366341") {
      text.innerHTML = ` كل سنه و انت طيب يا باشمهندس <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    }
    if (numone === "01022791038") {
      text.innerHTML = ` كل سنه و انت طيب يا حج <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    } else {
      text.innerHTML = ` كل سنه و انت طيب يا <br> <span>${name}<span/>`;
      textone.style.display = "flex";
      nameone.style.display = "none";
      submit.style.display = "none";
      label.style.display = "none";
      labelone.style.display = "none";
      num.style.display = "none";
    }
  }
});

//---------------------------------------------------
function requestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission()
      .then(function (permission) {
        if (permission === "granted") {
          showNotification();
        }
      })
      .catch(function (error) {
        console.error("حدث خطأ أثناء طلب إذن الإشعارات:", error);
      });
  }
}

function showNotification() {
  if ("Notification" in window && Notification.permission === "granted") {
    let name = document.getElementById("name").value;
    if (name != "") {
      var notification = new Notification(" كل عام وأنت بخير!", {
        body: ` كل سنه و انت طيب يا  ${name}`,
        icon: "img.jpg",
      });
    }

    notification.onclick = function () {
      // إجراء عند النقر على الإشعار
    };
  }
}

var audio = document.getElementById("audioPlayer");
var submitButton = document.getElementById("submit");

audio.addEventListener("ended", function() {
  audio.pause(); // إيقاف تشغيل الصوت عند انتهائه
});

submitButton.addEventListener("click", function() {
  let name = document.getElementById("name").value;
  
  if (name !== "") {
    audio.currentTime = 0; // إعادة تعيين مؤشر الصوت إلى البداية
    audio.play(); // تشغيل الصوت
    
    if (name === 'مريم') {
      audio.pause(); // إيقاف تشغيل الصوت إذا كان الاسم يساوي "مريم"
    }
  }
});








var audioone = document.getElementById("audioPlayerone");
var submitButton = document.getElementById("submit");

audioone.addEventListener("ended", function () {
  audio.pause(); // إيقاف تشغيل الصوت عند انتهائه
});

submitButton.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  if (name === "مريم") {
    if (audioone.paused) {
      audioone.play();
    }
  }
});
