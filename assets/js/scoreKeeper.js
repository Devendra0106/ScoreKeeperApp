const b1 = {
	check: "P1",
	count: 0,
	btn: document.querySelector("#one"),
	val: document.querySelector("#p1")
}

const b2 = {
	check: "P2",
	count: 0,
	btn: document.querySelector("#two"),
	val: document.querySelector("#p2")
}

var reset = document.querySelector("#rs");
var inp = document.querySelector("#rounds");
var msg = document.querySelector("#notification");

var isOver = false;
var limit = 1;

b1.btn.addEventListener("click", function () {
	updateScore(b1, b2);
});

b2.btn.addEventListener("click", function () {
	updateScore(b2, b1);
});

inp.addEventListener("change", function () {
	limit = Number(inp.value);
	reset1();
})

reset.addEventListener("click", reset1);

function reset1() {
	isOver = false;
	msg.textContent = "Player 1 and Player 2 are playing";
	for (var b of [b1, b2]) {
		b.val.textContent = 0;
		b.count = 0;
		b.val.classList.remove("has-text-success", "has-text-danger");
		b.btn.disabled = false;
	}
}

function updateScore(player, opponent) {
	if (!isOver) {
		player.count += 1;
		if (player.count === limit) {
			player.val.classList.add("has-text-success");
			opponent.val.classList.add('has-text-danger');
			if (Object.values(player)[0] === "P1") {
				msg.textContent = "Player 1 Won!";
			}
			if (Object.values(player)[0] === "P2") {
				msg.textContent = "Player 2 Won!";
			}
			isOver = true;
			player.btn.disabled = true;
			opponent.btn.disabled = true;
		}
		player.val.textContent = player.count;
	}
}







