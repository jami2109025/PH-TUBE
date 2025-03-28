function loadVideos() {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    //     { category_id: '1003', video_id: 'aaai', thumbnail: 'https://i.ibb.co/kc8CCFs/30-rock.png', title: '30 Rock', authors: Array(1), … }
    //     authors
    //     :
    //     [{… }]
    //     category_id
    //     :
    //     "1003"
    //     description
    //     :
    //     "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
    //     others
    //     :
    //     { views: '4.5K', posted_date: '14800' }
    //     thumbnail
    //     :
    //     "https://i.ibb.co/kc8CCFs/30-rock.png"
    //     title
    //     :
    //     "30 Rock"
    //     video_id
    //     :
    //     "aaai"
    //     [[Prototype]]
    // :
    // Object

    videos.forEach((video) => {
        console.log(video);

        const videoCard = document.createElement('div');

        videoCard.innerHTML = `
            <div class="card">
            <figure class="relative">
                <img class=" w-full h-[150px] object-cover " src="${video.thumbnail}" alt="profile" />
                <span class="absolute bottom-2 right-2 bg-black text-white px-2 rounded-md">3hrs 56 min ago</span>
            </figure>
            <div class="card-body">
                <div class="flex space-x-5">
                    <div class="avatar">
                        <div class="w-12 h-12 rounded-full">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold">${video.title}</h2>
                        <p class="flex">${video.authors[0].profile_name} <img class="w-5 h-5"
                                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
                        </p>
                        <p class="text-gray-400">${video.others.views}</p>
                    </div>
                </div>
            </div>
        </div>
        `

        videoContainer.append(videoCard);

    });
}

loadVideos()