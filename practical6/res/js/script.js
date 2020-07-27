$(function () {
    var cart = new Cart();
    var item = new Item(
        "Programming books bundle",
        50.0,
        "res/images/image1.jpg",
        [
            "res/images/image1.jpg",
            "res/images/image2.jpg",
            "res/images/image3.jpg",
            "res/images/image4.jpg"
        ]
    );
    var items = [
        new Item("Java Programming", 23.0, "res/images/image5.jpg"),
        new Item("Programming in C++", 15.0, "res/images/image6.jpg"),
        new Item("Programming and fundamentals of Python", 5.50, "res/images/image7.jpg"),
        new Item("My first coding book", 10.90, "res/images/image8.jpg")
    ];
    init();

    $('.add-to-cart').click(function (event) {
        let id = $(event.target).attr('id');
        let index = cart.selected.indexOf(id);
        if (index > -1) {
            cart.selected.splice(index, 1);
            $(event.target)
                .removeClass("add-to-cart")
                .addClass("remove-from-cart")
                .text("Remove from cart");
        }
        refreshAmount();
    });

    function refreshAmount() {
        $('.cart-container span').text(cart.selected.length)
    }

    function init() {
        $("#item-container #item-main-image").attr('src', item.image);
        $("#item-container h1").text(item.title + " - " + item.price + "$");

        for (let i = 0; i < item.thumbnails.length; i++) {
            let img = $('<img>').attr('src', item.thumbnails[i]);
            $("#item-container .thumbnails").append(img)
        }

        for (let i = 0; i < items.length; i++) {
            let li = $('<li></li>');
            let div = $('<div></div>');
            let h4 = $('<h4></h4>');
            let img = $('<img>').attr('src', items[i].image);
            let a = $('<a href="#"></a>').text(items[i].title + " - " + items[i].price + "$");
            let button = $('<button>Add to cart</button>').addClass("add-to-cart").attr('id', i);

            h4.append(a);
            div.append(img);
            div.append(h4);
            div.append(button);
            li.append(div);

            $('.suggested-container ul').append(li)
        }
    }
});