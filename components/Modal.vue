<template>
  <div :id="id" class="modal">
    <div class="modal-content">
      <span :id="id+'-close'" class="close">&times;</span>
      <h1 class="title"><slot name="title"></slot></h1>
      <hr style="border: 1px solid #fef7f2; margin: 5px ;" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: String,
    trigger: String,
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  mounted() {
    // Get the modal
    var modal = document.getElementById(this.id);

    // Get the button that opens the modal
    var btn = document.getElementById(this.trigger);

    // Get the <span> element that closes the modal
    var span = document.getElementById(this.id+"-close");

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      console.log(event.target,modal)
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};
</script>

<style scoped>
.title {
  color: orange;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  border-radius: 10px;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 70%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>