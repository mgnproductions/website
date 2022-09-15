<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal-video" role="dialog" @click.stop>
        <section id="modalDescription" class="modal-body">
          <slot name="body">
            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              <IconClose />
            </button>

            <iframe
              class="d-flex"
              src="https://player.vimeo.com/video/746852526?h=83e6e39e80"
              width="848"
              height="477"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import IconClose from '~/assets/svg/icon-close.vue'

export default {
  name: 'VideoPlayerModal',
  components: {
    IconClose,
  },
  created() {
    // this.loadingTask();
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-backdrop {
  z-index: 1060;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  overflow-x: auto;
}

.modal-video {
  max-width: 880px;
  min-width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  .modal-body {
    padding: 0px;
    position: relative;
  }

  .btn-close {
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: #092e33;
    background: transparent;
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 99;
  }
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
