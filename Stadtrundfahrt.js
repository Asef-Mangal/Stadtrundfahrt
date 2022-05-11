import {shopping_items} from './shopping_item.js';


// side Navigation
    //sidenav icon
const sideNavIcon = document.querySelector('#sideNavIcon');
const sideNavIconLine = document.querySelectorAll('.line');
const sideNavContainer = document.querySelector('#sideNavContainer');

sideNavIcon.onclick = showOrHideSideNav;

let SideNavAppearance = false;
function showOrHideSideNav() {
    if (SideNavAppearance == false) {
        sideNavContainer.style.transform = `translateX(${260}px)`;
        sideNavIconLine[0].style.transform = "rotate(45deg) translateX(5px) translateY(12px)";
        sideNavIconLine[1].style.visibility = "hidden";
        sideNavIconLine[1].style.transition = "all 0.3s ease-in-out";
        sideNavIconLine[2].style.transform = "rotate(-45deg) translateX(1px) translateY(-7.5px)";
        SideNavAppearance = true;
    } else if (SideNavAppearance == true) {
        sideNavContainer.style.transform = `translateX(${-260}px)`;
        sideNavIconLine[0].style.transform = "rotate(0deg) translateX(0px) translateY(0px)";
        sideNavIconLine[1].style.visibility = "inherit";
        sideNavIconLine[2].style.transform = "rotate(0deg) translateX(0px) translateY(0px)"; 
        SideNavAppearance = false;
    }
    Change_leftBorderAndBGcolor(sideNav_MainItemArr);
    Change_leftBorderAndBGcolor(sideNav_SubMenuItemArr);
}

    //Side Nav Main Menu
const sideNav_MainItemArr = document.querySelectorAll('.MainMenu');
const sideNav_SubMenuItemArr = document.querySelectorAll('.SubMenu');

function toggle_leftBorderAndBGcolor_class(element) {
    element.toggle('leftBorderAndBGcolor');
}

function Change_leftBorderAndBGcolor (array) {
    for (let i = 0; i < array.length; i++) {
        const MenuItem = array[i];
        MenuItem.addEventListener('click', (e) => {
            let targeted_Menu_Item = e.target;
            let SubMenu = targeted_Menu_Item.nextElementSibling.classList;

            toggle_leftBorderAndBGcolor_class(targeted_Menu_Item.classList)
            loopToUnselectOtherMenuItems(array, targeted_Menu_Item);
            SubMenu.toggle('displayBlock');
        });
    }
};

function loopToUnselectOtherMenuItems(arr, targetedItem) {
    for (let i = 0; i < arr.length; i++) {
        const MenuItem = arr[i];
        if (MenuItem != targetedItem) {
            MenuItem.classList.remove('leftBorderAndBGcolor');
            MenuItem.nextElementSibling.classList.remove('displayBlock');
        }
    }
}

// carousel
const previewArrow = document.querySelector('.previewBtn');
const nextArrow = document.querySelector('.nextBtn');
const imgContainerSize = imgContainer.clientWidth;
//console.log(imgContainer.children.length);

let counter = 0;

previewArrow.onclick = moveImgContainerRight;
function moveImgContainerRight() {
    const imgSize = imgContainer.children[0].clientWidth;
    if (counter < imgContainer.children.length * 0) {
        counter++;
        imgContainer.style.transform = `translateX(${imgSize * counter}px)`;
        //console.log(counter * imgSize);  
    }
    dot[-(counter)].style.backgroundColor = "white";
    dot[-(counter)].nextElementSibling.style.backgroundColor = "";
}
nextArrow.onclick = moveImgContainerLeft;
function moveImgContainerLeft() {
    const imgSize = imgContainer.children[0].clientWidth;
    if (counter > - imgContainer.children.length) {
        counter--;
        imgContainer.style.transform = "translateX(" + (imgSize * counter) +"px)";
        console.log(counter);
    }
    if (counter == - imgContainer.children.length){
        counter =  -imgContainer.children.length - counter;
        imgContainer.style.transform = "translateX(" + imgSize * counter + "px)";
        //console.log(counter);
        dot[-counter + imgContainer.children.length - 1].style.backgroundColor = "";
    }
    dot[-counter].previousElementSibling.style.backgroundColor = "";
    dot[-counter].style.backgroundColor = "white";
}
// dots
const dotsContainer = document.querySelector('#dotsContainer').children;
const dot = document.querySelectorAll('.dot');
dot[0].style.backgroundColor = "white";
dot.forEach(function targetEachDots(EachDot) {
    EachDot.addEventListener('click', function targetCurrentDot(e) {
        counter = e.target.id;
        const imgSize = imgContainer.children[0].clientWidth;
        imgContainer.style.transform = "translateX(" + (imgSize * counter) +"px)";
            dot.forEach(function selectDots(dotAsElement){
                if (dotAsElement != e.target) {
                    dotAsElement.style.backgroundColor = "";
                }
            });
            this.style.backgroundColor = "white"; 
    })
});

