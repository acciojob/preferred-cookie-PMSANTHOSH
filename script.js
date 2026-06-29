//your JS code here. If required.
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const form = document.querySelector("form");

// Set Cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Get Cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    let c = cookie.trim();

    if (c.startsWith(name + "=")) {
      return c.substring(name.length + 1);
    }
  }

  return "";
}

// Apply Font Settings
function applySettings(size, color) {
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
}

// Load Saved Preferences
window.addEventListener("load", () => {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    fontSizeInput.value = savedSize;
  }

  if (savedColor) {
    fontColorInput.value = savedColor;
  }

  applySettings(
    savedSize || fontSizeInput.value,
    savedColor || fontColorInput.value
  );
});

// Save Preferences
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  applySettings(size, color);
});
