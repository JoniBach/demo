
export function navigateToElement(elementId: string) {
    const element = document.getElementById(elementId + '-content');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}