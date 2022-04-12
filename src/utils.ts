export const getYoutubeChannelId = (channel: string) => {
  if (channel.startsWith("https:")) {
    return channel
      .replace(/^https?:\/\/www.youtube.com\/((c|user)\/)?/, "")
      .split("/")[0]
  }
  return channel
}
