//create resources
const resources = [
    {
        heading: "Solution 1", 
        path: "./img/solution1.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec eros in justo congue porta at a orci. Praesent lobortis, lorem vitae feugiat pellentesque, ligula dui interdum sapien, sit amet convallis ipsum erat non magna. Curabitur tincidunt arcu turpis, eget congue magna·· lacinia et. Pellentesque vitae quam odio. Quisque blandit tortor at vehicula accumsan. Pellentesque quis mi varius, convallis felis at, scelerisque tellus. Proin sit amet erat leo. Sed sed quam nunc.Fusce commodo ac magna sit amet faucibus. Maecenas rhoncus dapibus consectetur. Phasellus placerat sapien quis est faucibus lacinia."
    },
    {
        heading: "Solution 2",
        path: "./img/solution2.jpg",
        body: "Sed placerat at arcu vel auctor. Fusce commodo ac magna sit amet faucibus. Maecenas rhoncus dapibus consectetur. Phasellus placerat sapien quis est faucibus lacinia. Aliquam imperdiet auctor viverra. Duis porta nibh quis libero mattis varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum viverra faucibus magna nec efficitur.Pellentesque quis mi varius, convallis felis at, scelerisque tellus. Proin sit amet erat leo. Sed sed quam nunc.Vivamus scelerisque ex et congue congue. Mauris semper lacus in tellus eleifend, vel lobortis ligula ultrices. Duis venenatis mauris sed odio scelerisque pretium."
    },
    {
        heading: "Solution 3",
        path: "./img/solution3.jpg",
        body: "Aliquam imperdiet auctor viverra. Duis porta nibh quis libero mattis varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum viverra faucibus magna nec efficitur. Sed placerat at arcu vel auctor. Fusce commodo ac magna sit amet faucibus. Maecenas rhoncus dapibus consectetur.Quisque consequat nisi dictum, pharetra nibh vitae, tincidunt purus. Nullam sagittis bibendum nisi id aliquet. Vivamus tincidunt nunc sed rhoncus gravida. Duis mollis commodo venenatis. Aliquam vitae consequat dui."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");
currentContent.innerHTML = `<article>
							<h2>${resources[0].heading}</h2>
							<img src="${resources[0].path}">
							<p>${resources[0].body}</p>
							</article>`;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.currentTarget.innerHTML;
    console.log(ev.currentTarget.innerHTML);

   if (eventTarget == '<i class="fas fa-lightbulb a"></i>') {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if (eventTarget === '<i class="fas fa-lightbulb b"></i>') {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>`;
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }
	
//	move id to the current button
	for (let btn of btns) {
		if (btn.id) {
			btn.removeAttribute("id");
        }
	}
	
	ev.currentTarget.id = "active";

}

/* REGISTERING EVENT CONTENT */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);