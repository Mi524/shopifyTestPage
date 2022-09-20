

                    (function() {!this.$el||!this.$el.querySelector(".beae-section-background-video")||typeof handleVideoBg=="undefined"||!this.isLive||(handleVideoBg.bind(this)(),window.addEventListener("resize",handleVideoBg.bind(this)))}).call({
                        $el: document.querySelector('.beae-rsfnhgky'),
                        
                        id: 'beae-rsfnhgky',
                        isLive: true
                    });
                
                    (function() {!this.$el||!this.$el.querySelector(".beae-section-background-video")||typeof handleVideoBg=="undefined"||!this.isLive||(handleVideoBg.bind(this)(),window.addEventListener("resize",handleVideoBg.bind(this)))}).call({
                        $el: document.querySelector('.beae-a753hz7d'),
                        
                        id: 'beae-a753hz7d',
                        isLive: true
                    });
                
                    (function() {!this.$el||!this.$el.querySelector(".beae-section-background-video")||typeof handleVideoBg=="undefined"||!this.isLive||(handleVideoBg.bind(this)(),window.addEventListener("resize",handleVideoBg.bind(this)))}).call({
                        $el: document.querySelector('.beae-xn2h2s37'),
                        
                        id: 'beae-xn2h2s37',
                        isLive: true
                    });
                
                    (function() {!this.$el||!this.$el.querySelector(".beae-section-background-video")||typeof handleVideoBg=="undefined"||!this.isLive||(handleVideoBg.bind(this)(),window.addEventListener("resize",handleVideoBg.bind(this)))}).call({
                        $el: document.querySelector('.beae-tfha3f1e'),
                        
                        id: 'beae-tfha3f1e',
                        isLive: true
                    });
                
                    (function() {if(!this.$el)return;let i=this.$el,d=i.querySelector(".beae-container-image[data-screens]"),v=[],Ue="";d&&(Ue=d.getAttribute("data-screens"),Ue&&(v=JSON.parse(Ue))),this.isLive&&this.settings_image&&this.settings_image.link!="none"&&(Je.bind(this),window.addEventListener("resize",Je.bind(this)));function Je(){if(!Ue)return;let ze={};if(v.forEach((Xe,Ze)=>{let Qe=!1,Ke=Ze==v.length-1;if(Ze==0)Qe=window.matchMedia(`only screen and (min-width: ${Xe.min+1}px)`);else{let et=`only screen and (max-width: ${Xe.width}px) ${Ke?"":`and (min-width:${Xe.min+1}px)`}`;Qe=window.matchMedia(et)}Qe&&Qe.matches&&(ze=Xe)}),Object.keys(ze).length){let Xe=i.querySelector("[data-beae-popup]"),Ze={},Qe=this.settings_image.image;if(!Xe)return;this.settings_image.link==="lightbox"?(this.settings_image.lightbox==="yes"&&(Ze["data-beae-popup"]="beae-"+Math.random().toString(36).substr(2,8),ze.name=="desktop"?Ze["data-beae-popup-src"]=Qe.value:Ze["data-beae-popup-src"]=Qe[`value__${ze.name}`]),ze.name=="desktop"?Ze.href=Qe.value:Ze.href=Qe[`value__${ze.name}`]):link==="custom"&&this.settings_image.customLink&&this.settings_image.customLink.href&&Object.assign(Ze,this.settings_image.customLink),Object.keys(Ze).length&&Object.keys(Ze).forEach(Ke=>{Ze[Ke]&&Xe.setAttribute(Ke,Ze[Ke])})}}this.settings_image&&this.settings_image.link==="lightbox"&&this.settings_image.lightbox==="yes"&&window.beaejQuery(i).find("[data-beae-popup]").beaePopup({type:"image"})}).call({
                        $el: document.querySelector('.beae-iik8wmxd'),
                        settings_image: {"link":"none","image":{"value":"https://cdn.shopify.com/s/files/1/0622/4671/5556/files/2022-09-21_04.22.44.png?v=1663705381","id":"jr42zjM1","audit":{"type":"image","alt":"2022-09-21_04","src":"https://cdn.shopify.com/s/files/1/0622/4671/5556/files/2022-09-21_04.22.44.png?v=1663705381","elmid":"beae-iik8wmxd","size":403574,"width":1140,"height":509},"name":"2022-09-21_04","thumbnail":"https://cdn.shopify.com/s/files/1/0622/4671/5556/files/2022-09-21_04.22.44.png?v=1663705381"},"lightbox":"no"},
                        id: 'beae-iik8wmxd',
                        isLive: true
                    });
                
            if(window.location.search.indexOf("beae-token=") < 0)
            {
                document.querySelector("#beae-builder").innerHTML = "<h3>This template for preview purposes only</h3>";
                document.querySelector("body").style.opacity= "0.7";
            }
        