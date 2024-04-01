

function openModal(id) {

const value = data?.find(item => item.id === id);

const modal = document.getElementById("myModal");
modal.innerHTML = `

<div class="modal-content">
<img class="modalImg" src="./images/${value.img}" alt="${value.name}">
<div>
<h2>${value.name}</h2>
<p class="description">${value.description}</p>
<p class ="info" > <strong>country:</strong> ${value.country}</p>
<p class ="info" > <strong>Usage:</strong> ${value.usage}</p>
<p class ="info"><strong>Price:</strong> ${value.price}</p>
<button onclick="window.location.href='contact.html'" class="buy-button">Buy Now</button>
</div>

</div>
`;

  document.getElementById('myModal').style.display = 'flex';
}


// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close the modal if clicked outside of the content
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


const data = [
    {
      "id" : 1,
      "name": "Penny Black",
      "country": "United Kingdom",
      "description": "The Penny Black, issued in 1840, is often considered the world's first adhesive postage stamp. It features a profile of Queen Victoria.",
      "usage": "It was used for mailing letters within the United Kingdom.",
      "price": "The cost was one penny, regardless of the distance traveled.",
      "img":"Penny_black.jpg"
    },
    {
      "id" : 2,
      "name": "Inverted Jenny",
      "country": "United States",
      "description": "The Inverted Jenny is a famous U.S. stamp issued in 1918. It features an airplane (Jenny) printed upside down.",
      "usage": "Used for airmail service during its time.",
      "price": "The face value was 24 cents.",
      "img":"US_Airmail_inverted_Jenny_24c_1918_issue.jpg"

    },
    {
      "id" : 3,
      "name": "Mauritius 'Post Office'",
      "country": "Mauritius",
      "description": "Issued in 1847, the Mauritius 'Post Office' stamps are among the rarest and most valuable. They feature the words 'Post Office' rather than the usual 'Post Paid.'",
      "usage": "Intended for general postage within the island of Mauritius.",
      "price": "Today, these stamps are extremely rare and valuable among collectors.",
      "img":"Mauritius_stamp.jpg"

    },
    {
      "id" : 4,
      "name": "Three Skilling Yellow",
      "country": "Sweden",
      "description": "The Three Skilling Yellow is a Swedish stamp issued in 1855. It has a yellowish-orange color and features the Swedish coat of arms.",
      "usage": "Initially intended for local postage within Sweden.",
      "price": "It has become valuable due to its rarity, with only one known to exist. In 1996, it was sold at auction for over $2 million.",
      "img":"Gul_tre_skilling_banco.jpg"

    },
    {
      "id" : 5,
      "name": "Blue Mauritius",
      "country": "Mauritius",
      "description": "The Blue Mauritius, issued in 1847, is another rare stamp from Mauritius, featuring the profile of Queen Victoria.",
      "usage": "Similar to the 'Post Office' stamps, used for general postage within Mauritius.",
      "price": "Extremely rare and valuable; one of the most sought-after stamps by collectors.",
      "img":"Modry_mauritius.jpg"

    },
    {
      "id" : 6,
      "name": "Gandhi Stamps",
      "country": "India",
      "description": "India issued stamps featuring Mahatma Gandhi in various denominations from 1948 onwards.",
      "usage": "Used for regular postal services and to commemorate events related to Mahatma Gandhi.",
      "price": "The value varies based on factors such as rarity, condition, and specific editions.",
      "img":"Mahatma_Gandhi_10_Rupees.jpg"

    }
  ]