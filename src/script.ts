const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
const resultArtist = document.getElementById('result-artist') as HTMLElement | null;
const resultPlaylist = document.getElementById('result-playlists') as HTMLElement | null;

interface Artist {
  name: string;
  urlImg: string;
}

function requestApi(searchTerm: string): void {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result: Artist[]) => displayResults(result));
}

function displayResults(result: Artist[]): void {
  if (resultPlaylist) {
    resultPlaylist.classList.add('hidden');
  }

  const artistName = document.getElementById('artist-name') as HTMLElement | null;
  const artistImage = document.getElementById('artist-img') as HTMLImageElement | null;

  result.forEach((element) => {
    if (artistName) artistName.innerText = element.name;
    if (artistImage) artistImage.src = element.urlImg;
  });

  if (resultArtist) {
    resultArtist.classList.remove('hidden');
  }
}

document.addEventListener('input', function () {
  if (searchInput) {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
      if (resultPlaylist) resultPlaylist.classList.add('hidden');
      if (resultArtist) resultArtist.classList.remove('hidden');
      return;
    }

    requestApi(searchTerm);
  }
});