
/******************
   HTMLMap

   Supplied AS-IS under MIT license
*******************/


function HTMLMap() { 

   this.map=null;

   this.createMap=mycreateMap;
   this.addArea=myaddArea;

   function mycreateMap(name,x,y,h,w,bg) {

         map = document.createElement("div");
         this.map = map;
         map.id = name;

         map.style.position = "absolute";
         map.style.top = y + "px";
         map.style.left = x + "px";
         map.style.height = h + "px";
         map.style.width = w + "px";

         map.style.background = bg;
         map.style.backgroundSize = "cover";

         document.body.appendChild(map);
   }

   function myaddArea(name,x,y,h,w,cmd,t)     
   {
         area = document.createElement("div");
         area.id = name;
         
         area.style.float = "left";
         
         area.style.top = y + "%";
         area.style.left = x + "%";
         area.style.height = h + "%";
         area.style.width = w + "%";
         area.style.cursor = "pointer";

         this.map.appendChild(area);

         document.getElementById(name).addEventListener("click", function() { 
           window.open(cmd,t);
         });
   }
}

window.HtmlMap =  new HTMLMap();
