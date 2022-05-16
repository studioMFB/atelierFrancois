  /* Singleton class */
/* Source: https://bretcameron.medium.com/singletons-in-javascript-59655927b7d7 */
/* By Bret Cameron, last Access [29.03.2022] */

  export default class ControlPanel {
      constructor() {
          // let instance;
          // if (ControlPanel.instance) {
          //     return ControlPanel.instance;
          //   }
          //   ControlPanel.instance = this;   

          if (!ControlPanel.instance) {
              ControlPanel.instance = this;
          }
          return ControlPanel.instance;

          // if (!instance) {
          //     instance = new ControlPanel();
          //     delete instance.constructor;
          //   }
          //   return instance;
      }

      static getInstance() {
          return this.instance;
      }

      getControlsPanelSplitData() {
          return this.mControlsPanel.split;
      }

      /* UI PANEL. Only visible when audio starts */
      initControlsPanel() {
          this.mControlsPanel = new function () {
              this.split = 1;
          }
          this.addOptionsToControlPanel();
      }

      addOptionsToControlPanel() {
          // Set Frequency split slider max + start value.
          if (this.mGui.__controllers.length == 0) {
              this.mGui.add(this.mControlsPanel, 'split').name("frequency Split").min(1).max(this.getFrequencyBufferLength()).step(1);
          }
      }

  }