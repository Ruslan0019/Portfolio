/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация изображений
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Увеличиваем кэширование изображений
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 год
  },

  // Компрессия Gzip (по умолчанию включена)
  compress: true,

  // Реактивная загрузка страниц
  reactStrictMode: true,

  // Оптимизация для производства
  productionBrowserSourceMaps: false,

  // Headers для кэширования
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, s-maxage=60",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Редиректы (удалить неиспользуемые страницы)
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
