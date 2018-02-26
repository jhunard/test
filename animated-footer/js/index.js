          // 1. Set Controller

var controller = new ScrollMagic.Controller({duration: 1});

          // 2. Timeline 1

          var infiniLights = new TimelineMax({paused: true});
            infiniLights.to("#cranewarninglight", 2, {opacity: 0, repeat: -1, ease: Power2.easeOut}, "0")
				   .to("#buildingwarninglight", 2, {opacity: 0, repeat: -1, ease: Power2.easeOut, delay: .7}, "0");

					// 3. Timeline 2
					var splitAnimation = new TimelineMax({paused: true});
						splitAnimation.to("#sun", 3, {y:-380, ease: Power2.easeOut}, "0")
				   .to("#plane1", .1, {opacity: 1}, "0")
				   .to("#plane1", 3, {y:-150, x:1200, rotation:6, ease: Power3.easeOut}, "0" )
				   .to("#plane2", 3, {scale: 3, y:-150, x:-1630, rotation:-6, ease: Power3.easeOut}, "0")
				   .to("#tractor", 2, {x: -300, y: 50, scale: 2, ease: Power2.easeOut}, "0")
				   .to("#combine", 3, {y:-5, x:470, rotation:6, ease: Power4.easeOut}, "0")
				   .to("#smallindusmoke", 3, {scale: 4, x:-10, transformOrigin:"left bottom"}, "0")
				   .to("#bigindusmoke", 3, {scale: 3, x:-10, transformOrigin:"left bottom"}, "0")
				   .to("#cow1 .cowhead", 1, {rotation: 30, transformOrigin:"75% 25%"}, "0")
				   .to("#cow3 .cowhead", 1, {delay: 1, rotation: 40, transformOrigin:"75% 25%"}, '0')
				   .to("#cow4 .cowhead", 2, {rotation: 45, transformOrigin:"30% 60%"}, "0")
				   .to(".lightset1", 1, {opacity: 0}, "0")
				   .to(".lightset2", 1, {opacity: 0, delay: 1}, "0")
				   .to(".lightset3", 1, {opacity: 0, delay: 2}, "0")
				   .to(".svglink", 1, {opacity: 1}, 2)
					;

					// 3. Scene
					var scene2 = new ScrollMagic.Scene({triggerElement: "footer", triggerHook: 'onEnter'})
          
         
          .on("leave", function (e) {console.log("Leave");
                                     splitAnimation.play(false);})
          .on("enter", function (f) {console.log("Enter");
                                     splitAnimation.restart();})
					.addTo(controller)
					.setTween(splitAnimation.play())
          ;

          var scene3 = new ScrollMagic.Scene({triggerElement: "footer", triggerHook: 'onEnter'})
          
         
          .on("leave", function (e) {console.log("Leave");
                                     splitAnimation.play(false);})
          .on("enter", function (f) {console.log("Enter");
                                     splitAnimation.restart();})
					.addTo(controller)
					.setTween(infiniLights.play())
          ;