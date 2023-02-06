/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: "#404EED",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
        discord_serversBg: "#202225",
        discord_channelsBg: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
        discord_channelText: "#8e9297",
        discord_channelHoverBg: "#3a3c43",
        discord_userSectionText: "#b9bbbe",
        discord_iconHoverBg: "#3a3c43",
        discord_userSectionBg: "#292b2f",
        discord_iconHover: "#dcddde",
        discord_chatBg: "#36393f",
        discord_chatHeader: "#72767d",
        discord_chatHeaderInputBg: "#202225",
        discord_chatInputBg: "#40444b",
        discord_chatInputText: "#dcddde",
        discord_chatInput: "#72767d",
        discord_messageBg: "#32353b",
        discord_messageTimestamp: "#72767d",
        discord_message: "#dcddde",
        discord_red: "#ed4245",
        discord_link: "#01adf1",
      },
      height: {
        "83vh": "83vh",
        "10vh": "10vh"
      },
      borderRadius: ['hover', 'focus'],
      backgroundImage: {
        'garchomp': "url('https://pokewalls.files.wordpress.com/2011/08/445garchomp1920x1200.jpg')"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
