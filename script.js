//your code here
const touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles ('a', 'an', 'the') from a band name
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the touristSpots array without articles
const sortedTouristSpots = touristSpots.slice().sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Create an unordered list
const ul = document.createElement('ul');
ul.id = 'bands';

// Add the sorted band names as list items to the ul
sortedTouristSpots.forEach(function(band) {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

// Append the ul to the document body
document.body.appendChild(ul);