// Offer section: filtering the offers, wish item list
const Shopping_cart = document.querySelector("#Shopping-cart");
let shopping_cart_show = false;
const shopping_icon = document.querySelector("#shopping-icon");
const close_btn_of_wish_item_list = document.querySelector("#close_btn");
    close_btn_of_wish_item_list.addEventListener("click",open_or_close_wish_item_list)
shopping_icon.addEventListener("click",open_or_close_wish_item_list)
function open_or_close_wish_item_list() {
    if (shopping_cart_show == false) {
        Shopping_cart.style.transform = `translateX(${-655}px)`;
        shopping_cart_show = true;
    }else if (shopping_cart_show == true) {
        Shopping_cart.style.transform = `translateX(${655}px)`;
        shopping_cart_show = false;
    }
}

const cart_add_btn = document.querySelectorAll(".add");
const cart_substract_btn = document.querySelectorAll(".substract");
let main_shopping_item_count = document.querySelector("#main_shopping-item-count");
const More_item_count = document.querySelector("#More-item-count");
let wish_item_tableBody = document.querySelector("#wish_item_tableBody");

function add_plus_sign_to_shopping_icon() {
    if (main_shopping_item_count.innerHTML >= 9) {
        More_item_count.classList.add("displayBlock");
        More_item_count.classList.remove("displayNone");
    }
    if (main_shopping_item_count.innerHTML <= 9) {
        More_item_count.classList.add("displayNone");

        More_item_count.classList.remove("displayBlock");
    }
}

const offerFilterBtn = document.querySelectorAll(".offerFilterBtn");
const offerFilterBtn_div = document.querySelector("#offerFilterBtnDiv");
    offerFilterBtn[3].classList.add("selectedFilterBtn");
const filter_btn_for_small_device = document.querySelector("#chosed_filter");
    filter_btn_for_small_device.innerHTML= offerFilterBtn[3].innerHTML;
    filter_btn_for_small_device.addEventListener('click', open_offerFilterBtn_div)

function open_offerFilterBtn_div(e) {
    e.target.classList.add("open");
    offerFilterBtn_div.style.visibility = "inherit";
    console.log(e.target.className);
}
window.addEventListener('resize', function(){
    let newWidth = window.innerWidth;
    if (newWidth > 768) {
        filter_btn_for_small_device.classList.add("open");
        offerFilterBtn_div.style.visibility = "inherit";
    }
});

let shoppingItems_array = [];



function push_all_products_to_shopping_items_array() {
    shopping_items.forEach((each_shopping_item) => {
        shoppingItems_array.push(each_shopping_item);
        console.log(shoppingItems_array)
    })
}
push_all_products_to_shopping_items_array();

const search_bar = document.querySelector("#search_bar");
search_bar.addEventListener("input", push_search_products_to_shopping_items_array)

function push_search_products_to_shopping_items_array(e) {
    shoppingItems_array = [];
    cartDiv.innerHTML = "";
    
    let search_input_value = e.target.value
    shopping_items.forEach((ShoppingItem) => {
        if (ShoppingItem.name.includes(search_input_value)) {
            console.log("yes")
            shoppingItems_array.push(ShoppingItem);
            console.log(shoppingItems_array)
        }
        console.log(ShoppingItem.name)

    })
    console.log(cartDiv.children[2]);
    console.log(search_input_value)

    render_cart();
}
let cartDiv = document.querySelector("#cartDiv");

