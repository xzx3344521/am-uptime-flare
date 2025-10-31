const pageConfig = {
  title: "数字套利 •「AM科技」's Status Page",
  links: [
    { link: 'https://github.vps7k7k.xyz', label: 'GitHub加速', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API
  passwordProtection: '3344:3344',
  // Define all your monitors here
  monitors: [
    {
      id: 'github',
      name: 'GitHub加速服务',
      method: 'GET',
      target: 'https://github.vps7k7k.xyz',
      tooltip: 'GitHub镜像加速服务状态监控',
      statusPageLink: 'https://github.vps7k7k.xyz',
      timeout: 20,
      // 如果你的github.vps7k7k.xyz服务也需要认证3344:3344，取消下面的注释
      // headers: {
      //   'Authorization': 'Basic ' + btoa('3344:3344')
      // }
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
