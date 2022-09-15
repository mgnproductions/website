<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal-network" role="dialog" @click.stop>
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
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="11" class="mb-8">
                  <h3
                    class="text-center font-weight-bold"
                    style="font-size: 35px"
                  >
                    A tua carteira está conectada na rede errada
                  </h3>
                </v-col>

                <v-col
                  cols="12"
                  sm="9"
                  class="d-flex align-center justify-center switch-network-card mb-16 px-11 py-4"
                >
                  <h4>Rede Atual</h4>

                  <IconNetworkSwitch class="mx-10"> </IconNetworkSwitch>

                  <IconPolygon />
                </v-col>

                <v-col cols="12" sm="8">
                  <h5 class="text-center">
                    Por favor altera a tua carteira para a rede Polygon Mainnet
                  </h5>
                </v-col>
              </v-row>
            </v-container>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import IconNetworkSwitch from '../assets/svg/icon-network-switch.vue'
import IconPolygon from '../assets/svg/icon-polygon.vue'
import IconClose from '~/assets/svg/icon-close.vue'

export default {
  name: 'NetworkModal',
  components: {
    IconClose,
    IconNetworkSwitch,
    IconPolygon,
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

<style lang="scss">
.modal-network {
  .btn-close {
    svg path {
      fill: #242424;
    }
  }
}
</style>
<style lang="scss" scoped>
.switch-network-card {
  background-color: #f7f7f7;
}
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

.modal-network {
  max-width: 880px;
  min-width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  .modal-body {
    padding: 88px;
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
    svg path {
      fill: #242424;
    }
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