function render_cart() {
    console.log("render_cart is rendert");

    shoppingItems_array.forEach((each_shopping_item) => {
        // creating main cart div
        const cart = document.createElement('div');
            cart.id = "cart";
            
        const cart_image = document.createElement('img');
            cart_image.src = each_shopping_item.imgSrc;

        const cart_name = document.createElement('h3');
            cart_name.innerHTML = each_shopping_item.name;
            cart_name.id = each_shopping_item.id;


        const cart_discription = document.createElement('p');
            cart_discription.innerHTML = each_shopping_item.description;

        const cart_price_div = document.createElement('div');
            cart_price_div.className = "cart_price";
        
        const cart_price = document.createElement('span');
            cart_price.innerHTML = each_shopping_item.price;
            cart_price_div.innerHTML = `Preis: `;
            cart_price_div.append(cart_price);

        const cart_shopping_icon_div = document.createElement('div');
            cart_shopping_icon_div.className = "cart-shopping-icon-div"

        const cart_add_button = document.createElement('button');
            cart_add_button.innerHTML = "hinzufügen";
            cart_add_button.className = "add";
            cart_add_button.onclick = add_item_to_wish_cart;
                
                
        const shopping_cart_venture_and_counter_wrapper = document.createElement('div');
        shopping_cart_venture_and_counter_wrapper.classList.add("shoppinCart_venture_and_counter_wrapper")

        const cart_i_shopping_venture = document.createElement('i');
            cart_i_shopping_venture.className = "fas fa-shopping-cart";

        const cart_item_counter = document.createElement('div');
            cart_item_counter.className = "cart-item-counter";
            cart_item_counter.id = "cart-item-count";

            shopping_cart_venture_and_counter_wrapper.append(cart_item_counter, cart_i_shopping_venture)

            cart_shopping_icon_div.append(cart_add_button, shopping_cart_venture_and_counter_wrapper);
            cart.append(cart_image, cart_name, cart_discription, cart_price_div,cart_shopping_icon_div);
            cartDiv.append(cart);

            update_offer_filter_btn();
    })
}

function update_offer_filter_btn() {
    offerFilterBtn.forEach((eachOfferFilterBtn) => {
        eachOfferFilterBtn.addEventListener("click", () => {
            //console.log(filter_btn_for_small_device.getAttribute("id"));
            filter_btn_for_small_device.innerHTML= eachOfferFilterBtn.innerHTML;
            if (filter_btn_for_small_device.className == 'open') {
                offerFilterBtn_div.style.visibility = "hidden";
                filter_btn_for_small_device.classList.remove('open');
                console.log("Hi");
            }

            eachOfferFilterBtn.classList.add("selectedFilterBtn");
            offerFilterBtn.forEach((eachBtn) => {
                if (eachOfferFilterBtn != eachBtn) {
                    eachBtn.classList.remove("selectedFilterBtn");
                }
            })
            let cart_name = cart.children[1].innerHTML;
            if (eachOfferFilterBtn.id != cart_name.match(eachOfferFilterBtn.id)) {
                cart.classList.add("displayNone");
                cart.classList.remove("displayBlock");
            }
            if (eachOfferFilterBtn.id == cart_name.match(eachOfferFilterBtn.id)) {
                cart.classList.add("displayBlock");
                cart.classList.remove("displayNone");
            }
            if (eachOfferFilterBtn.id == "alle") {
                cart.classList.add("displayBlock");
                cart.classList.remove("displayNone");
            }
            
            
        })
    },)
}

let shopping_item_array = [];
let grand_total_amount = document.querySelector(".grand_total_amount");

