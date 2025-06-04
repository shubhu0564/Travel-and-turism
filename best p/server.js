<script>
  const modal = document.getElementById("authModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  openBtn.onclick = () => modal.style.display = "flex";
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  loginTab.onclick = () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  };

  registerTab.onclick = () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  };

  // Handle Registration
  registerForm.querySelector("button").addEventListener("click", () => {
    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    if (name && email && password) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registered successfully!");
      registerForm.reset();
    } else {
      alert("Please fill all fields.");
    }
  });

  // Handle Login
  loginForm.querySelector("button").addEventListener("click", () => {
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful! Welcome, " + storedUser.name);
      modal.style.display = "none";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
</script>
