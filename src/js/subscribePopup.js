/**
 * checks if EL_HIDDENINPUT_FORPOPUP exists and if it does 
 *   the 'ps-form' that contains, gets attribute  'data-formaspopup'
 * - ID of that form is stored, so it only ever shows up once. 
 * - THIS SHOULD BE BETTER OPTIMIZED
 */
document.addEventListener('DOMContentLoaded', () => {
    const EL_HIDDENINPUT_FORPOPUP = document.querySelector('input[type="hidden"][name="ispopup"]')
    let elPopup
    let formId

    /** only run this if there is a popup in the page... using the hidden input as a flag to make the popup. */
    if (EL_HIDDENINPUT_FORPOPUP) {
        init()
    }

    /**
     * init - sets up the form as a popup and creats mask and more
     */
    function init () {
        elPopup = EL_HIDDENINPUT_FORPOPUP.closest('ps-form')
        formId = elPopup.getAttribute('data-form-id') || 'genericId'

        if (localStorage[formId]) {
            elPopup.parentNode.removeChild(elPopup)
        } else {
            elPopup.setAttribute('data-formaspopup', true)
            setupMask()
        }
    }

    /**
     * setupMask - sets up a mask for dismissing the popup. 
     */
    function setupMask () {
        const mask = document.createElement('div')
        mask.setAttribute('data-popup-mask', true)
        elPopup.appendChild(mask)
        mask.addEventListener('click', () => {
            close()
        })
    }

    /**
     * On close save record the popup has been viewed
     */
    function close () {
        elPopup.parentNode.removeChild(elPopup)
        localStorage[formId] = 'seen'
    }
})