function add_item_to_wish_cart(event) {
    
    let cart_item_counter = event.target.parentElement.lastElementChild.firstElementChild;
    let cart_item_name = event.target.parentElement.parentElement.children[1].innerHTML;
    let cart_item_id = event.target.parentElement.parentElement.children[1].id;
    let cart_item_price = event.target.parentElement.parentElement.children[3].firstElementChild.innerHTML;
    let cart_item_img = event.target.parentElement.parentElement.children[0].src;
        
    if (shopping_item_array.includes(cart_item_id)) {
        alert("Sie haben diesen Artikel bereit in den Einkaufswagen hinzugefügt!");
    }
    if (!shopping_item_array.includes(cart_item_id)) {
        shopping_item_array.push(cart_item_id);
        cart_item_counter.innerHTML++;
        main_shopping_item_count.innerHTML++;
    
        const wish_list_tablerow = document.createElement("tr");
            wish_list_tablerow.className = "tr_wish_item";

        const wish_list_item = document.createElement("td");
            wish_list_item.className = "td_wish_item_details";

        const wish_item_trashBtn_and_checkBox_div = document.createElement("div");
            wish_item_trashBtn_and_checkBox_div.className = "wish_item_trashBtn_and_checkBox_div";

        const check_box = document.createElement("input");
            check_box.type = "checkBox";
            check_box.className = "wish_item_checkBoxe";

        const trash_icon = document.createElement("i");
            trash_icon.className = "fa-solid fa-trash-can";
            trash_icon.addEventListener("click", (e) => {
                delate_wish_item(e, cart_item_counter, cart_item_id, wish_item_tableBody)
            });
        
        wish_item_trashBtn_and_checkBox_div.append(check_box, trash_icon)

        const wish_list_item_name_and_img_div = document.createElement("div");

        const wish_list_item_name = document.createElement("p");
            wish_list_item_name.innerHTML = cart_item_name;
            wish_list_item_name.className = "wish_item_titel";

        const wish_list_item_img = document.createElement("img");
            wish_list_item_img.className = "wish_item_img";
            wish_list_item_img.src = cart_item_img;

        wish_list_item_name_and_img_div.append(wish_list_item_name, wish_list_item_img)

        const wish_list_item_count_div = document.createElement("div");
            wish_list_item_count_div.className = "wish_item_count_btn_and_counter_div";
                const wish_list_item_substruct_btn = document.createElement("button");
                    wish_list_item_substruct_btn.innerHTML = "-";
                    wish_list_item_substruct_btn.className = "substructBtn";
                    wish_list_item_substruct_btn.addEventListener("click", (event) => {
                        change_shop_item_count(event, cart_item_counter, wish_list_item_total_price, cart_item_price)
                    });;
                const wish_list_item_count = document.createElement("div");
                    wish_list_item_count.className = "wish_list_item_count";

        const wish_list_item_add_btn = document.createElement("button");
            wish_list_item_add_btn.className = "addBtn";
            wish_list_item_add_btn.addEventListener("click", (event) => {
                change_shop_item_count(event, cart_item_counter, wish_list_item_total_price, cart_item_price)
            });
            wish_list_item_add_btn.innerHTML = "+";
        wish_list_item_count_div.append(wish_list_item_substruct_btn, wish_list_item_count, wish_list_item_add_btn)

        wish_list_item_count.innerHTML = cart_item_counter.innerHTML;
        
        wish_list_item.append(wish_item_trashBtn_and_checkBox_div, wish_list_item_name_and_img_div);

        const wish_list_item_amount = document.createElement("td");
            wish_list_item_amount.append(wish_list_item_count_div);
        const wish_list_item_price = document.createElement("td");
            wish_list_item_price.innerHTML = cart_item_price;
        const wish_list_item_total_price = document.createElement("td");
            wish_list_item_total_price.className = "total_price";
         
        wish_list_tablerow.append(wish_list_item , wish_list_item_amount, wish_list_item_price, wish_list_item_total_price);
        wish_item_tableBody.append(wish_list_tablerow);
        
        wish_list_item_total_price.innerHTML = cart_item_price * cart_item_counter.innerHTML;

        grand_total_amount.innerHTML = Number(grand_total_amount.innerHTML) + Number(cart_item_price);
        
            calculateTotalPrice();
        
    }
}
render_cart();

