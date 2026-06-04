export const getPasswordStrength = (password) => {
  const rules = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ];

  const passed = rules.filter(Boolean).length;

  return {
    strength: passed <= 2 ? "Weak" : passed <= 4 ? "Medium" : "Strong",
    percentage: (passed / 5) * 100,
  };
};
