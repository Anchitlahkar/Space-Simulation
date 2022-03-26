AFRAME.registerComponent('camera-change', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
        window.addEventListener("keydown", (e) => {
            if (e.key === "F2") {
                var camera1 = document.querySelector("#player")
                var camera2 = document.querySelector("#third-person")

                var camera1_active = camera1.getAttribute("camera").active

                camera1.setAttribute("camera", { active: !camera1_active })
                camera2.setAttribute("camera", { active: camera1_active })
            }

        }

        )
    },

});
