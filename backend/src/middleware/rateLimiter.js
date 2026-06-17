import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.ip ||
      "127.0.0.1";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests. Please try again later.",
      });
    }

    next();
  } catch (err) {
    console.log("Rate limit error:", err);
    next(err);
  }
};

export default rateLimiter;