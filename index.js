
const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let remove = false;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnValue = btn.value;

        if (btnValue === "C") {
            display.value = "";
            remove = false;
        }
        else if (btnValue === "D") {
            display.value = display.value.slice(0, -1);
            remove = false;
        }
        else if (btnValue === "=") {
            const result = eval(display.value);
            display.value = Number.isInteger(result) ? result : result.toFixed(2);
            
            remove = true;
        }
        else {
            if (remove) {
                display.value = btnValue;
                if((display.value).charAt(0) === "0"){
                    display.value = "";
                    remove = true;
                }
                else{
                    remove = false;
                }
            }
            else {
                display.value += btnValue;
                if((display.value).charAt(0) === "0"){
                    display.value = (display.value).slice(0,0);
                }
                
            }
        }
    });
});
