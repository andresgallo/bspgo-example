/**
 * NavigationOnLead - Appends a attribute 'data-transparentnav' to header when
 *   the header is right before one of the SEL_APPLICABLE_LEADS, and hasnt passed the top half of lead.
 * - Also appends a trigger for scrolling down. CSS tkaes care of actually making the nav transparent. 
 */
document.addEventListener('DOMContentLoaded', () => {
    const SEL_APPLICABLE_LEADS = '.VideoLeadBackground'
    const selHeader = '.Page-header'
    const elLead = document.querySelector(SEL_APPLICABLE_LEADS)
    const elHead = document.querySelector(selHeader)
    let elScrollButton

    function init () {
        insertScroller()
        setBinds()
        checkForTransparentNav()
    }

    function checkForTransparentNav () {
        document.documentElement.setAttribute('data-transparentnav', window.scrollY < elLead.clientHeight / 3)
    }

    function insertScroller () {
        elScrollButton = document.createElement('button')
        elScrollButton.setAttribute('data-leadscroll-trigger', true)
        elLead.appendChild(elScrollButton)
    }

    function setBinds () {
        window.addEventListener('scroll', () => {
            checkForTransparentNav()
        })

        if (elScrollButton) {
            elScrollButton.addEventListener('click', () => {
                window.scroll({
                    top: elLead.clientHeight, 
                    left: 0, 
                    behavior: 'smooth'
                })
            })
        }
    }

    if (elLead && elHead) {
        const headH = elHead.clientHeight
        if (elLead.offsetTop <= headH) {
            init()
        }
    }
})