function delate_wish_item(event, cartItemCounter, cartItemId) {
    console.log(event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1]);
    let wish_item = event.target.parentElement.parentElement.parentElement;
    let wish_item_count = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1];
    wish_item.remove();
    
    cartItemCounter.innerHTML = "";
    main_shopping_item_count.innerHTML = main_shopping_item_count.innerHTML - wish_item_count.innerHTML;
    shopping_item_array = shopping_item_array.filter((item) => {
        return item !== cartItemId;
    })
    console.log(cartItemId)
    calculateTotalPrice();
}

function calculateTotalPrice() {
    grand_total_amount.innerHTML = 0;
    for (let i = 0; i < wish_item_tableBody.children.length; i++) {
        const element = wish_item_tableBody.children[i];
        let wish_list_each_item_total_price = Number(element.lastChild.innerHTML);
        grand_total_amount.innerHTML = Number(grand_total_amount.innerHTML) + wish_list_each_item_total_price;
    }
}

function change_shop_item_count(event, cartItemCounter, wishListItem_total_price, cartItem_price) {
    let button_class_Name = event.target.className;
    let item_amount = event.target.parentElement.children[1];
    const wist_itemTable_body = event.target.parentElement.parentElement.parentElement
    console.log(event.target.parentElement.parentElement.parentElement) 
    if (button_class_Name == "addBtn" && item_amount.innerHTML > 0) {
        cartItemCounter.innerHTML++;
        main_shopping_item_count.innerHTML++;
        item_amount.innerHTML++;
        wishListItem_total_price.innerHTML = cartItem_price * cartItemCounter.innerHTML;
        calculateTotalPrice();
        console.log("+") 

    }
    if (button_class_Name == "substructBtn" && item_amount.innerHTML > 1) {
        cartItemCounter.innerHTML--;
        main_shopping_item_count.innerHTML--;
        item_amount.innerHTML--;
        wishListItem_total_price.innerHTML = cartItem_price * cartItemCounter.innerHTML;
        calculateTotalPrice()
        console.log("Asef") 

    }
}
// contact form
const form = document.querySelector("#contactForm");
const input = document.querySelectorAll(".input");
const gender = document.querySelectorAll(".gender");
const genderDiv = document.querySelector("#radioBtn");
const  ConfirmationOfFormSubmission = document.querySelector("#ConfirmationOfFormSubmission");
const  regestrationOrLoginMessage = document.querySelector("#regestrationOrLoginMessage");
const errorMessage = document.querySelector("#error");
const backgroundImg = document.querySelector("#backgroundImg");


form.onsubmit = submit;
function submit(e) {
    e.preventDefault();
    input.forEach((inputAsElement) => {
        if (inputAsElement.value == "") {
            inputAsElement.style.border = "4px solid red";
            errorMessage.style.display = "block";
            backgroundImg.style.display = "flex";
            form.style.display = "block";
            ConfirmationOfFormSubmission.style.display = "none";

            if (gender[0].checked == false || gender[1].checked == false || gender[2].checked == false) {
                genderDiv.style.border = "4px solid red";
            }
            if (gender[0].checked == true || gender[1].checked == true || gender[2].checked == true){
                genderDiv.style.border = "";
            }
        }else{
            inputAsElement.style.border = "";
            errorMessage.style.display = "none";
            backgroundImg.style.display = "none";
            form.style.display = "none";
            ConfirmationOfFormSubmission.style.display = "block";

        } 
    })
    
};

const MessageArea = document.querySelector("#MessageArea");
const digitsCounter = document.querySelector("#digitsCounter");

MessageArea.addEventListener("input", () => {
    digitsCounter.style.display = "block";
    digitsCounter.innerHTML = `Ziffern: ${MessageArea.value.length} /5`;
    if (MessageArea.value.length > 5) {
        MessageArea.value = MessageArea.value.substr(0,5);
        digitsCounter.style.color = "red";
    }else{
        digitsCounter.style.color = "black";

    }
    console.log(MessageArea.value.length);
})