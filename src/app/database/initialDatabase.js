const db = connect("mongodb://localhost:27017/tokpedplay");

db.videos.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7eb"),
        title: "Beli barang aneh yang dijual ONLINE episode 21!",
        embedUrl: "https://www.youtube.com/embed/_bH2aljdxNc",
        thumbnailUrl:
            "https://i.ytimg.com/vi/_bH2aljdxNc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzfoNda_EDkfHqOIl6oYqy9Lo_Lw",
        products: [
            ObjectId("64c292f928164efdaf31c7f0"),
            ObjectId("64c292f928164efdaf31c7f1"),
        ],
        comments: [ObjectId("64c292f928164efdaf31c7e1")],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ec"),
        title: "Beli barang aneh yang dijual ONLINE episode 22!",
        embedUrl: "https://www.youtube.com/embed/YppeEMFKcNk",
        thumbnailUrl:
            "https://i.ytimg.com/vi/YppeEMFKcNk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBkZk2yc1P4EV2J2tQzDexPw4OYtA",
        products: [ObjectId("64c292f928164efdaf31c7f2")],
        comments: [
            ObjectId("64c292f928164efdaf31c7e2"),
            ObjectId("64c292f928164efdaf31c7e3"),
        ],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ed"),
        title: "Beli barang aneh yang dijual ONLINE episode 23!",
        embedUrl: "https://www.youtube.com/embed/zaTS2Mf8s_0",
        thumbnailUrl:
            "https://i.ytimg.com/vi/zaTS2Mf8s_0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSO_EPqJTHLWoWS_0vVYWwYZD7sg",
        products: [],
        comments: [],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ee"),
        title: "Beli barang aneh yang dijual ONLINE episode 24!",
        embedUrl: "https://www.youtube.com/embed/uic5AyVYlI4",
        thumbnailUrl:
            "https://i.ytimg.com/vi/uic5AyVYlI4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDAMC_iYcjl-jFyOI3mv2PTTjvPvw",
        products: [
            ObjectId("64c292f928164efdaf31c7f3"),
            ObjectId("64c292f928164efdaf31c7f4"),
        ],
        comments: [],
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7ef"),
        title: "Beli barang aneh yang dijual ONLINE episode 25!",
        embedUrl: "https://www.youtube.com/embed/mnmziTKK-Wo",
        thumbnailUrl:
            "https://i.ytimg.com/vi/mnmziTKK-Wo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAZ1jd__Nc1DuQvSmupuIKqQ4jlvQ",
        products: [ObjectId("64c292f928164efdaf31c7f5")],
        comments: [],
    },
]);

db.products.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7f0"),
        title: "Botol minyak goreng",
        price: 50,
        productUrl: "https://tokopedia.link/LFujXRCuUmb",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f1"),
        title: "Slime jelly cleaner",
        price: 50,
        productUrl: "https://tokopedia.link/Ag7L9sNuUmb",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f2"),
        title: "Pembuka botol",
        price: 50,
        productUrl: "https://tokopedia.link/Jta7pqcyDnb",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f3"),
        title: "Penjepit plastik",
        price: 50,
        productUrl: "https://tokopedia.link/Pcs8tNELGsb",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f4"),
        title: "WC bersinar",
        price: 50,
        productUrl: "https://tokopedia.link/etlSSjCLGsb",
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7f5"),
        title: "Lensa mikroskop",
        price: 50,
        productUrl: "https://tokopedia.link/eONvuHRrOtb",
    },
]);

db.comments.insertMany([
    {
        _id: ObjectId("64c292f928164efdaf31c7e1"),
        username: "Anonym",
        text: "Nice products",
        createdAt: new Date(),
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7e2"),
        username: "Anonym",
        text: "Nice products",
        createdAt: new Date(),
    },
    {
        _id: ObjectId("64c292f928164efdaf31c7e3"),
        username: "Anonym",
        text: "Nice products",
        createdAt: new Date(),
    },
]);
