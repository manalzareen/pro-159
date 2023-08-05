AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
  
    init: function () {
      this.handleMouseEnterEvents()
      this.handleMouseLeaveEvents()
    },
    update:function(){
    const fadeBackgroundEl = document.querySelector("#fadeBackground")
     c = fadeBackgroundEl.children;
     if (c.length > 0 ){
      var i 
      for(i=0 ; i<= c.length ; i++){
        fadeBackgroundEl.removeChild(c[i])
      }
     }
     else{
      this.handleMouseClickEvents()
     }

    },
  
   
    handleMouseClickEvents:function(){
      this.el.addEventListener("click", () => {
        
        const {selectedItemId}= this.data
        const fadeBackground = document.querySelector("#fadeBackground")
        const titleEl = document.querySelector("#app-title");
        const cursorEl = document.querySelector("#camera-cursor");
  
         //check the selected item to set the "info-banner" component on the plane
      if (selectedItemId){
        fadeBackground.setAttribute("visible",true)
        fadeBackground.setAttribute("info-banner",{
          itemId:selectedItemId
        });
       
        cursorEl.setAttribute("position",{x:0,y:0 ,z:-1})
        cursorEl.setAttribute("geometry",{
          radiusInner:0.03,
          radiusOuter:0.04,
        })
      }

      else{
        fadeBackground.setAttribute("visible",false);
  
        cursorEl.setAttribute("position",{x:0,y:0 ,z:-3});
        cursorEl.setAttribute("geometry",{
          radiusInner:0.03,
          radiusOuter:0.04,
        })
        
        
      }
      })
     
      
    },

  
    handleComicListState: function () {
      const id = this.el.getAttribute("id");
      const comicId = ["dark-night","roller-girl","slumberjanes","moongirl"];
      if (comicId.includes(id)) {
        const comicContainer = document.querySelector("#comic-container");
        comicContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "grey",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () { 
      this.el.addEventListener("mouseenter", () => {
        this.handleComicListState()
      })
  
  

    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        // console.log(this.data.selectedItemId)
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`)
          //console.log( el )
          const id = el.getAttribute("id")
          //console.log( id )
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "white",
              opacity: 1,
            })
          }
  
        }
  
      })
  
  
    },
  
  });
  