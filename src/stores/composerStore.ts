import { defineStore } from 'pinia';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";


export const useComposerStore = defineStore('composerStore', {
  state: () => ({
    composer: null as EffectComposer | null,
    outlinePass: null as OutlinePass | null
  }),
  actions: {
    setComposer(composer: EffectComposer) {
      this.composer = composer;
    },
    setOutlinePass(outlinePass: OutlinePass) {
      this.outlinePass = outlinePass;
    },

    getComposer(): EffectComposer | null {
      return this.composer;
    },
    getOutlinePass(): OutlinePass | null {
      return this.outlinePass;
    }
  }
});