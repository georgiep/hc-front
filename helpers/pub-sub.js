export function subscribe(eventName, listener) {
    document.addEventListener(eventName, listener);
}

export function unsubscribe(eventName, listener) {
    document.removeEventListener(eventName, listener);
}

export function publish(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    const event = new CustomEvent(ev.currentTarget.eventName, { detail: ev.currentTarget.data });
    document.dispatchEvent(event);
}