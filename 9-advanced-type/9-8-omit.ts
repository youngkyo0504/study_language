{
  {
    type Video = {
      id: string;
      title: string;
      url: string;
      data: string;
    };
    type VideoMetadata = Omit<Video, "url" | "data">; // 다른 어떤 키들도 가져올 수 있다 .. 제외한 아이들을 픽한다.
    function getVideo(id: string): Video {
      return {
        id,
        title: "video",
        url: "https://..",
        data: "byte-data..",
      };
    }

    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id: id,
        title: "title",
      };
    }
  }
}
