/**
 * Web Vitals Reporting
 * Automatically tracks and reports Core Web Vitals to Google Analytics
 */

import { reportWebVitals } from './seo-utils';

/**
 * Function to be exported and called from app layout or pages
 * Tracks Core Web Vitals and sends them to Google Analytics
 */
export function trackWebVitals(metric: {
    id: string;
    name: string;
    label: string;
    value: number;
    delta?: number;
    entries?: PerformanceEntry[];
}) {
    // Report to our utility function
    reportWebVitals(metric);

    // Additional custom handling if needed
    if (process.env.NODE_ENV === 'production') {
        // You can add additional tracking services here
        // e.g., send to your own analytics API

        // Example: Send to custom endpoint (optional)
        /*
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            id: metric.id,
            label: metric.label,
          }),
        }).catch(console.error);
        */
    }
}

/**
 * Performance Observer for custom metrics
 * This can be used to track custom performance marks
 */
export function initPerformanceObserver() {
    if (typeof window === 'undefined') return;

    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_PERF_MONITORING) {
        return;
    }

    try {
        // Observe long tasks
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    // Log long tasks (tasks that take > 50ms)
                    if (entry.duration > 50) {
                        console.warn('Long task detected:', {
                            duration: entry.duration,
                            startTime: entry.startTime,
                            name: entry.name,
                        });

                        // Send to analytics if gtag is available
                        if (window.gtag) {
                            window.gtag('event', 'long_task', {
                                event_category: 'Performance',
                                event_label: entry.name,
                                value: Math.round(entry.duration),
                                non_interaction: true,
                            });
                        }
                    }
                }
            });

            observer.observe({ entryTypes: ['longtask', 'measure'] });
        }
    } catch (error) {
        console.error('Error setting up performance observer:', error);
    }
}

/**
 * Track custom timing events
 */
export function trackTiming(name: string, duration: number, category = 'Custom Timing') {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
            name,
            value: Math.round(duration),
            event_category: category,
        });
    }
}

/**
 * Track page load time
 */
export function trackPageLoad() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
        // Use setTimeout to ensure all resources are loaded
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            // Track page load time
            trackTiming('page_load', pageLoadTime, 'Page Load');
            trackTiming('server_response', connectTime, 'Page Load');
            trackTiming('dom_render', renderTime, 'Page Load');

            // Log in development
            if (process.env.NODE_ENV === 'development') {
                console.log('Performance Metrics:', {
                    pageLoadTime: `${pageLoadTime}ms`,
                    connectTime: `${connectTime}ms`,
                    renderTime: `${renderTime}ms`,
                });
            }
        }, 0);
    });
}

/**
 * Track API call performance
 */
export function trackApiCall(endpoint: string, duration: number, status: 'success' | 'error') {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'api_call', {
            event_category: 'API Performance',
            event_label: endpoint,
            value: Math.round(duration),
            status,
        });
    }
}
