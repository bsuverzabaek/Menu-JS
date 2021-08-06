const menu = [
	{
		id: 1,
		title: "Buttermilk Pancakes",
		category: "Breakfast",
		price: 15.99,
		img: "./images/item-1.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 2,
		title: "Diner Double",
		category: "Lunch",
		price: 13.99,
		img: "./images/item-2.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 3,
		title: "Godzilla Milkshake",
		category: "Shakes",
		price: 6.99,
		img: "./images/item-3.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 4,
		title: "Country Delight",
		category: "Breakfast",
		price: 20.99,
		img: "./images/item-4.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 5,
		title: "Egg Attack",
		category: "Lunch",
		price: 22.99,
		img: "./images/item-5.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 6,
		title: "Oreo Dream",
		category: "Shakes",
		price: 18.99,
		img: "./images/item-6.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 7,
		title: "Bacon Overflow",
		category: "Breakfast",
		price: 8.99,
		img: "./images/item-7.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 8,
		title: "American Classic",
		category: "Lunch",
		price: 12.99,
		img: "./images/item-8.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 9,
		title: "Quarantine Buddy",
		category: "Shakes",
		price: 16.99,
		img: "./images/item-9.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
	{
		id: 10,
		title: "Bison Steak",
		category: "Dinner",
		price: 22.99,
		img: "./images/item-10.jpg",
		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Cumque quidem nihil exercitationem fugiat facilis distinctio nulla aut 
		voluptas deleniti? Laboriosam!`,
	},
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded',function(){
	displayMenuItems(menu);
	displayMenuButtons();
});

function displayMenuItems(menuItems){
	let displayMenu = menuItems.map(function(item) {
		return `<article class="menu-item">
          			<img src=${item.img} class="photo" alt=${item.title}>
          			<div class="item-info">
            			<header>
              				<h4>${item.title}</h4>
              				<h4 class="price">$${item.price}</h4>
            			</header>
            			<p class="item-text">
            				${item.desc}
            			</p>
          			</div>
        		</article>`;
	});

	displayMenu = displayMenu.join("");
	sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
	const categories = menu.reduce(
		function(values,item){
			if(!values.includes(item.category)){
				values.push(item.category);
			}

			return values;
		},
		['all']
	);
	
	const categoryBtns = categories.map(function(category){
		return `<button class="filter-btn" type="button" data-id=${category}>
					${category}
				</button>`;
	}).join("");

	container.innerHTML = categoryBtns;
	const filterBtns = container.querySelectorAll('.filter-btn');

	filterBtns.forEach(function(btn){
		btn.addEventListener('click',function(e){
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter(function(menuItem){
				if(menuItem.category===category){
					return menuItem;
				}
			});

			if(category==='all'){
				displayMenuItems(menu);
			}else{
				displayMenuItems(menuCategory);
			}
		});
	});
}