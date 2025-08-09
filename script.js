const themeToggler = document.querySelector(".theme-toggler");

if (themeToggler) {
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  });
}

const evalContainer = document.querySelector(".evaluations");

db.collection("evaluations")
  .orderBy("date", "desc")
  .limit(10)
  .onSnapshot((snapshot) => {
    evalContainer.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const dateVal = data.date?.toDate ? data.date.toDate() : new Date(data.date);
      const evalDiv = document.createElement("div");
      evalDiv.classList.add("evaluation");
      evalDiv.innerHTML = `
        <div class="message">
          <p><span class="eval-code">${data.code} - ${data.type} - Completed : ${data.status}</span></p>
          <small class="text-muted">${dateVal.toLocaleDateString()}</small>
        </div>
      `;
      evalDiv.addEventListener("click", () => {
        localStorage.setItem("selectedEval", JSON.stringify(data));
        window.location.href = "evaluation_view.html";
      });
      evalContainer.appendChild(evalDiv);
    });
  });
