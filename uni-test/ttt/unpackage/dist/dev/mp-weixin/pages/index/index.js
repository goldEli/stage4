"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    search() {
      console.log(this.searchValue);
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o(($event) => $data.searchValue = $event),
    c: common_vendor.p({
      focus: true,
      modelValue: $data.searchValue
    }),
    d: common_vendor.t($data.searchValue)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/stage4/uni-test/ttt/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
