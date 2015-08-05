define(['$'], function($) {
    /**
     * Constructor
     */
    var Card = function Card($el, options) {
        // Component instance properties.
        this.$el = $el;
    }

    /**
     * Export the init method required by AdaptiveJS.
     */
    return {
        'init': function($el, options) {
            // If already initialized, return the instance; otherwise, create it
            // and expose it through `$('.c-select').data('component')`.
            return $el.data('component') || $el.data('component', new Card($el, options));
        }
    };
});
