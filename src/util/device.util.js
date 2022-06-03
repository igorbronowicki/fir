const device = {
    get ua() {
        return window.navigator.userAgent.toLowerCase();
    },

    get formFactor() {
        return 'desktop'; // 'desktop', 'mobile', 'tablet'
    },

    get orientation() {
        return 'landscape'; // 'landscape', 'portrait'
    }
};

export default device;