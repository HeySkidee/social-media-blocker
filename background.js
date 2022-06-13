//URLs to block
let blockedUrls = [
  {
    link: "twitter.com",
  },
  {
    link: "facebook.com",
  },
  {
    link: "instagram.com",
  },
  {
    link: "linkedin.com",
  },
  {
    link: "discord.com",
  },
  {
    link: "reddit.com",
  },
  {
    link: "pinterest.com",
  },
  {
    link: "open.spotify.com",
  },
  {
    link: "music.apple.com",
  },
  {
    link: "soundcloud.com",
  },
  {
    link: "quora.com",
  },
];

blockedUrls.forEach((element) => {
  if (window.location.origin.includes(element.link)) {
    document.getElementsByTagName("body")[0].innerHTML =
      '<div><img src="https://cdn.discordapp.com/attachments/716523839634407436/968863806522535987/Everyday_All_Day_100_2.png" style="margin: 0px auto ; height: 100vh; display: flex;"></div>';


    // '<div><img src="https://cdn.discordapp.com/attachments/716523839634407436/968815045570101268/kankan_morning_auto_x2.jpg" style="margin: 0px auto ; height: 100vh; display: flex;"></div>';
    // '<div><img src="https://cdn.discordapp.com/attachments/716523839634407436/968813547696054292/kankan_teddy.png" style="margin: 0px auto ; height: 100vh; display: flex;"></div>';

  }
});
