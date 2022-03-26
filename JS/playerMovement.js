AFRAME.registerComponent('movement', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.

        window.addEventListener("keypress", e => {
            if (e.key === "w") {
                var player = this.el
                var playerObject = document.querySelector("#player").object3D

                var direction = new THREE.Vector3();
                playerObject.getWorldDirection(direction);

                player.setAttribute("velocity", direction.multiplyScalar(-2000))
            }

            else if (e.key === "s") {
                var player = this.el

                var vel = player.getAttribute("velocity")
                player.setAttribute('velocity', {
                    x: (vel.x * -1) % 2,
                    y: (vel.y * -1) % 2,
                    z: (vel.z * -1) % 2,
                })
            }

            else if (e.key === "a") {
                var player = this.el

                var rot = player.getAttribute("rotation")

                player.setAttribute("rotation",
                    {
                        x: rot.x,
                        y: rot.y+1,
                        z: rot.z + 1,
                    }
                )

            }
            else if (e.key === "d") {
                var player = this.el

                var rot = player.getAttribute("rotation")

                player.setAttribute("rotation",
                    {
                        x: rot.x,
                        y: rot.y,
                        z: rot.z - 1,
                    }
                )

            }

            else if (e.key === " ") {
                var player = this.el

                var vel = player.getAttribute("velocity")
                player.setAttribute('velocity', {
                    x: 0,
                    y: 0,
                    z: 0,
                })
            }
        })
    },
});
