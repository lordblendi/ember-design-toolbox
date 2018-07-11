import { A } from "@ember/array";
import Component from "@ember/component";
import layout from "../templates/components/toolbox-tabs";
import { debounce, throttle, later } from "@ember/runloop";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["tabs"],
  classNameBindings: ["inverted:tabs--invert"],
  inverted: false,

  // Unselect the previous child and select the new one.
  select(child) {
    let selectNew = () => {
      child.show();
      child.$().fadeIn();
      this.set("selected", child);
      later(this, this.scrollToSelected.bind(this));
    };

    const currentSelected = this.get("selected");
    if (!currentSelected) {
      return selectNew();
    }
    currentSelected.hide();
    currentSelected.$().fadeOut(selectNew);
  },

  // If no registered panel was selected, we select the first one by default
  setFirstPanelAsSelected() {
    if (!this.get("selected") && this.get("panels.firstObject")) {
      this.select(this.get("panels.firstObject"));
    }
  },

  actions: {
    // When the user clicks on a header
    select(child) {
      this.select(child);
    },

    // When the user hovers over the left scroller, we start moving towards the left
    startScrollLeft() {
      // We calculate the duration of the animation based on the distance to travel
      const duration =
        Math.abs(
          this.$("ul")
            .children()
            .first()
            .position().left
        ) * 10;
      this.scrollToElement(
        this.$("ul")
          .children()
          .first(),
        0,
        duration
      );
    },
    // When the user hovers the right scroller, we start moving towards the right
    startScrollRight() {
      // We calculate the duration of the animation based on the distance to travel
      const duration =
        Math.abs(this.$("ul")[0].scrollWidth - this.$("ul").scrollLeft()) * 10;
      this.scrollToElement(
        this.$("ul")
          .children()
          .last(),
        0,
        duration
      );
    },
    // When the user leaves any scroller
    stopScroll() {
      this.stopScroll();
    },

    // When the user clicks the left scroll arrow, we move one header to the left
    scrollLeftOne() {
      const child = this.findChildAtOffset(this.$("ul").scrollLeft());

      if (child.element) {
        const newOffset = child.offset - child.element.outerWidth();
        const duration = Math.abs(this.$("ul").scrollLeft() - newOffset) * 10;
        this.scrollToElement(child.element, 0, duration);
      }
    },
    // When the user clicks the right scroll arrow, we move one header to the right
    scrollRightOne() {
      const child = this.findChildAtOffset(
        this.$("ul").scrollLeft() + this.$("ul").outerWidth() + 1
      );

      if (child.element) {
        const newOffset = child.offset - this.$("ul").outerWidth() + 1; // We need that last pixel to jump to the next one if we click again
        const duration = Math.abs(this.$("ul").scrollLeft() - newOffset) * 10;
        this.scrollToElement(
          child.element,
          -Math.ceil(this.$("ul").outerWidth() - child.element.outerWidth()) +
            1,
          duration
        );
      }
    },

    // The headers are not a sub-component so they must be generated from the tab-panels childs. To do so, they are required to register themselves, which allows the component to fetch their titles.
    register(child) {
      later(this, function() {
        if (child.get("selected")) {
          this.select(child);
        } else {
          debounce(this, this.setFirstPanelAsSelected, 150);
        }
        this.get("panels").addObject(child);
      });
    },
    unregister(child) {
      this.get("panels").removeObject(child);
    }
  },

  // ----------------------
  // Helper functions

  // Scroll to the currently selected header
  scrollToSelected(callback) {
    let list = this.$("ul").children("li");
    if (list[0]) {
      this.scrollToElement(
        this.$("ul").children(".selected"),
        -(this.$("ul").outerWidth() / 2) +
          this.$("ul")
            .children(".selected")
            .outerWidth() /
            2,
        1000,
        callback
      );
    }
  },

  // Scroll to element with a defined offset and a duration
  scrollToElement(element, offset = 0, duration = 1000) {
    if (element) {
      this.stopScroll();
      this.set("lastAnimated", element);
      element.velocity("scroll", {
        container: element.offsetParent(),
        axis: "x",
        offset: offset,
        duration: duration,
        complete: () => {
          // Once we have scrolled, we need to recalculate stuff
          this.calculateShowLeftScroll();
          this.calculateShowRightScroll();
          this.calculateLeftElements();
          this.calculateRightElements();
        }
      });
    }
  },

  // Stop the current animation
  stopScroll() {
    if (this.get("lastAnimated")) {
      this.get("lastAnimated").velocity("stop");
    }
  },

  // Find the child at the specified offset
  findChildAtOffset(offset) {
    let children = this.$("ul").children();
    let i = 0,
      acc = 0;
    let elem = null;
    while (acc < offset && i < children.length) {
      elem = children.eq(i);
      acc += elem.outerWidth();
      i++;
    }
    return { element: elem, offset: acc };
  },
  // ----------------------

  // ----------------------
  // Actions to be done when scrolling / resizing

  // Whether the scrolling should be enabled
  showLeftScroll: false,
  showRightScroll: false,

  // The numbers of elements not visible on the left and right
  leftElements: 0,
  rightElements: 0,

  // Every time we scroll, we need to recalculate whether the scrollers should still be visible and what numbers should be displayed.
  // We use debounce and throttle to ensure we don't recalculate too often.
  onScroll: function() {
    debounce(this, this.calculateShowLeftScroll, 150);
    debounce(this, this.calculateShowRightScroll, 150);
    throttle(this, this.calculateLeftElements, 150);
    throttle(this, this.calculateRightElements, 150);
  },

  // Whenever the window gets resized, we scroll back to the selected item.
  onResize: function() {
    debounce(this, this.scrollToSelected, 150);
  },

  // If we scrolled on the right, we can scroll to the left.
  calculateShowLeftScroll: function() {
    return this.set("showLeftScroll", Math.ceil(this.$("ul").scrollLeft()) > 0);
  },

  // If the sum of the distance scrolled and the size of the list element is smaller than the total size, we can still scroll right.
  calculateShowRightScroll: function() {
    return this.set(
      "showRightScroll",
      Math.ceil(this.$("ul").scrollLeft() + this.$("ul").outerWidth()) <
        this.$("ul")[0].scrollWidth
    );
  },

  // To find how many elements are on the left, we calculate the leftmost entirely visible element and count how many are before it.
  calculateLeftElements: function() {
    const child = this.findChildAtOffset(this.$("ul").scrollLeft());

    if (child.element) {
      return this.set("leftElements", child.element.prevAll().length + 1);
    }
  },

  // To find how many elements are on the right, we calculate the rightmost entirely visible element and count how many are after it.
  calculateRightElements: function() {
    const child = this.findChildAtOffset(
      this.$("ul").scrollLeft() + this.$("ul").outerWidth() + 1
    );

    if (child.element) {
      return this.set("rightElements", child.element.nextAll().length + 1);
    }
  },
  // ----------------------

  // ----------------------
  // Set up events listeners
  init() {
    this._super(...arguments);
    this.set("panels", A());
  },

  didRender() {
    this._super(...arguments);
    this.$("ul").bind("scroll", this.onScroll.bind(this));
    this.$(window).resize(this.onResize.bind(this));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$("ul").unbind("scroll", this.onScroll.bind(this));
    this.$(window).off("resize");
  }
  // ----------------------
});
