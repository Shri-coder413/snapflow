const reels = [
  {
    username: "santoru.gojo",
    title: "This Anime Lovers For You",
    profileImage:
      "https://i.pinimg.com/736x/c8/a6/3c/c8a63c1d3329b5f04ce9cf772cc881b3.jpg",
    reelVideo: "./reels/reel1.mp4",
    musicImage: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    likesCount: 35600,
    commentCount: 1240,
    repostCount: 880,
    savedCount: 5300,
    isFollowed: false,
    isLiked: true,
  },
  {
    username: "filmy.talks",
    title: "Marks Zuckerberg Mindset Talk",
    profileImage:
      "https://imgs.search.brave.com/1kAY_QngJ-cIM06mIUB117gfx7hLC7SZcxHJ5FpZThY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgwNDc1/MTMuanBn",
    reelVideo: "./reels/reel4.mp4",
    musicImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    likesCount: 41800,
    commentCount: 1560,
    repostCount: 1120,
    savedCount: 6900,
    isFollowed: true,
    isLiked: true,
  },
  {
    username: "foodie.craving",
    title: "Crunchy Snacks with Smoothness 🤤",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    reelVideo: "/reels/reel5.mp4",
    musicImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    likesCount: 26700,
    commentCount: 740,
    repostCount: 510,
    savedCount: 3800,
    isFollowed: true,
    isLiked: false,
  },
  {
    username: "sinchan.vibes",
    title: "Shinchan Pocket Money Scene 😂",
    profileImage:
      "https://imgs.search.brave.com/eGlOiOUIDYWKkFggDwJUZBZDDAjGB2duScy8THlifhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zYWRn/aXJsZHAuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9TaGluY2hh/bi1DYXJ0b29uLUlt/YWdlLmpwZWc",
    reelVideo: "/reels/reel3.mp4",
    musicImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    likesCount: 28400,
    commentCount: 980,
    repostCount: 620,
    savedCount: 4100,
    isFollowed: true,
    isLiked: false,
  },
  {
    username: "family.drama",
    title: "When Papa Cooks Food 🍕",
    profileImage:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    reelVideo: "/reels/reel2.mp4",
    musicImage: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    likesCount: 50200,
    commentCount: 1840,
    repostCount: 1460,
    savedCount: 3200,
    isFollowed: false,
    isLiked: true,
  },
  {
    username: "oggy.cocroach",
    title: "When play the oggy cartoon roles",
    profileImage:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    reelVideo: "/reels/oggy.mp4",
    musicImage: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    likesCount: 50200,
    commentCount: 1840,
    repostCount: 1460,
    savedCount: 3200,
    isFollowed: false,
    isLiked: true,
  },
];

const reelWheel = document.querySelector(".reels-carousal");

function showReels() {
  let allReels = reels
    .map((reel, idx) => {
      return `<div class="reel" >
      <video loop preload="metadata" muted src=${reel.reelVideo} type="mp4"></video>

      <div class="reel-responses">
        <div class="response" id=${idx}>
          ${reel.isLiked ? '<i class="red-like ri-poker-hearts-fill"></i>' : '<i class="ri-heart-line"> </i>'}
          <strong>${likeFormater(reel.likesCount)}</strong>
        </div>
        <div class="response">
          <i class="ri-chat-3-line"></i>
          <strong>${likeFormater(reel.commentCount)}</strong>
        </div>
        <div class="response">
          <i class="ri-send-ins-line"></i>
        </div>
        <div class="response">
          <i class="ri-bookmark-line"></i>
          <strong>${likeFormater(reel.savedCount)}</strong>
        </div>
        <div class="response">
          <i class="ri-more-2-line"></i>
        </div>
        <div class="reel-song">
          <img loading="lazy" src=${reel.musicImage}
            alt="song.png">
          </i>
        </div>
      </div>

      <div class="bottom">
        <div class="profile-section">
          <div class="profile-image">
            <img loading="lazy" src=${reel.profileImage} alt="">
          </div>
          <p>${reel.username}</p>
          <button class="follow-button" id="${idx}">${reel.isFollowed ? "Unfollow" : "Follow"}</button>
        </div>
        <h4 class="caption">${reel.title}</h4>
        </div>
    </div>`;
    })
    .join("");

  reelWheel.innerHTML = allReels;
}

function likeFormater(count) {
  if (count >= 1000000) return Math.round(count / 1000000).toFixed(1) + "M";
  if (count >= 1000) return (count / 1000).toFixed(1) + "K";
  return count;
}

function handleVideoPlayback() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play();
          video.muted = false;
        } else {
          video.pause();
          video.muted = true;
        }
      });
    },
    { threshold: 0.6 },
  );

  document.querySelectorAll("video").forEach((video) => {
    observer.observe(video);
  });
}

reelWheel.addEventListener("click", (e) => {

  let elem = reels[e.target.id]

  if (!elem.isFollowed) {
    elem.isFollowed = true;
  } else {
    elem.isFollowed = false;
  }

  if (!elem.isLiked) {
    elem.likesCount++;
    elem.isLiked = true;
  } else {
    elem.likesCount--;
    elem.isLiked = false;
  }

  showReels();
  handleVideoPlayback();
});

showReels();
handleVideoPlayback();
