module.exports = {
  stripeApiSecretKey: fromEnv("STRIPE_API_SECRET_KEY", "sk_test_51IqiLvAwvgPZiPtRXQqCIPKLrTeMEJzjLMrMoqhmmlDoYF319VuKoFBMSwqP1E982yIOgbC1dwS76OdGShSD4VQO00Ykp1WKgK"), // Contact you administrator for the key
  port: fromEnv("PORT", 8082),
  //allowedOrigins: fromEnv("ALLOWED_ORIGINS", ['http://localhost:8080']),
  allowedOrigins: fromEnv("ALLOWED_ORIGINS", JSON.stringify([])),
  authSystemToken: fromEnv("AUTHORIZATION_SYSTEM_TOKEN", "b24b3b0e-9257-466b-949e-8c0c3841eeb5"),
};

// In production environments, read from the environment. Otherwise, use a
// default for development, allowing the value to be overridden.
function identity(x) {
  return x;
}

// Read from the environment, or use a default.
function fromEnv(varName, defValue, transform) {
  transform = transform || identity;
  const envValue = process.env[varName];
  if (envValue !== undefined) {
    return transform(envValue);
  }
  return defValue;
}
