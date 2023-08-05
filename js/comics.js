AFRAME.registerComponent("comics",{
    init:function(){
        this.comicContainer= this.el;
        this.createCards()
    },
    createCards: function(){
      const thumbNailsRef=[
        {
            id:"dark-night",
            url:"./assests/image.webp",
        },
        {
            id:"roller-girl",
            url:"./assests/image1.jpg",
        },
        {
            id:"slumberjanes",
            url:"./assests/image2.jpg",
        },
        {
            id:"moongirl",
            url:"./assests/image3.jpg",
        }               
      ]
      let prevoiusXPosition = -30;
      
    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 12;
      const posY = 2;
      const posZ = -20;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

       // Border Element
       const borderEl = this.createBorder(position, item.id);
       const thumbnail = this.createThumbNail(item);
       borderEl.appendChild(thumbnail)       
       this.comicContainer.appendChild(borderEl);
      
    }
    
   
  },
  createBorder: function (position, id) {
    const entEl = document.createElement("a-entity")
    entEl.setAttribute("id" ,id)
    entEl.setAttribute("position",position)
    entEl.setAttribute("visible", true)
    entEl.setAttribute("geometry", {
      primitive: "plane",
     width:11,
     height:13,
     depth:0.1     
    });
    entEl.setAttribute("cursor-listener",{})
    entEl.setAttribute("material", {
      color: "white",
      opacity: 1,
    });
    return entEl
    
  },
  createThumbNail: function (item) {
    const entEl = document.createElement("a-entity")
    entEl.setAttribute("visible", true)
    entEl.setAttribute("geometry", {
      primitive: "box",
     width:10,
     height:12,
     depth:0.2
      
    });
    entEl.setAttribute("material", {
      src:item.url
    });
    return entEl
  },
})