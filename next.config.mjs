/*
 * @Description: --☀☺☀--
 * @Author: Jhon
 * @Date: 2024-05-29 14:50:04
 * @LastEditors: Jhon
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.zhipin.com',
        port: '',
        pathname: '/v2/web/geek/images/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/beijin/weixin-service/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/static/file/2023/**',
      },
      {
        protocol: 'https',
        hostname: 'static.zhipin.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/static/file/2024/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/beijin/upload/com/logo/20190529/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/beijin/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'glassgenerator.netlify.app',
        port: '',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'f3-static.bytednsdoc.com',
        port: '',
        pathname: '/obj/eden-cn/uldnupqplm/**',
      },
      {
        protocol: 'https',
        hostname: 'c-res.zhipin.com',
        port: '',
        pathname: '/jrs/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/boss/**',
      },
      {
        protocol: 'https',
        hostname: 'img.bosszhipin.com',
        port: '',
        pathname: '/blueapp/**',
      },
      {
        protocol: 'https',
        hostname: 'img.dianzhangzhipin.com',
        port: '',
        pathname: '/blueapp/**',
      },
      {
        protocol: 'https',
        hostname: 'img.kanzhun.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.bosszhipin.com',
        port: '',
        pathname: '/mcs/**',
      },
    ],
  },
};

export default nextConfig;
