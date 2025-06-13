document.getElementById("followerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    followers: formData.get("followers")
  };
  console.log("Form submitted:", data);
  alert("Submitted! (Check console for data)");
  this.reset();
});
